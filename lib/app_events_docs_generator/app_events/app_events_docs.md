### ace
#### ace:resize [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/admin/components/admin-theme-editor.gjs#L120)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/admin/components/admin-theme-editor.gjs#120 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/admin/components/admin-theme-editor.gjs#L120)

No arguments passed to this event.

##### /plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins/show/explorer/edit.js#241 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins/show/explorer/edit.js#L241)

No arguments passed to this event.

</details>


### ai-quick-search
#### ai-quick-search:state-changed [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/connectors/search-menu-results-bottom/ai-quick-search.gjs#L90)

| Position | Argument             | Type    | Always Present | Description |
| -------- | -------------------- | ------- | -------------- | ----------- |
| 1        | objectArg1           | object  | True           | -           |
| -        | objectArg1.searching | boolean | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-ai/assets/javascripts/discourse/connectors/search-menu-results-bottom/ai-quick-search.gjs#90 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/connectors/search-menu-results-bottom/ai-quick-search.gjs#L90)

| Position | Argument             | Type    | Description |
| -------- | -------------------- | ------- | ----------- |
| 1        | objectArg1           | object  | -           |
| -        | objectArg1.searching | boolean | -           |

##### /plugins/discourse-ai/assets/javascripts/discourse/connectors/search-menu-results-bottom/ai-quick-search.gjs#116 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/connectors/search-menu-results-bottom/ai-quick-search.gjs#L116)

| Position | Argument             | Type    | Description |
| -------- | -------------------- | ------- | ----------- |
| 1        | objectArg1           | object  | -           |
| -        | objectArg1.searching | boolean | -           |

</details>


### bookmarks
#### bookmarks:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/bookmark-list.gjs#L54)

| Position | Argument                      | Type            | Always Present | Description |
| -------- | ----------------------------- | --------------- | -------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | True           | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/bookmark-list.gjs#54 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/bookmark-list.gjs#L54)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | null                 | null            | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### /frontend/discourse/app/components/bookmark-list.gjs#85 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/bookmark-list.gjs#L85)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | savedData1           | variable        | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### /frontend/discourse/app/controllers/topic.js#1743 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1743)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### /frontend/discourse/app/lib/topic-bookmark-manager.js#60 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/topic-bookmark-manager.js#L60)

| Position | Argument                      | Type            | Description |
| -------- | ----------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | -           |

##### /frontend/discourse/app/models/post.js#769 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/post.js#L769)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | data                | variable | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /frontend/discourse/app/models/post.js#789 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/post.js#L789)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | null                | null     | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /frontend/discourse/app/models/topic.js#851 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/topic.js#L851)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | null                | null            | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### /plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#427 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#L427)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### /plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/group/reports/show.js#116 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/group/reports/show.js#L116)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

</details>


### calendar
#### calendar:create-invitee-status [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L195)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | appEventData1 | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#195 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L195)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | data1    | variable | -           |

##### /plugins/discourse-events/assets/javascripts/discourse/components/livestream/zoom-page.gjs#140 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/livestream/zoom-page.gjs#L140)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | appEventData1 | variable | -           |

##### /plugins/discourse-events/assets/javascripts/discourse/lib/livestream-rsvp.js#95 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/lib/livestream-rsvp.js#L95)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | data     | variable | -           |

</details>

#### calendar:invitee-left-event [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L125)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.invitee | variable | True           | -           |
| -        | objectArg1.postId  | property | True           | -           |

#### calendar:update-invitee-status [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L192)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | appEventData1 | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#192 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L192)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | data1    | variable | -           |

##### /plugins/discourse-events/assets/javascripts/discourse/components/livestream/zoom-page.gjs#137 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/livestream/zoom-page.gjs#L137)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | appEventData1 | variable | -           |

##### /plugins/discourse-events/assets/javascripts/discourse/lib/livestream-rsvp.js#92 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/lib/livestream-rsvp.js#L92)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | data     | variable | -           |

</details>


### card
#### card:close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat/direct-message-button.gjs#L32)

No arguments passed to this event.

#### card:hide [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/card-contents-base.js#L288)

No arguments passed to this event.

#### card:show [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/card-contents-base.js#L79)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | username | variable | True           | -           |
| 2        | target   | variable | True           | -           |
| 3        | event    | variable | True           | -           |


### chat
#### chat:message_interaction [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-message/blocks/index.gjs#L18)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | result1.interaction | property | True           | -           |

#### chat:modify-selection [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L76)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.type    | variable | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-insert-link-modal [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L88)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-url [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L75)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | url      | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/routes/chat.js#75 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L75)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | url      | variable | -           |

##### /plugins/chat/assets/javascripts/discourse/routes/chat.js#80 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L80)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | url      | variable | -           |

</details>

#### chat:refresh-channel-members [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-subscriptions-manager.js#L522)

No arguments passed to this event.

#### chat:rerender-header [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L79)

