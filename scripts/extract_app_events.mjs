import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import parser from "@babel/parser";
import _traverse from "@babel/traverse";
import * as t from "@babel/types";
import { promisify } from "util";
import { Preprocessor } from "content-tag";
import "dotenv/config";

const discourseDir = process.env.DISCOURSE_CORE;
const traverse = _traverse.default;
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const GJSPreprocessor = new Preprocessor();

const EXCLUDED_DIR_PATTERNS = [
  "/app/assets/javascripts/discourse/tests/",
  "/discourse/tmp/",
  "node_modules",
  "/discourse/dist/",
  "/discourse/vendor/",
  "/discourse/public/",
  "/discourse/spec/",
  "/discourse/plugins/chat/test",
  "/discourse/plugins/discourse-deprecation-collector/",
];
const filesToDebug = [];

async function isExcludedDir(filePath) {
  return EXCLUDED_DIR_PATTERNS.some((pattern) => filePath.includes(pattern));
}

async function parseFile(filePath) {
  let hasAppEventsTrigger = { result: false };
  let code = await readFile(filePath, "utf8");
  const relativeFilePath = filePath.replace(discourseDir, "");

  try {
    if (filePath.endsWith(".gjs")) {
      code = GJSPreprocessor.process(code);
    }

    const ast = parser.parse(code, {
      sourceType: "module",
      plugins: [["decorators", { version: "2023-11" }]],
      errorRecovery: true,
    });
    const eventTriggers = [];

    traverse(ast, {
      CallExpression(path) {
        extractAppEvents(
          path,
          relativeFilePath,
          eventTriggers,
          hasAppEventsTrigger
        );
      },
      OptionalCallExpression(path) {
        extractAppEventsFromOptionalExpressions(
          path,
          relativeFilePath,
          eventTriggers,
          hasAppEventsTrigger
        );
      },
    });
    return [eventTriggers, hasAppEventsTrigger];
  } catch (error) {
    console.error(`Error parsing file: ${filePath}`);
    console.error(error);
    return [[], false];
  }
}

function extractAppEvents(path, filePath, eventTriggers, hasAppEventsTrigger) {
  const { node } = path;
  const { callee } = node;
  // This first condition checks for the .trigger identifier
  if (
    t.isMemberExpression(callee) &&
    t.isIdentifier(callee.property, { name: "trigger" }) &&
    node.arguments.length > 0
  ) {
    const { object } = callee;
    // These conditions check that the object calling .trigger is referring to appEvents
    if (
      t.isIdentifier(object, { name: "appEvents" }) ||
      (t.isMemberExpression(object) &&
        t.isIdentifier(object.property, { name: "appEvents" })) ||
      (t.isCallExpression(object) &&
        t.isMemberExpression(object.callee) &&
        t.isIdentifier(object.callee.property, { name: "lookup" }) &&
        t.isStringLiteral(object.arguments[0], { value: "service:app-events" }))
    ) {
      hasAppEventsTrigger.result = true;

      const { eventId } = extractEventDetails(node.arguments[0]);
      const location = node.loc;
      const lineNumber = location ? location.start.line : null;
      const comments = extractComments(path);

      eventTriggers.push({
        eventId,
        filePath,
        lineNumber,
        comments,
      });
    }
  }
}

function extractAppEventsFromOptionalExpressions(
  path,
  filePath,
  eventTriggers,
  hasAppEventsTrigger
) {
  const { node } = path;
  const { callee } = node;
  if (
    t.isOptionalMemberExpression(callee) &&
    t.isIdentifier(callee.property, { name: "trigger" }) &&
    node.arguments.length > 0
  ) {
    const { object } = path.node.callee;
    if (
      t.isIdentifier(object, { name: "appEvents" }) ||
      (t.isOptionalMemberExpression(object) &&
        t.isIdentifier(object.property, { name: "appEvents" })) ||
      (t.isOptionalCallExpression(object) &&
        t.isOptionalMemberExpression(object.callee) &&
        t.isIdentifier(object.callee.property, { name: "lookup" }) &&
        t.isStringLiteral(object.arguments[0], { value: "service:app-events" }))
    ) {
      hasAppEventsTrigger.result = true;

      const { eventId } = extractEventDetails(node.arguments[0]);
      const location = node.loc;
      const lineNumber = location ? location.start.line : null;
      const comments = extractComments(path);

      eventTriggers.push({
        eventId,
        filePath,
        lineNumber,
        comments,
      });
    }
  }
}

