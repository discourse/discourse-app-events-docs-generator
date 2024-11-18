import "dotenv/config";
import path from "path";
import fs from "fs";

const discourseDir = process.env.DISCOURSE_CORE;

function updateFileWithAppEventDocs(filePath, appEventsDetails) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");
  // appEventsDetails has to be sorted in descending order of line number
  // so as to maintain line numbers while inserting comments
  // NOTE: this does result in app_events_details.json going out of date in terms of lineNumbers
  appEventsDetails.sort((a, b) => b.lineNumber - a.lineNumber);
  appEventsDetails.forEach((details) => {
    const { lineNumber } = details;
    // lines is 0-indexed while lineNumber refers to file line number which is 1-indexed
    const startPos =  lineNumber - 1;
    const indentation = lines[startPos].length - lines[startPos].trimStart().length;
    const docString = createDocumentation(details, indentation); // TODO: this should be a separate script
    lines.splice(startPos, 0, docString);
  });

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
}

function createDocumentation(details, indentation=0) {
  const { eventId, args, comments } = details;
  if (!eventId && !comments && args.length === 0) { return null; }

  const createArgDoc = (arg) => {
    const argTemplate = (argName, argType, argDesc) => {
      const templatedDesc = argDesc ? ` - ${argDesc}` : "";
      return ` * @arg {${argType}} ${argName}${templatedDesc}`;
    };

    if (arg.argType === 'object') {
      const objectArgName = `objectArg${arg.argPosition}`;
      const initialObjDoc = ` * @arg {object} ${objectArgName}`;
      return [
        initialObjDoc,
        ...arg.argValue
          .map((nestedArg) => argTemplate(`${objectArgName}.${nestedArg.key}`, nestedArg.valueType, nestedArg.description))
          .map((part) => `${' '.repeat(indentation)}${part}`)
      ].join('\n');
    }

    return argTemplate(arg.argValue, arg.argType, arg.description);
  };

  const argsStrings = args
    .sort((a, b) => a.argPosition - b.argPosition)
    .map((arg) => createArgDoc(arg));

  return [
    `/**`,
    ` * ${eventId} appEvent`,
    ` *`,
    ` * @event ${eventId}`,
    ...argsStrings,
    ` */`
  ].map((part) => `${' '.repeat(indentation)}${part}`)
  .join('\n');
}


(async () => {
  if (process.argv.length != 2) {
    console.log(
      "Usage: node add_app_events_docs_to_discourse.mjs, Remember to define DISCOURSE_CORE in an .env file"
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
  const groupedByFilePath = appEventsDetails.reduce((result, detail) => {
    result[detail.filePath] ||= [];
    result[detail.filePath].push(detail);
    return result;
  }, {});

  Object.keys(groupedByFilePath).forEach((filePath) => {
    updateFileWithAppEventDocs(
      path.join(discourseDir, filePath),
      groupedByFilePath[filePath]
    );
  });
})();