No arguments passed to this event.

#### chat:toggle-close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L101)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | event    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#101 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L101)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | event    | variable | -           |

##### /plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#117 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L117)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | event    | variable | -           |

##### /plugins/chat/assets/javascripts/discourse/routes/chat.js#85 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L85)

No arguments passed to this event.

</details>

#### chat:toggle-expand [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L176)

| Position | Argument                               | Type     | Always Present | Description |
| -------- | -------------------------------------- | -------- | -------------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#176 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L176)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

##### /plugins/chat/assets/javascripts/discourse/services/chat.js#498 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat.js#L498)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

</details>


### composer
#### composer:add-files [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/share-target.gjs#L60)

| Position | Argument                   | Type      | Always Present | Description |
| -------- | -------------------------- | --------- | -------------- | ----------- |
| 1        | undefined                  | undefined | True           | -           |
| 2        | objectArg2                 | object    | False          | -           |
| -        | objectArg2.skipPlaceholder | boolean   | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/modal/share-target.gjs#60 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/share-target.gjs#L60)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | files1   | variable | -           |

##### /frontend/discourse/app/services/shared-content.js#51 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/shared-content.js#L51)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | files    | variable | -           |

##### /frontend/discourse/app/static/prosemirror/extensions/image.js#499 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/static/prosemirror/extensions/image.js#L499)

| Position | Argument                   | Type      | Description |
| -------- | -------------------------- | --------- | ----------- |
| 1        | undefined                  | undefined | -           |
| 2        | objectArg2                 | object    | -           |
| -        | objectArg2.skipPlaceholder | boolean   | -           |

</details>

#### composer:cancel-upload [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L875)

| Position | Argument          | Type     | Always Present | Description |
| -------- | ----------------- | -------- | -------------- | ----------- |
| 1        | objectArg1        | object   | False          | -           |
| -        | objectArg1.fileId | property | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/composer.js#875 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L875)

No arguments passed to this event.

##### /frontend/discourse/app/static/prosemirror/components/image-node-view.gjs#490 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/static/prosemirror/components/image-node-view.gjs#L490)

| Position | Argument          | Type     | Description |
| -------- | ----------------- | -------- | ----------- |
| 1        | objectArg1        | object   | -           |
| -        | objectArg1.fileId | property | -           |

##### /frontend/discourse/app/static/prosemirror/components/upload-placeholder-node-view.gjs#45 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/static/prosemirror/components/upload-placeholder-node-view.gjs#L45)

| Position | Argument          | Type     | Description |
| -------- | ----------------- | -------- | ----------- |
| 1        | objectArg1        | object   | -           |
| -        | objectArg1.fileId | property | -           |

##### /frontend/discourse/app/static/prosemirror/extensions/upload-placeholder.js#72 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/static/prosemirror/extensions/upload-placeholder.js#L72)

| Position | Argument          | Type     | Description |
| -------- | ----------------- | -------- | ----------- |
| 1        | objectArg1        | object   | -           |
| -        | objectArg1.fileId | variable | -           |

</details>

#### composer:cancelled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1899)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/composer.js#1899 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1899)

No arguments passed to this event.

##### /frontend/discourse/app/services/composer.js#1914 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1914)

No arguments passed to this event.

##### /frontend/discourse/app/services/composer.js#1932 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1932)

No arguments passed to this event.

</details>

#### composer:created-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1428)

| Position | Argument          | Type     | Always Present | Description |
| -------- | ----------------- | -------- | -------------- | ----------- |
| 1        | objectArg1        | object   | True           | -           |
| -        | objectArg1.postId | property | True           | -           |

#### composer:div-resizing [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-container.gjs#L213)

No arguments passed to this event.

#### composer:edited-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1421)

No arguments passed to this event.

#### composer:find-similar [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L65)

No arguments passed to this event.

#### composer:insert-block [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L642)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | template.content | property | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/controllers/topic.js#642 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L642)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | quotedText | variable | -           |

##### /frontend/discourse/app/controllers/topic.js#685 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L685)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | quotedText | variable | -           |

##### /frontend/discourse/app/controllers/topic.js#915 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L915)

| Position | Argument        | Type            | Description |
| -------- | --------------- | --------------- | ----------- |
| 1        | quotedText.trim | called_function | -           |

##### /frontend/discourse/app/controllers/topic.js#932 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L932)

| Position | Argument        | Type            | Description |
| -------- | --------------- | --------------- | ----------- |
| 1        | quotedText.trim | called_function | -           |

##### /frontend/discourse/app/lib/lightbox/quote-image.js#89 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/lightbox/quote-image.js#L89)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | quote    | variable | -           |

##### /plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-docked-composer.gjs#274 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-docked-composer.gjs#L274)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | quotedText1 | variable | -           |

##### /plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#103 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L103)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | template.content | property | -           |

</details>

