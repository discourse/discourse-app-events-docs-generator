# **Discourse AppEvents Docs Generator**

This library provides scripts for parsing a given directory for Discourse AppEvents triggers and arguments passed in, and generating documentation from that data.

1. Create a .env file and set DISCOURSE_CORE to the desired directory path to be parsed.

2. Run the script from root of this repo with `node scripts/extract_app_events.mjs`. This writes the raw data to `app_events_details.json` and a list of appEvent IDs to `event-ids.yml`.

3. Optional: Inject JSDoc-style documentation for each callsite of AppEvents.trigger with `node scripts/add_app_events_docs_to_discourse.mjs`. This changes the line number references for each callsite, so be sure to run `node scripts/extract_app_events.mjs` after to update the line numbers for the raw `app_events_details.json` file. 

4. Run `node scripts/create_app_events_doc_markdown.mjs` to generate a markdown-formatted (GFM) file with consolidated AppEvents documentation, written to `app_events_doc.md`. This can be used to update [discourse-developer-docs](https://github.com/discourse/discourse-developer-docs).
