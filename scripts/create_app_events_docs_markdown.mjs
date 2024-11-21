import "dotenv/config";
import path from "path";
import fs from "fs";
import { markdownTable } from "markdown-table";

const discourseGithubRepoBase =
  "https://github.com/discourse/discourse/blob/main";
const emptyValuePlaceholder = "-";
const miscEventGroup = "other events";

function extractEventGroup(eventId) {
  if (eventId.startsWith("LIGHTBOX")) {
    return "lightbox";
  } else if (eventId.startsWith("this.composerEventPrefix")) {
    return "composer";
  } else if (eventId.split(":").length === 1) {
    return miscEventGroup;
  }
  return eventId.split(":")[0];
}

function createDocumentationForEventGroup(eventGroup, details) {
  const markdown = `### ${eventGroup}\n`;
  const detailsByEventId = details.reduce((acc, detail) => {
    acc[detail.eventId] ||= [];
    acc[detail.eventId].push(detail);
    return acc;
  }, {});

  return (
    markdown +
    Object.entries(detailsByEventId)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([eventId, appEvents]) => {
        return createDocumentationForAppEvent(eventId, appEvents);
      })
      .join("\n\n")
  );
}

function createDocumentationForAppEvent(eventId, appEventCalls) {
  return [createMainBody(appEventCalls), createDetails(appEventCalls)]
    .filter((doc) => doc)
    .join("\n\n");
}

function createMainBody(appEventCalls) {
  const { eventId, filePath, lineNumber, args, description } =
    consolidateAppEventCalls(appEventCalls);
  const codeUrl = `${discourseGithubRepoBase}${filePath}#L${lineNumber}`;

  if (args.length === 0) {
    return [
      `${"#".repeat(4)} ${eventId} [:link:](${codeUrl})`,
      description,
      "No arguments passed to this event.",
    ]
      .filter((doc) => doc)
      .join("\n\n");
  }

  const headers = [
    "Position",
    "Argument",
    "Type",
    "Always Present",
    "Description",
  ];

  const rows = args.reduce((result, arg) => {
    const argDesc = arg.description || emptyValuePlaceholder;

    if (arg.argType === "object") {
      const objArgName = `objectArg${arg.argPosition}`;
      const argRow = [
        arg.argPosition,
        objArgName,
        arg.argType,
        arg.isAlwaysPresent,
        argDesc,
      ];
      const objArgRows = arg.argValue.map((nestedArg) => {
        const nestedArgDesc = nestedArg.description || emptyValuePlaceholder;
        return [
          emptyValuePlaceholder,
          `${objArgName}.${nestedArg.key}`,
          nestedArg.valueType,
          nestedArg.isAlwaysPresent,
          nestedArgDesc,
        ];
      });

      result.push(argRow, ...objArgRows);
    } else {
      const argRow = [
        arg.argPosition,
        arg.argValue,
        arg.argType,
        arg.isAlwaysPresent,
        argDesc,
      ];
      result.push(argRow);
    }

    return result;
  }, []);

  const argsTable = markdownTable([headers, ...rows]);

  return [
    `${"#".repeat(4)} ${eventId} [:link:](${codeUrl})`,
    description,
    argsTable,
  ]
    .filter((doc) => doc)
    .join("\n\n");
}

function consolidateAppEventCalls(appEventCalls) {
  const { eventId, filePath, lineNumber, description } = appEventCalls[0];

  // TODO: description should be more generic, take from first for now
  let consolidatedAppEvent = { eventId, filePath, lineNumber, description };
  // use argPosition as key as obj arg have no string argValue
  let argCountMap = {};

  consolidatedAppEvent.args = appEventCalls.reduce((result, appEvent) => {
    appEvent.args.forEach((arg) => {
      const position = arg.argPosition;
      const existingArg = result[position];
      const existingArgLength = existingArg ? existingArg.argValue.length : 0;
      if (arg.argValue.length > existingArgLength) {
        result[position] = { ...arg };
        //TODO: also see if we should be considering descriptions and nestedArgs
      }

      // Add to count map that will be used to determine isAlwaysPresent later for the arg
      argCountMap[position] ||= 0;
      argCountMap[position]++;

      if (arg.argType === "object") {
        arg.argValue.forEach((nestedArg) => {
          const key = `objectArg${position}.${nestedArg.key}`;
          // argCountMap[key] += 1;
          argCountMap[key] ||= 0;
          argCountMap[key]++;
        });
      }
    });
    return result;
  }, []);

  consolidatedAppEvent.args.forEach((arg) => {
    if (arg.argType === "object") {
      arg.argValue.forEach((nestedArg) => {
        const key = `objectArg${arg.argPosition}.${nestedArg.key}`;
        nestedArg.isAlwaysPresent =
          argCountMap[key] === appEventCalls.length ? "True" : "False";
      });
    }
    arg.isAlwaysPresent =
      argCountMap[arg.argPosition] === appEventCalls.length ? "True" : "False";
  });

  return consolidatedAppEvent;
}