#### composer:insert-text [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/gifs.gjs#L67)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | document.activeElement.href | property | True           | -           |
| 2        | objectArg2                  | object   | False          | -           |
| -        | objectArg2.ensureSpace      | boolean  | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/modal/gifs.gjs#67 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/gifs.gjs#L67)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | markup1  | variable | -           |

##### /frontend/discourse/app/services/search.js#61 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/search.js#L61)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | document.activeElement.href | property | -           |
| 2        | objectArg2                  | object   | -           |
| -        | objectArg2.ensureSpace      | boolean  | -           |

</details>

#### composer:open [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1690)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | property | True           | -           |

#### composer:opened [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L79)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/composer-body.js#79 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L79)

No arguments passed to this event.

##### /frontend/discourse/app/components/composer-body.js#95 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L95)

No arguments passed to this event.

</details>

#### composer:preview-toggled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L283)

| Position | Argument              | Type     | Always Present | Description |
| -------- | --------------------- | -------- | -------------- | ----------- |
| 1        | this.isPreviewVisible | property | True           | -           |

#### composer:replace-text [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/composer-event-editor.gjs#L72)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | parsed1.full                | property | True           | -           |
| 2        | newBlock1                   | variable | True           | -           |
| 3        | objectArg3                  | object   | True           | -           |
| -        | objectArg3.skipNewSelection | boolean  | True           | -           |
| -        | objectArg3.skipFocus        | boolean  | False          | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-events/assets/javascripts/discourse/components/composer-event-editor.gjs#72 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/composer-event-editor.gjs#L72)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | parsed1.full                | property | -           |
| 2        | newBlock1                   | variable | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.skipNewSelection | boolean  | -           |
| -        | objectArg3.skipFocus        | boolean  | -           |

##### /plugins/discourse-events/assets/javascripts/discourse/components/composer-event-editor.gjs#83 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/assets/javascripts/discourse/components/composer-event-editor.gjs#L83)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | parsed1.full                | property | -           |
| 2        | string                      | string   | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.skipNewSelection | boolean  | -           |

</details>

#### composer:reply-changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L609)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | this.composer.model | property | True           | -           |

#### composer:reply-reloaded [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/composer.js#L1158)

| Position | Argument | Type | Always Present | Description |
| -------- | -------- | ---- | -------------- | ----------- |
| 1        | this     | this | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/models/composer.js#1158 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/composer.js#L1158)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

##### /frontend/discourse/app/models/composer.js#1177 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/composer.js#L1177)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

</details>

#### composer:resize-ended [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-container.gjs#L227)

No arguments passed to this event.

#### composer:resize-started [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-container.gjs#L209)

No arguments passed to this event.

#### composer:resized [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L88)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/composer-body.js#88 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-body.js#L88)

No arguments passed to this event.

##### /frontend/discourse/app/components/composer-container.gjs#240 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-container.gjs#L240)

No arguments passed to this event.

</details>

#### composer:saved [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1403)

No arguments passed to this event.

#### composer:show-preview [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L71)

No arguments passed to this event.

#### composer:toolbar-popup-menu-button-clicked [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L904)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | menuItem | variable | True           | -           |

#### composer:typed-reply [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1549)

No arguments passed to this event.

#### composer:upload-progress:file.id [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L319)

| Position | Argument   | Type     | Always Present | Description |
| -------- | ---------- | -------- | -------------- | ----------- |
| 1        | percentage | variable | True           | -           |

#### this.composerEventPrefix:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L405)

No arguments passed to this event.

#### this.composerEventPrefix:apply-surround [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L540)

| Position | Argument                | Type    | Always Present | Description |
| -------- | ----------------------- | ------- | -------------- | ----------- |
| 1        | [grid]                  | string  | True           | -           |
| 2        | [/grid]                 | string  | True           | -           |
| 3        | grid_surround           | string  | True           | -           |
| 4        | objectArg4              | object  | True           | -           |
| -        | objectArg4.useBlockMode | boolean | True           | -           |

#### this.composerEventPrefix:closed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L195)

No arguments passed to this event.

#### this.composerEventPrefix:replace-text [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L437)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | True           | -           |
| 2        | replacement1                | variable | True           | -           |
| 3        | objectArg3                  | object   | False          | -           |
| -        | objectArg3.regex            | variable | False          | -           |
| -        | objectArg3.index            | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/composer-editor.gjs#437 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L437)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | replacement1                | variable | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

##### /frontend/discourse/app/components/composer-editor.gjs#463 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L463)

| Position | Argument     | Type     | Description |
| -------- | ------------ | -------- | ----------- |
| 1        | match1       | variable | -           |
| 2        | replacement1 | variable | -           |

##### /frontend/discourse/app/components/composer-editor.gjs#523 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L523)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | string                      | string   | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

</details>

#### this.composerEventPrefix:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L292)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### this.composerEventPrefix:upload-error [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L452)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file     | variable | True           | -           |

#### this.composerEventPrefix:upload-started [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L353)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |

#### this.composerEventPrefix:upload-success [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L398)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |
| 2        | upload    | variable | True           | -           |

#### this.composerEventPrefix:uploader-ready [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L440)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-aborted [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L132)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/lib/uppy/composer-upload.js#132 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L132)

No arguments passed to this event.

##### /frontend/discourse/app/lib/uppy/composer-upload.js#185 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L185)

No arguments passed to this event.

</details>

#### this.composerEventPrefix:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L426)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-preprocessing-complete [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/composer-upload.js#L527)

No arguments passed to this event.

#### this.composerEventPrefix:will-close [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L193)

No arguments passed to this event.

#### this.composerEventPrefix:will-open [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/composer-editor.gjs#L189)

No arguments passed to this event.


### composer-messages
#### composer-messages:close [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1151)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/composer.js#1151 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1151)

No arguments passed to this event.

##### /plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#70 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L70)

No arguments passed to this event.

</details>

#### composer-messages:create [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L993)

| Position | Argument                | Type            | Always Present | Description |
| -------- | ----------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1              | object          | True           | -           |
| -        | objectArg1.extraClass   | string          | True           | -           |
| -        | objectArg1.templateName | string          | True           | -           |
| -        | objectArg1.body         | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/composer.js#993 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L993)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /frontend/discourse/app/services/composer.js#1003 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1003)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /frontend/discourse/app/services/composer.js#1202 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1202)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /frontend/discourse/app/services/composer.js#1226 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1226)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /frontend/discourse/app/services/composer.js#1235 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1235)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /frontend/discourse/app/static/prosemirror/extensions/mention.js#260 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/static/prosemirror/extensions/mention.js#L260)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

</details>


### composer-service
#### composer-service:last-validated-at-cleared [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L2115)

No arguments passed to this event.

#### composer-service:last-validated-at-updated [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1293)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/composer.js#1293 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1293)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.model | variable | -           |

##### /frontend/discourse/app/services/composer.js#1507 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1507)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.model | property | -           |

</details>


### count-updated
#### count-updated:user.username_lower:key [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/user.js#L102)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | value    | variable | True           | -           |


### create-invite
#### create-invite:saved [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/create-invite-with-roles.gjs#L296)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | this.invite | property | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/modal/create-invite-with-roles.gjs#296 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/create-invite-with-roles.gjs#L296)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | this.invite | property | -           |

##### /frontend/discourse/app/components/modal/create-invite.gjs#154 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/create-invite.gjs#L154)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | this.invite | property | -           |

</details>


### cta
#### cta:shown [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/signup-cta.js#L72)

No arguments passed to this event.


### d-editor
#### d-editor:preview-click-group-card [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/d-editor-preview.gjs#L23)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |

#### d-editor:preview-click-user-card [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/d-editor-preview.gjs#L20)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |


### destroyed-custom-html
#### destroyed-custom-html:this.args.name [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/ui-kit/d-custom-html.gjs#L23)

No arguments passed to this event.


### discourse
#### discourse:focus-changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/document-title.js#L40)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | session.hasFocus | property | True           | -           |


### discourse-ai
#### discourse-ai:bot-header-icon-clicked [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-header-icon.gjs#L53)

No arguments passed to this event.

#### discourse-ai:bot-pm-created [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-bot-conversations-hidden-submit.js#L84)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.id    | property | True           | -           |
| -        | objectArg1.slug  | property | True           | -           |
| -        | objectArg1.title | variable | True           | -           |

#### discourse-ai:bot-pm-reply-created [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-bot-docked-submit.js#L69)

| Position | Argument           | Type      | Always Present | Description |
| -------- | ------------------ | --------- | -------------- | ----------- |
| 1        | objectArg1         | object    | True           | -           |
| -        | objectArg1.topicId | variable  | True           | -           |
| -        | objectArg1.postId  | undefined | True           | -           |

#### discourse-ai:bot-reply-finished [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/initializers/ai-bot-replies.js#L108)

| Position | Argument           | Type      | Always Present | Description |
| -------- | ------------------ | --------- | -------------- | ----------- |
| 1        | objectArg1         | object    | True           | -           |
| -        | objectArg1.topicId | variable  | True           | -           |
| -        | objectArg1.postId  | undefined | True           | -           |

#### discourse-ai:bot-reply-started [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/initializers/ai-bot-replies.js#L117)

| Position | Argument           | Type      | Always Present | Description |
| -------- | ------------------ | --------- | -------------- | ----------- |
| 1        | objectArg1         | object    | True           | -           |
| -        | objectArg1.topicId | variable  | True           | -           |
| -        | objectArg1.postId  | undefined | True           | -           |

#### discourse-ai:force-conversations-sidebar [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-conversations-sidebar-manager.js#L111)

No arguments passed to this event.

#### discourse-ai:new-conversation-btn-clicked [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-sidebar-new-conversation.gjs#L36)