function extractEventDetails(eventIdNode) {
  let eventId;

  if (t.isStringLiteral(eventIdNode)) {
    eventId = eventIdNode.value;
  } else if (t.isIdentifier(eventIdNode)) {
    eventId = eventIdNode.name;
  } else if (t.isMemberExpression(eventIdNode)) {
    eventId = extractNameFromMemberExpression(eventIdNode);
  } else if (t.isCallExpression(eventIdNode)) {
    let calleeObjectName;
    if (eventIdNode.callee.object) {
      calleeObjectName = t.isThisExpression(eventIdNode.callee.object)
        ? "this"
        : eventIdNode.callee.object.name;
    }
    eventId = `${calleeObjectName}.${eventIdNode.callee.property.name}`;
  } else if (t.isTemplateLiteral(eventIdNode)) {
    eventId = eventIdNode.quasis.reduce((acc, quasi, index) => {
      // empty string quasi value here is fine, just indicates that it's either a head or tail quasi that should have an expression interpolated
      acc += quasi.value.raw;

      const currExpression = eventIdNode.expressions[index];
      if (currExpression) {
        if (t.isIdentifier(currExpression)) {
          acc += currExpression.name;
        } else if (t.isMemberExpression(currExpression)) {
          acc += extractNameFromMemberExpression(currExpression);
        } else if (t.isCallExpression(currExpression)) {
          let calleeObjectName;
          if (currExpression.callee.object) {
            calleeObjectName = t.isThisExpression(currExpression.callee.object)
              ? "this"
              : currExpression.callee.object.name;
          }
          acc += `${calleeObjectName}.${currExpression.callee.property.name}`;
        }
      }

      return acc;
    }, "");
  }

  return { eventId };
}

function extractNameFromMemberExpression(currExpression) {
  let parts = [];
  let currNode = currExpression;
  while (t.isMemberExpression(currNode)) {
    parts.unshift(currNode.property.name);
    currNode = currNode.object;
  }
  if (t.isIdentifier(currNode)) {
    parts.unshift(currNode.name);
  } else if (t.isThisExpression(currNode)) {
    parts.unshift("this");
  }

  return parts.join(".");
}

function extractComments(path) {
  // to find comment, need to traverse to parent ExpressionStatement -
  // In the Babel AST, comments are generally attached to statement-level nodes (like ExpressionStatement)
  // or declaration nodes, rather than to expression nodes (like CallExpression).
  const parentStatement = path.findParent((p) => t.isExpressionStatement(p));
  if (!parentStatement || !parentStatement.node.leadingComments) {
    return null;
  }

  return parentStatement.node.leadingComments
    .reduce((commentLines, currentComment) => {
      commentLines.push(currentComment.value.trim());
      return commentLines;
    }, [])
    .join("\n");
}

async function parseDirectory(directoryPath) {
  const eventTriggers = [];
  const files = await readdir(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);

    if (await isExcludedDir(filePath)) {
      continue;
    }

    const fileStat = await stat(filePath);

    if (
      fileStat.isFile() &&
      (filePath.endsWith(".js") || filePath.endsWith(".gjs"))
    ) {
      const [parsedTriggers, hasAppEventsTrigger] = await parseFile(filePath);

      if (
        hasAppEventsTrigger.result &&
        parsedTriggers.filter(
          (trigger) => trigger.eventId && !trigger.eventId.includes("undefined")
        ).length === 0
      ) {
        console.log(`DEBUG THE FILE: ${filePath}`);
        filesToDebug.push(filePath);
      }

      eventTriggers.push(...parsedTriggers);
    } else if (fileStat.isDirectory()) {
      eventTriggers.push(...(await parseDirectory(filePath)));
    }
  }

  return eventTriggers;
}

// Main script
(async () => {
  if (process.argv.length != 2) {
    console.log(
      "Usage: node extract_app_events.mjs, Remember to define DISCOURSE_CORE in an .env file"
    );
    process.exit(1);
  }

  const eventTriggers = await parseDirectory(discourseDir);

  if (filesToDebug.length > 0) {
    const filesToDebugFilePath = path.join(
      ".",
      "scripts",
      "files_to_debug.txt"
    );
    fs.writeFileSync(filesToDebugFilePath, filesToDebug.join("\n"));
  }

  const eventIdsFilePath = path.join(
    ".",
    "lib",
    "app_events_docs_generator",
    "app_events",
    "event-ids.yml"
  );

  const allEventIds = [
    ...new Set(eventTriggers.map((trigger) => trigger.eventId)),
  ].sort();

  const eventIds = { app_event_ids: allEventIds };
  fs.writeFileSync(
    eventIdsFilePath,
    "---\n" + yaml.dump(eventIds, { noArrayIndent: true }),
    "utf8"
  );
  console.log(
    `${allEventIds.length} Extracted event IDs saved to ${eventIdsFilePath}`
  );

  // Output detailed information
  const detailedOutputPath = path.join(
    ".",
    "lib",
    "app_events_docs_generator",
    "app_events",
    "app_events_details.json"
  );
  fs.writeFileSync(detailedOutputPath, JSON.stringify(eventTriggers, null, 2));
  console.log(
    `Detailed app events information saved to ${detailedOutputPath} with ${eventTriggers.length} events`
  );
})();