function createDetails(appEvents) {
  if (appEvents.length <= 1) {
    return null;
  }
  const details = appEvents
    .map((e) => createDetailsDocumentation(e))
    .join("\n\n");

  return [
    "<details><summary>Detailed List</summary>",
    details,
    "</details>",
  ].join("\n\n");
}

function createDetailsDocumentation(appEvent, headingLevel = 5) {
  const { filePath, lineNumber, args, description } = appEvent;
  const codeUrl = `${discourseGithubRepoBase}${filePath}#L${lineNumber}`;

  if (args.length === 0) {
    return [
      `${"#".repeat(
        headingLevel
      )} ${filePath}#${lineNumber} [:link:](${codeUrl})`,
      description,
      "No arguments passed to this event.",
    ]
      .filter((doc) => doc)
      .join("\n\n");
  }

  const headers = ["Position", "Argument", "Type", "Description"];
  const rows = args.reduce((result, arg) => {
    const argDesc = arg.description || emptyValuePlaceholder;

    if (arg.argType === "object") {
      const objArgName = `objectArg${arg.argPosition}`;
      const argRow = [arg.argPosition, objArgName, arg.argType, argDesc];
      const objArgRows = arg.argValue.map((nestedArg) => {
        const nestedArgDesc = nestedArg.description || emptyValuePlaceholder;
        return [
          emptyValuePlaceholder,
          `${objArgName}.${nestedArg.key}`,
          nestedArg.valueType,
          nestedArgDesc,
        ];
      });

      result.push(argRow, ...objArgRows);
    } else {
      arg.argValue ||= arg.argType; // primarily to handle null
      const argRow = [arg.argPosition, arg.argValue, arg.argType, argDesc];
      result.push(argRow);
    }

    return result;
  }, []);

  const argsTable = markdownTable([headers, ...rows]);
  const headingTitle = `${filePath}#${lineNumber}`;

  return [
    `${"#".repeat(headingLevel)} ${headingTitle} [:link:](${codeUrl})`,
    description,
    argsTable,
  ]
    .filter((doc) => doc)
    .join("\n\n");
}

(async () => {
  if (process.argv.length != 2) {
    console.log(
      "Usage: node create_app_events_docs_markdown.mjs, Remember to define DISCOURSE_CORE in an .env file"
    );
    process.exit(1);
  }

  const appEventsDetailsFilePath = path.join(
    ".",
    "lib",
    "app_events_docs_generator",
    "app_events",
    "app_events_details.json"
  );

  const appEventsDetails = JSON.parse(
    fs.readFileSync(appEventsDetailsFilePath, "utf8")
  );

  // Group appEventsDetails by filePath, so that each file is only updated once
  const groupedByEventGroup = appEventsDetails.reduce((result, detail) => {
    const key = extractEventGroup(detail.eventId);
    result[key] ||= [];
    result[key].push(detail);
    return result;
  }, {});

  const docs = Object.keys(groupedByEventGroup)
    .sort((a, b) => {
      if (a === miscEventGroup) {
        return 1;
      } else if (b === miscEventGroup) {
        return -1;
      }
      return a.localeCompare(b);
    })
    .map((eventGroup) => {
      return createDocumentationForEventGroup(
        eventGroup,
        groupedByEventGroup[eventGroup]
      );
    })
    .join("\n\n\n");

  // write docs to file
  const docsPath = path.join(
    ".",
    "lib",
    "app_events_docs_generator",
    "app_events",
    "app_events_docs.md"
  );
  fs.writeFileSync(docsPath, docs);
})();