No arguments passed to this event.

#### discourse-ai:post-submitted [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-docked-composer.gjs#L313)

| Position | Argument                  | Type     | Always Present | Description |
| -------- | ------------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1                | object   | True           | -           |
| -        | objectArg1.topicId        | property | True           | -           |
| -        | objectArg1.userPostNumber | property | True           | -           |

#### discourse-ai:stop-forcing-conversations-sidebar [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-conversations-sidebar-manager.js#L185)

No arguments passed to this event.


### discourse-reactions
#### discourse-reactions:reaction-toggled [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-reactions/assets/javascripts/discourse/models/discourse-reactions-custom-reaction.js#L18)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.post     | variable | True           | -           |
| -        | objectArg1.reaction | property | True           | -           |


### discourse-solved
#### discourse-solved:solution-toggled [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#L32)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | post1    | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#32 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#L32)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | post1    | variable | -           |

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#29 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#L29)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | post1    | variable | -           |

</details>


### discourse-templates
#### discourse-templates:show [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L72)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1                  | object   | True           | -           |
| -        | objectArg1.onInsertTemplate | variable | True           | -           |


### do-not-disturb
#### do-not-disturb:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/user.js#L1453)

| Position | Argument                  | Type     | Always Present | Description |
| -------- | ------------------------- | -------- | -------------- | ----------- |
| 1        | this.do_not_disturb_until | property | True           | -           |


### dom
#### dom:clean [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/clean-dom-on-route-change.js#L28)

No arguments passed to this event.


### draft
#### draft:destroyed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1874)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | key      | variable | True           | -           |


### embed-composer
#### embed-composer:edit-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1112)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | post     | variable | True           | -           |

#### embed-composer:reply-to-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/embed-topic-footer.gjs#L86)

| Position | Argument | Type | Always Present | Description |
| -------- | -------- | ---- | -------------- | ----------- |
| 1        | null     | null | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/embed-topic-footer.gjs#86 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/embed-topic-footer.gjs#L86)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | null     | null | -           |

##### /frontend/discourse/app/controllers/topic.js#640 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L640)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | post     | variable | -           |

##### /frontend/discourse/app/controllers/topic.js#913 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L913)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | post     | variable | -           |

</details>


### emoji-picker
#### emoji-picker:close [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1146)

No arguments passed to this event.


### flag
#### flag:created [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/flag.gjs#L169)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.message | property | True           | -           |
| -        | objectArg1.postId  | property | True           | -           |


### full-page-search
#### full-page-search:collapse-filters [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/full-page-search.js#L737)

No arguments passed to this event.

#### full-page-search:trigger-search [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/full-page-search.js#L741)

No arguments passed to this event.


### group
#### group:join [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/group-membership-button.gjs#L52)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | group1   | variable | True           | -           |

#### group:leave [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/group-membership-button.gjs#L40)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | model1   | variable | True           | -           |


### header
#### header:hide-topic [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic.js#L384)

No arguments passed to this event.

#### header:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L712)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.type  | string   | True           | -           |
| -        | objectArg1.event | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/keyboard-shortcuts.js#712 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L712)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /frontend/discourse/app/services/keyboard-shortcuts.js#721 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L721)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /frontend/discourse/app/services/keyboard-shortcuts.js#728 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L728)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /frontend/discourse/app/services/search.js#68 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/search.js#L68)

| Position | Argument        | Type   | Description |
| -------- | --------------- | ------ | ----------- |
| 1        | objectArg1      | object | -           |
| -        | objectArg1.type | string | -           |

</details>

#### header:show-topic [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/modal/convert-to-public-topic.gjs#L31)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic1   | variable | True           | -           |

#### header:update-topic [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L2071)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | composer.topic | property | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/controllers/topic.js#2071 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L2071)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### /frontend/discourse/app/controllers/topic.js#2200 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L2200)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### /frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#171 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#L171)

| Position | Argument | Type    | Description |
| -------- | -------- | ------- | ----------- |
| 1        | null     | null    | -           |
| 2        | 5000     | integer | -           |

##### /frontend/discourse/app/routes/topic.js#409 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic.js#L409)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | model    | variable | -           |

##### /frontend/discourse/app/services/composer.js#1423 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1423)

| Position | Argument       | Type     | Description |
| -------- | -------------- | -------- | ----------- |
| 1        | composer.topic | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#491 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L491)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

</details>


### inserted-custom-html
#### inserted-custom-html:this.args.name [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/ui-kit/d-custom-html.gjs#L17)

No arguments passed to this event.


### interface-color
#### interface-color:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/interface-color.js#L95)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/interface-color.js#95 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/interface-color.js#L95)

| Position | Argument               | Type     | Description |
| -------- | ---------------------- | -------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | -           |

##### /frontend/discourse/app/services/interface-color.js#113 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/interface-color.js#L113)

| Position | Argument              | Type     | Description |
| -------- | --------------------- | -------- | ----------- |
| 1        | DARK_VALUE_FOR_COOKIE | variable | -           |

##### /frontend/discourse/app/services/interface-color.js#127 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/interface-color.js#L127)

| Position | Argument               | Type     | Description |
| -------- | ---------------------- | -------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | -           |

##### /frontend/discourse/app/services/interface-color.js#136 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/interface-color.js#L136)

| Position | Argument              | Type     | Description |
| -------- | --------------------- | -------- | ----------- |
| 1        | DARK_VALUE_FOR_COOKIE | variable | -           |

</details>


### keyboard
#### keyboard:move-selection [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L590)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1                 | object   | True           | -           |
| -        | objectArg1.articles        | variable | True           | -           |
| -        | objectArg1.selectedArticle | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/services/keyboard-shortcuts.js#590 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L590)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | objectArg1                 | object   | -           |
| -        | objectArg1.articles        | variable | -           |
| -        | objectArg1.selectedArticle | variable | -           |

##### /frontend/discourse/app/services/keyboard-shortcuts.js#978 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L978)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | objectArg1                 | object   | -           |
| -        | objectArg1.articles        | variable | -           |
| -        | objectArg1.selectedArticle | variable | -           |

</details>


### nested
#### nested:scroll-to-target [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/url.js#L316)

No arguments passed to this event.


### nested-replies
#### nested-replies:activity-changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/nested.js#L862)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.topicId | variable | True           | -           |
| -        | objectArg1.postId  | property | True           | -           |
| -        | objectArg1.type    | property | True           | -           |

#### nested-replies:child-created [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/nested.js#L822)

| Position | Argument                    | Type            | Always Present | Description |
| -------- | --------------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1                  | object          | True           | -           |
| -        | objectArg1.topicId          | variable        | True           | -           |
| -        | objectArg1.post             | property        | True           | -           |
| -        | objectArg1.parentPostNumber | called_function | True           | -           |
| -        | objectArg1.isOwnPost        | undefined       | True           | -           |

#### nested-replies:post-registered [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/nested/post.gjs#L129)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | this.args.post | property | True           | -           |

#### nested-replies:post-unregistered [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/nested/post.gjs#L121)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | this.args.post | property | True           | -           |

#### nested-replies:scroll-restored [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/nested/post.gjs#L87)

No arguments passed to this event.


### notifications
#### notifications:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#L163)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#163 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#L163)

No arguments passed to this event.

##### /plugins/chat/assets/javascripts/discourse/services/chat-pane-pending-manager.js#64 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-pane-pending-manager.js#L64)

No arguments passed to this event.

##### /plugins/chat/assets/javascripts/discourse/services/chat-pane-pending-manager.js#81 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-pane-pending-manager.js#L81)

No arguments passed to this event.

##### /plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#109 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#L109)

No arguments passed to this event.

</details>


### onboarding-step
#### onboarding-step:completed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/admin-onboarding/step.gjs#L52)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | this.name | property | True           | -           |


### page
#### page:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/page-tracker.js#L42)

| Position | Argument                           | Type            | Always Present | Description |
| -------- | ---------------------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1                         | object          | True           | -           |
| -        | objectArg1.url                     | variable        | True           | -           |
| -        | objectArg1.title                   | called_function | False          | -           |
| -        | objectArg1.currentRouteName        | property        | False          | -           |
| -        | objectArg1.replacedOnlyQueryParams | variable        | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/lib/page-tracker.js#42 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/page-tracker.js#L42)

| Position | Argument                           | Type            | Description |
| -------- | ---------------------------------- | --------------- | ----------- |
| 1        | objectArg1                         | object          | -           |
| -        | objectArg1.url                     | variable        | -           |
| -        | objectArg1.title                   | called_function | -           |
| -        | objectArg1.currentRouteName        | property        | -           |
| -        | objectArg1.replacedOnlyQueryParams | variable        | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#49 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L49)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#65 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L65)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#97 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L97)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#146 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L146)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#189 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L189)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#233 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L233)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#300 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L300)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#323 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L323)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#340 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L340)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#352 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L352)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#371 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L371)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#396 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L396)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#413 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L413)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#434 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L434)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#492 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L492)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#532 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L532)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#574 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L574)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#582 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-events/test/javascripts/integration/components/upcoming-events-list-test.gjs#L582)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

</details>

#### page:compose-reply [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L901)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic    | variable | True           | -           |

#### page:like-toggled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/post.gjs#L244)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | post1       | variable | True           | -           |
| 2        | likeAction1 | variable | True           | -           |

#### page:topic-loaded [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic/from-params.js#L178)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | model.topic | property | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/routes/topic/from-params.js#178 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic/from-params.js#L178)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### /frontend/discourse/app/routes/topic/from-params.js#414 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic/from-params.js#L414)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | model.topic | property | -           |

</details>


### policy
#### policy:changed [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-policy/assets/javascripts/discourse/initializers/extend-for-policy.gjs#L98)

| Position | Argument              | Type     | Always Present | Description |
| -------- | --------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1            | object   | True           | -           |
| -        | objectArg1.controller | variable | True           | -           |
| -        | objectArg1.message    | variable | True           | -           |


### poll
#### poll:voted [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L272)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | poll1     | variable | True           | -           |
| 2        | this.post | property | True           | -           |
| 3        | castVote1 | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#272 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L272)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | castVote1 | variable | -           |

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#625 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L625)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

</details>


### post
#### post:created [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/composer.js#L1456)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |

#### post:highlight [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/url.js#L446)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | result.payload.post_number | property | True           | -           |
| 2        | options                    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/lib/url.js#446 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/url.js#L446)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /frontend/discourse/app/routes/topic/from-params.js#188 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/routes/topic/from-params.js#L188)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /frontend/discourse/app/services/composer.js#1431 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/composer.js#L1431)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | result.payload.post_number | property | -           |
| 2        | options                    | variable | -           |

</details>

#### post:show-revision [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/post-stream.js#L1430)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | copy.postNumber     | property | True           | -           |
| 2        | copy.revisionNumber | property | True           | -           |


### post-stream
#### post-stream:filter-replies [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/post-stream.js#L331)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1             | object   | True           | -           |
| -        | objectArg1.topic_id    | property | True           | -           |
| -        | objectArg1.post_number | variable | True           | -           |
| -        | objectArg1.post_id     | variable | True           | -           |

#### post-stream:filter-show-all [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/post/filtered-notice.gjs#L111)

| Position | Argument                | Type     | Always Present | Description |
| -------- | ----------------------- | -------- | -------------- | ----------- |
| 1        | this.args.streamFilters | property | True           | -           |

#### post-stream:filter-upwards [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/post-stream.js#L354)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.topic_id | property | True           | -           |
| -        | objectArg1.post_id  | variable | True           | -           |

#### post-stream:gap-expanded [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/post/gap.gjs#L26)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.post_id | property | True           | -           |


### quote-button
#### quote-button:edit [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L421)

No arguments passed to this event.

#### quote-button:quote [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L405)

No arguments passed to this event.


### reviewablenote
#### reviewablenote:created [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/reviewable/note-form.gjs#L57)

| Position | Argument             | Type     | Always Present | Description |
| -------- | -------------------- | -------- | -------------- | ----------- |
| 1        | data1                | variable | True           | -           |
| 2        | this.args.reviewable | property | True           | -           |
| 3        | this.formApi         | property | True           | -           |


### search
#### search:search_result_view [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/full-page-search.js#L600)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.page | property | True           | -           |


### search-menu
#### search-menu:search_menu_opened [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/search-menu.gjs#L169)

No arguments passed to this event.


### sidebar-hamburger-dropdown
#### sidebar-hamburger-dropdown:rendered [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/sidebar/hamburger-dropdown.gjs#L25)

No arguments passed to this event.


### site-header
#### site-header:force-refresh [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/narrow-desktop.js#L24)

No arguments passed to this event.


### tag-info
#### tag-info:updated [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/tag-settings.gjs#L140)

| Position | Argument                | Type     | Always Present | Description |
| -------- | ----------------------- | -------- | -------------- | ----------- |
| 1        | result1.tag_settings.id | property | True           | -           |


### topic
#### topic:created [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/composer.js#L1458)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |
| 2        | this        | this     | True           | -           |

#### topic:current-post-changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L734)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.post | variable | True           | -           |

#### topic:current-post-scrolled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L741)

| Position | Argument             | Type            | Always Present | Description |
| -------- | -------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1           | object          | True           | -           |
| -        | objectArg1.postIndex | property        | True           | -           |
| -        | objectArg1.percent   | called_function | True           | -           |

#### topic:edit-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1117)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | editEvent | variable | True           | -           |

#### topic:jump-to-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1270)

| Position | Argument | Type            | Always Present | Description |
| -------- | -------- | --------------- | -------------- | ----------- |
| 1        | this.get | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/controllers/topic.js#1270 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1270)

| Position | Argument | Type            | Description |
| -------- | -------- | --------------- | ----------- |
| 1        | this.get | called_function | -           |

##### /frontend/discourse/app/controllers/topic.js#1715 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L1715)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | postId   | variable | -           |

</details>

#### topic:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/keyboard-shortcuts.js#L708)

| Position | Argument        | Type   | Always Present | Description |
| -------- | --------------- | ------ | -------------- | ----------- |
| 1        | objectArg1      | object | True           | -           |
| -        | objectArg1.type | string | True           | -           |

#### topic:quote-post [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/controllers/topic.js#L651)

| Position | Argument   | Type     | Always Present | Description |
| -------- | ---------- | -------- | -------------- | ----------- |
| 1        | quoteEvent | variable | True           | -           |

#### topic:scrolled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/discourse-topic.js#L119)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | offset   | variable | True           | -           |

#### topic:timings-sent [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/services/screen-track.js#L208)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |

#### topic:toggle-progress-expansion [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/embed-mode-composer.gjs#L116)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/components/embed-mode-composer.gjs#116 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/embed-mode-composer.gjs#L116)

No arguments passed to this event.

##### /frontend/discourse/app/components/embed-topic-footer.gjs#68 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/embed-topic-footer.gjs#L68)

No arguments passed to this event.

</details>


### topic-header
#### topic-header:trigger-this.args.type-card [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/header/topic/participant.gjs#L19)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | this.args.username | property | True           | -           |
| 2        | e1.target          | property | True           | -           |
| 3        | e1                 | variable | True           | -           |


### upload-mixin
#### upload-mixin:this.config.id:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L575)

No arguments passed to this event.

#### upload-mixin:this.config.id:in-progress-uploads [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L385)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | this.inProgressUploads | property | True           | -           |

#### upload-mixin:this.config.id:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L307)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### upload-mixin:this.config.id:upload-success [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L252)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | file.name        | property | True           | -           |
| 2        | completeResponse | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /frontend/discourse/app/lib/uppy/uppy-upload.js#252 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L252)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | file.name        | property | -           |
| 2        | completeResponse | variable | -           |

##### /frontend/discourse/app/lib/uppy/uppy-upload.js#273 [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L273)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | file.name | property | -           |
| 2        | upload    | variable | -           |

</details>

#### upload-mixin:this.config.id:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/uppy/uppy-upload.js#L349)

No arguments passed to this event.


### user-card
#### user-card:after-show [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/card-contents-base.js#L109)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.user | variable | True           | -           |

#### user-card:show [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/card-contents-base.js#L104)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.username | variable | True           | -           |


### user-drafts
#### user-drafts:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/user.js#L1459)

No arguments passed to this event.


### user-menu
#### user-menu:notification-click [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/user-menu/notification-item.js#L91)

| Position | Argument                | Type     | Always Present | Description |
| -------- | ----------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1              | object   | True           | -           |
| -        | objectArg1.notification | property | True           | -           |
| -        | objectArg1.href         | property | True           | -           |

#### user-menu:rendered [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/user-menu/menu.gjs#L267)

No arguments passed to this event.

#### user-menu:tab-click [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/user-menu/menu.gjs#L262)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | tab1.id  | property | True           | -           |


### user-reviewable-count
#### user-reviewable-count:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/models/user.js#L1464)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | count    | variable | True           | -           |


### user-status
#### user-status:changed [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/instance-initializers/subscribe-user-notifications.js#L236)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |


### other events
#### AI_RESULTS_TOGGLED [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#L67)

| Position | Argument               | Type    | Always Present | Description |
| -------- | ---------------------- | ------- | -------------- | ----------- |
| 1        | objectArg1             | object  | True           | -           |
| -        | objectArg1.enabled     | boolean | True           | -           |
| -        | objectArg1.autoEnabled | boolean | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#67 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#L67)

| Position | Argument               | Type    | Description |
| -------- | ---------------------- | ------- | ----------- |
| 1        | objectArg1             | object  | -           |
| -        | objectArg1.enabled     | boolean | -           |
| -        | objectArg1.autoEnabled | boolean | -           |

##### /plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#151 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#L151)

| Position | Argument               | Type      | Description |
| -------- | ---------------------- | --------- | ----------- |
| 1        | objectArg1             | object    | -           |
| -        | objectArg1.enabled     | undefined | -           |
| -        | objectArg1.autoEnabled | property  | -           |

##### /plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#189 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#L189)

| Position | Argument               | Type    | Description |
| -------- | ---------------------- | ------- | ----------- |
| 1        | objectArg1             | object  | -           |
| -        | objectArg1.enabled     | boolean | -           |
| -        | objectArg1.autoEnabled | boolean | -           |

</details>

#### click-tracked [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/click-track.js#L104)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | href     | variable | True           | -           |

#### desktop-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/desktop-notifications.js#L179)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### keyboard-visibility-change [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/components/d-virtual-height.gjs#L58)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | keyboardVisible | variable | True           | -           |

#### push-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/push-notifications.js#L77)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### REFRESH_USER_SIDEBAR_CATEGORIES_SECTION_COUNTS_APP_EVENT_NAME [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/plugin-api.gjs#L2536)

No arguments passed to this event.

#### this.flagCreatedEvent [:link:](https://github.com/discourse/discourse/blob/main/frontend/discourse/app/lib/flag-targets/flag.js#L15)

| Position | Argument                       | Type     | Always Present | Description |
| -------- | ------------------------------ | -------- | -------------- | ----------- |
| 1        | flagModal.args.model.flagModel | property | True           | -           |
| 2        | postAction                     | variable | True           | -           |
| 3        | opts                           | variable | True           | -           |