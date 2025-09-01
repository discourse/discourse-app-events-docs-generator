### ace
#### ace:resize [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/admin/addon/components/admin-theme-editor.gjs#L118)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/admin/addon/components/admin-theme-editor.gjs#118 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/admin/addon/components/admin-theme-editor.gjs#L118)

No arguments passed to this event.

##### /plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins-explorer-index.js#116 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins-explorer-index.js#L116)

No arguments passed to this event.

##### /plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins-explorer-queries-details.js#137 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/admin-plugins-explorer-queries-details.js#L137)

No arguments passed to this event.

</details>


### bookmarks
#### bookmarks:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L53)

| Position | Argument                      | Type            | Always Present | Description |
| -------- | ----------------------------- | --------------- | -------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | True           | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/bookmark-list.gjs#53 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L53)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | null                 | null            | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/bookmark-list.gjs#84 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L84)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | savedData1           | variable        | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1462 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1462)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### /app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#58 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#L58)

| Position | Argument                      | Type            | Description |
| -------- | ----------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/models/post.js#679 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L679)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | data                | variable | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /app/assets/javascripts/discourse/app/models/post.js#701 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L701)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | null                | null     | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /app/assets/javascripts/discourse/app/models/topic.js#704 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/topic.js#L704)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | null                | null            | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### /plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#373 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#L373)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### /plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/group-reports-show.js#120 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-data-explorer/assets/javascripts/discourse/controllers/group-reports-show.js#L120)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

</details>


### calendar
#### calendar:create-invitee-status [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L69)

| Position | Argument          | Type     | Always Present | Description |
| -------- | ----------------- | -------- | -------------- | ----------- |
| 1        | objectArg1        | object   | True           | -           |
| -        | objectArg1.status | variable | True           | -           |
| -        | objectArg1.postId | property | True           | -           |

#### calendar:invitee-left-event [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L41)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.invitee | variable | True           | -           |
| -        | objectArg1.postId  | property | True           | -           |

#### calendar:update-invitee-status [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/assets/javascripts/discourse/components/discourse-post-event/status.gjs#L55)

| Position | Argument          | Type     | Always Present | Description |
| -------- | ----------------- | -------- | -------------- | ----------- |
| 1        | objectArg1        | object   | True           | -           |
| -        | objectArg1.status | variable | True           | -           |
| -        | objectArg1.postId | property | True           | -           |


### card
#### card:close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat/direct-message-button.gjs#L32)

No arguments passed to this event.

#### card:hide [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L270)

No arguments passed to this event.

#### card:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L64)

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

#### chat:modify-selection [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L75)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.type    | variable | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-insert-link-modal [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L87)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-url [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L46)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | url      | variable | True           | -           |

#### chat:refresh-channel-members [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-subscriptions-manager.js#L469)

No arguments passed to this event.

#### chat:rerender-header [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L79)

No arguments passed to this event.

#### chat:toggle-close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L113)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | event    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#113 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L113)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | event    | variable | -           |

##### /plugins/chat/assets/javascripts/discourse/routes/chat.js#51 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L51)

No arguments passed to this event.

</details>

#### chat:toggle-expand [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L163)

| Position | Argument                               | Type     | Always Present | Description |
| -------- | -------------------------------------- | -------- | -------------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#163 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L163)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

##### /plugins/chat/assets/javascripts/discourse/services/chat.js#453 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat.js#L453)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

</details>


### composer
#### composer:cancel-upload [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L669)

No arguments passed to this event.

#### composer:cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1631)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#1631 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1631)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1639 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1639)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1653 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1653)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1670 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1670)

No arguments passed to this event.

</details>

#### composer:created-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1210)

| Position | Argument          | Type     | Always Present | Description |
| -------- | ----------------- | -------- | -------------- | ----------- |
| 1        | objectArg1        | object   | True           | -           |
| -        | objectArg1.postId | property | True           | -           |

#### composer:div-resizing [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-container.gjs#L55)

No arguments passed to this event.

#### composer:edited-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1196)

No arguments passed to this event.

#### composer:find-similar [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L59)

No arguments passed to this event.

#### composer:insert-block [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L495)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | template.content | property | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#495 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L495)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | quotedText | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#718 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L718)

| Position | Argument        | Type            | Description |
| -------- | --------------- | --------------- | ----------- |
| 1        | quotedText.trim | called_function | -           |

##### /plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#103 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L103)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | template.content | property | -           |

</details>

#### composer:insert-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/search.js#L61)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | document.activeElement.href | property | True           | -           |
| 2        | objectArg2                  | object   | True           | -           |
| -        | objectArg2.ensureSpace      | boolean  | True           | -           |

#### composer:open [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1459)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | property | True           | -           |

#### composer:opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L83)

No arguments passed to this event.

#### composer:preview-toggled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L159)

| Position | Argument              | Type     | Always Present | Description |
| -------- | --------------------- | -------- | -------------- | ----------- |
| 1        | this.isPreviewVisible | property | True           | -           |

#### composer:replace-text [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/image-caption-popup.js#L29)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | match       | variable | True           | -           |
| 2        | replacement | variable | True           | -           |

#### composer:reply-reloaded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1009)

| Position | Argument | Type | Always Present | Description |
| -------- | -------- | ---- | -------------- | ----------- |
| 1        | this     | this | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/models/composer.js#1009 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1009)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#1028 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1028)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

</details>

#### composer:resize-ended [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-container.gjs#L66)

No arguments passed to this event.

#### composer:resize-started [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-container.gjs#L51)

No arguments passed to this event.

#### composer:resized [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L75)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-body.js#75 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L75)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/components/composer-container.gjs#72 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-container.gjs#L72)

No arguments passed to this event.

</details>

#### composer:saved [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1176)

No arguments passed to this event.

#### composer:show-preview [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L71)

No arguments passed to this event.

#### composer:toolbar-popup-menu-button-clicked [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L698)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | menuItem | variable | True           | -           |

#### composer:typed-reply [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1330)

No arguments passed to this event.

#### this.composerEventPrefix:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L391)

No arguments passed to this event.

#### this.composerEventPrefix:apply-surround [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L613)

| Position | Argument                | Type    | Always Present | Description |
| -------- | ----------------------- | ------- | -------------- | ----------- |
| 1        | [grid]                  | string  | True           | -           |
| 2        | [/grid]                 | string  | True           | -           |
| 3        | grid_surround           | string  | True           | -           |
| 4        | objectArg4              | object  | True           | -           |
| -        | objectArg4.useBlockMode | boolean | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.gjs#613 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L613)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#701 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L701)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

</details>

#### this.composerEventPrefix:closed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L187)

No arguments passed to this event.

#### this.composerEventPrefix:replace-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L510)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | True           | -           |
| 2        | replacement1                | variable | True           | -           |
| 3        | objectArg3                  | object   | False          | -           |
| -        | objectArg3.regex            | variable | False          | -           |
| -        | objectArg3.index            | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.gjs#510 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L510)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | replacement1                | variable | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

##### /app/assets/javascripts/discourse/app/components/composer-editor.gjs#536 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L536)

| Position | Argument     | Type     | Description |
| -------- | ------------ | -------- | ----------- |
| 1        | match1       | variable | -           |
| 2        | replacement1 | variable | -           |

##### /app/assets/javascripts/discourse/app/components/composer-editor.gjs#596 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L596)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | string                      | string   | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

</details>

#### this.composerEventPrefix:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L288)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### this.composerEventPrefix:upload-error [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L433)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file     | variable | True           | -           |

#### this.composerEventPrefix:upload-started [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L343)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |

#### this.composerEventPrefix:upload-success [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L384)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |
| 2        | upload    | variable | True           | -           |

#### this.composerEventPrefix:uploads-aborted [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L132)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#132 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L132)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#181 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L181)

No arguments passed to this event.

</details>

#### this.composerEventPrefix:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L412)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-preprocessing-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L508)

No arguments passed to this event.

#### this.composerEventPrefix:will-close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L185)

No arguments passed to this event.

#### this.composerEventPrefix:will-open [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L181)

No arguments passed to this event.


### composer-messages
#### composer-messages:close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L917)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#917 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L917)

No arguments passed to this event.

##### /plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#70 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-templates/assets/javascripts/discourse/services/d-templates.js#L70)

No arguments passed to this event.

</details>

#### composer-messages:create [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L790)

| Position | Argument                | Type            | Always Present | Description |
| -------- | ----------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1              | object          | True           | -           |
| -        | objectArg1.extraClass   | string          | True           | -           |
| -        | objectArg1.templateName | string          | True           | -           |
| -        | objectArg1.body         | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#790 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L790)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#800 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L800)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#968 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L968)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#992 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L992)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1001 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1001)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /app/assets/javascripts/discourse/app/static/prosemirror/extensions/mention.js#250 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/static/prosemirror/extensions/mention.js#L250)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

</details>


### composer-service
#### composer-service:last-validated-at-cleared [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1838)

No arguments passed to this event.

#### composer-service:last-validated-at-updated [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1072)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#1072 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1072)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.model | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1287 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1287)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.model | property | -           |

</details>


### count-updated
#### count-updated:user.username_lower:key [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/user.js#L102)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | value    | variable | True           | -           |


### cta
#### cta:shown [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/signup-cta.js#L67)

No arguments passed to this event.


### d-editor
#### d-editor:preview-click-group-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-editor-preview.gjs#L23)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |

#### d-editor:preview-click-user-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-editor-preview.gjs#L20)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |


### destroyed-custom-html
#### destroyed-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/custom-html.js#L41)

No arguments passed to this event.


### discourse
#### discourse:focus-changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/document-title.js#L40)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | session.hasFocus | property | True           | -           |


### discourse-ai
#### discourse-ai:bot-header-icon-clicked [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-header-icon.gjs#L64)

No arguments passed to this event.

#### discourse-ai:bot-pm-created [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-bot-conversations-hidden-submit.js#L87)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.id    | property | True           | -           |
| -        | objectArg1.slug  | property | True           | -           |
| -        | objectArg1.title | variable | True           | -           |

#### discourse-ai:force-conversations-sidebar [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-conversations-sidebar-manager.js#L100)

No arguments passed to this event.

#### discourse-ai:new-conversation-btn-clicked [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-bot-sidebar-new-conversation.gjs#L24)

No arguments passed to this event.

#### discourse-ai:stop-forcing-conversations-sidebar [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/services/ai-conversations-sidebar-manager.js#L161)

No arguments passed to this event.


### discourse-reactions
#### discourse-reactions:reaction-toggled [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-reactions/assets/javascripts/discourse/models/discourse-reactions-custom-reaction.js#L15)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.post     | variable | True           | -           |
| -        | objectArg1.reaction | property | True           | -           |


### discourse-solved
#### discourse-solved:solution-toggled [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#L28)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | post1    | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#28 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#L28)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | post1    | variable | -           |

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#28 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#L28)

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
#### do-not-disturb:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1279)

| Position | Argument                  | Type     | Always Present | Description |
| -------- | ------------------------- | -------- | -------------- | ----------- |
| 1        | this.do_not_disturb_until | property | True           | -           |


### dom
#### dom:clean [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/clean-dom-on-route-change.js#L32)

No arguments passed to this event.


### draft
#### draft:destroyed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1606)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | key      | variable | True           | -           |


### emoji-picker
#### emoji-picker:close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L912)

No arguments passed to this event.


### flag
#### flag:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/modal/flag.gjs#L177)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.message | property | True           | -           |
| -        | objectArg1.postId  | property | True           | -           |


### full-page-search
#### full-page-search:trigger-search [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/full-page-search.js#L598)

No arguments passed to this event.


### group
#### group:join [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/group-membership-button.gjs#L53)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | group1   | variable | True           | -           |

#### group:leave [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/group-membership-button.gjs#L41)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | model1   | variable | True           | -           |


### header
#### header:hide-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic.js#L391)

No arguments passed to this event.

#### header:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L506)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.type  | string   | True           | -           |
| -        | objectArg1.event | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#506 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L506)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#515 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L515)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#522 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L522)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /app/assets/javascripts/discourse/app/services/search.js#68 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/search.js#L68)

| Position | Argument        | Type   | Description |
| -------- | --------------- | ------ | ----------- |
| 1        | objectArg1      | object | -           |
| -        | objectArg1.type | string | -           |

</details>

#### header:show-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/modal/convert-to-public-topic.gjs#L31)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic1   | variable | True           | -           |

#### header:update-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1838)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | composer.topic | property | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1838 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1838)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### /app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#168 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L168)

| Position | Argument | Type    | Description |
| -------- | -------- | ------- | ----------- |
| 1        | null     | null    | -           |
| 2        | 5000     | integer | -           |

##### /app/assets/javascripts/discourse/app/routes/topic.js#416 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic.js#L416)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | model    | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1202 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1202)

| Position | Argument       | Type     | Description |
| -------- | -------------- | -------- | ----------- |
| 1        | composer.topic | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#548 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L548)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

</details>


### inserted-custom-html
#### inserted-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/custom-html.js#L34)

No arguments passed to this event.


### interface-color
#### interface-color:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/interface-color.js#L95)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/interface-color.js#95 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/interface-color.js#L95)

| Position | Argument               | Type     | Description |
| -------- | ---------------------- | -------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | -           |

##### /app/assets/javascripts/discourse/app/services/interface-color.js#113 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/interface-color.js#L113)

| Position | Argument              | Type     | Description |
| -------- | --------------------- | -------- | ----------- |
| 1        | DARK_VALUE_FOR_COOKIE | variable | -           |

##### /app/assets/javascripts/discourse/app/services/interface-color.js#127 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/interface-color.js#L127)

| Position | Argument               | Type     | Description |
| -------- | ---------------------- | -------- | ----------- |
| 1        | LIGHT_VALUE_FOR_COOKIE | variable | -           |

##### /app/assets/javascripts/discourse/app/services/interface-color.js#136 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/interface-color.js#L136)

| Position | Argument              | Type     | Description |
| -------- | --------------------- | -------- | ----------- |
| 1        | DARK_VALUE_FOR_COOKIE | variable | -           |

</details>


### keyboard
#### keyboard:move-selection [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L774)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1                 | object   | True           | -           |
| -        | objectArg1.articles        | variable | True           | -           |
| -        | objectArg1.selectedArticle | variable | True           | -           |


### notifications
#### notifications:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L160)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#160 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L160)

No arguments passed to this event.

##### /plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#110 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#L110)

No arguments passed to this event.

</details>


### page
#### page:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/page-tracker.js#L42)

| Position | Argument                           | Type            | Always Present | Description |
| -------- | ---------------------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1                         | object          | True           | -           |
| -        | objectArg1.url                     | variable        | True           | -           |
| -        | objectArg1.title                   | called_function | False          | -           |
| -        | objectArg1.currentRouteName        | property        | False          | -           |
| -        | objectArg1.replacedOnlyQueryParams | variable        | False          | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/page-tracker.js#42 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/page-tracker.js#L42)

| Position | Argument                           | Type            | Description |
| -------- | ---------------------------------- | --------------- | ----------- |
| 1        | objectArg1                         | object          | -           |
| -        | objectArg1.url                     | variable        | -           |
| -        | objectArg1.title                   | called_function | -           |
| -        | objectArg1.currentRouteName        | property        | -           |
| -        | objectArg1.replacedOnlyQueryParams | variable        | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#37 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L37)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#53 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L53)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#93 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L93)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#124 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L124)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#141 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L141)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#153 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L153)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#172 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L172)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#201 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L201)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#218 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L218)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

##### /plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#239 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-calendar/test/javascripts/integration/components/upcoming-events-list-test.gjs#L239)

| Position | Argument       | Type   | Description |
| -------- | -------------- | ------ | ----------- |
| 1        | objectArg1     | object | -           |
| -        | objectArg1.url | string | -           |

</details>

#### page:compose-reply [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L696)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic    | variable | True           | -           |

#### page:like-toggled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post.gjs#L221)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | post1       | variable | True           | -           |
| 2        | likeAction1 | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/post.gjs#221 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post.gjs#L221)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | post1       | variable | -           |
| 2        | likeAction1 | variable | -           |

##### /app/assets/javascripts/discourse/app/widgets/post.js#1179 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post.js#L1179)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | post       | variable | -           |
| 2        | likeAction | variable | -           |

</details>

#### page:topic-loaded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L94)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic    | variable | True           | -           |


### policy
#### policy:changed [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-policy/assets/javascripts/discourse/initializers/extend-for-policy.gjs#L89)

| Position | Argument              | Type     | Always Present | Description |
| -------- | --------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1            | object   | True           | -           |
| -        | objectArg1.controller | variable | True           | -           |
| -        | objectArg1.message    | variable | True           | -           |


### poll
#### poll:voted [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L190)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | poll1     | variable | True           | -           |
| 2        | this.post | property | True           | -           |
| 3        | this.vote | property | True           | -           |

<details><summary>Detailed List</summary>

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#190 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L190)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#448 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L448)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

</details>


### post
#### post:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1278)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |

#### post:highlight [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/url.js#L366)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | result.payload.post_number | property | True           | -           |
| 2        | options                    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/url.js#366 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/url.js#L366)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /app/assets/javascripts/discourse/app/routes/topic-from-params.js#99 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L99)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1213 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1213)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | result.payload.post_number | property | -           |
| 2        | options                    | variable | -           |

</details>

#### post:show-revision [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L1320)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | copy.postNumber     | property | True           | -           |
| 2        | copy.revisionNumber | property | True           | -           |


### post-stream
#### post-stream:filter-replies [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L275)

| Position | Argument               | Type            | Always Present | Description |
| -------- | ---------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1             | object          | True           | -           |
| -        | objectArg1.topic_id    | called_function | True           | -           |
| -        | objectArg1.post_number | variable        | True           | -           |
| -        | objectArg1.post_id     | variable        | True           | -           |

#### post-stream:filter-show-all [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#L111)

| Position | Argument                 | Type     | Always Present | Description |
| -------- | ------------------------ | -------- | -------------- | ----------- |
| 1        | this.attrs.streamFilters | property | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#111 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#L111)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | this.args.streamFilters | property | -           |

##### /app/assets/javascripts/discourse/app/widgets/post-stream.js#206 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post-stream.js#L206)

| Position | Argument                 | Type     | Description |
| -------- | ------------------------ | -------- | ----------- |
| 1        | this.attrs.streamFilters | property | -           |

</details>

#### post-stream:filter-upwards [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L305)

| Position | Argument            | Type            | Always Present | Description |
| -------- | ------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1          | object          | True           | -           |
| -        | objectArg1.topic_id | called_function | True           | -           |
| -        | objectArg1.post_id  | variable        | True           | -           |

#### post-stream:gap-expanded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post/gap.gjs#L26)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.post_id | property | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/post/gap.gjs#26 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post/gap.gjs#L26)

| Position | Argument           | Type     | Description |
| -------- | ------------------ | -------- | ----------- |
| 1        | objectArg1         | object   | -           |
| -        | objectArg1.post_id | property | -           |

##### /app/assets/javascripts/discourse/app/widgets/post-gap.js#32 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post-gap.js#L32)

| Position | Argument           | Type     | Description |
| -------- | ------------------ | -------- | ----------- |
| 1        | objectArg1         | object   | -           |
| -        | objectArg1.post_id | property | -           |

</details>

#### post-stream:posted [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1275)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | staged   | variable | True           | -           |

#### post-stream:refresh [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L257)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | args     | variable | False          | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/invite-panel.gjs#257 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L257)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/components/invite-panel.gjs#269 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L269)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/components/modal/history.gjs#160 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/modal/history.gjs#L160)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/components/search-menu.gjs#286 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/search-menu.gjs#L286)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#121 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L121)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#316 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L316)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#770 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L770)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/controllers/topic.js#992 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L992)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1503 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1503)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1822 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1822)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | args     | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1973 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1973)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### /app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#26 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L26)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#612 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L612)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#61 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#L61)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#1139 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1139)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#1152 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1152)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/post-stream.js#290 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L290)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post-stream.js#311 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L311)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post-stream.js#446 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L446)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post.js#684 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L684)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1190 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1190)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1198 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1198)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1206 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1206)

No arguments passed to this event.

##### /plugins/discourse-ai/assets/javascripts/discourse/initializers/translation.js#17 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/initializers/translation.js#L17)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#36 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#L36)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#45 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#L45)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#55 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#L55)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#70 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/components/topic-level-assign-menu.js#L70)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#83 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L83)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#93 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L93)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#181 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L181)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#232 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L232)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#282 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L282)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#529 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L529)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#533 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L533)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#539 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L539)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#550 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-assign/assets/javascripts/discourse/initializers/extend-for-assigns.js#L550)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#34 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#L34)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#63 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#L63)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#91 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#L91)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#120 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-post-voting/assets/javascripts/discourse/initializers/custom-post-message-callbacks.js#L120)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#31 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-accept-answer-button.gjs#L31)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#31 [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-solved/assets/javascripts/discourse/components/solved-unaccept-answer-button.gjs#L31)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

</details>


### quote-button
#### quote-button:edit [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L355)

No arguments passed to this event.

#### quote-button:quote [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L339)

No arguments passed to this event.


### reviewablenote
#### reviewablenote:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/reviewable-refresh/note-form.gjs#L51)

| Position | Argument             | Type     | Always Present | Description |
| -------- | -------------------- | -------- | -------------- | ----------- |
| 1        | data1                | variable | True           | -           |
| 2        | this.args.reviewable | property | True           | -           |
| 3        | this.formApi         | property | True           | -           |


### search
#### search:search_result_view [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/full-page-search.js#L491)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.page | property | True           | -           |


### search-menu
#### search-menu:search_menu_opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/search-menu.gjs#L136)

No arguments passed to this event.


### sidebar-hamburger-dropdown
#### sidebar-hamburger-dropdown:rendered [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/sidebar/hamburger-dropdown.gjs#L25)

No arguments passed to this event.


### site-header
#### site-header:force-refresh [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/narrow-desktop.js#L26)

No arguments passed to this event.


### this.eventPrefix
#### this.eventPrefix:insert-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L448)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | markdown | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#448 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L448)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | table    | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#502 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L502)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | markdown | variable | -           |

</details>


### topic
#### topic:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1280)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |
| 2        | this        | this     | True           | -           |

#### topic:current-post-changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L535)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.post | variable | True           | -           |

#### topic:current-post-scrolled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L542)

| Position | Argument             | Type            | Always Present | Description |
| -------- | -------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1           | object          | True           | -           |
| -        | objectArg1.postIndex | property        | True           | -           |
| -        | objectArg1.percent   | called_function | True           | -           |

#### topic:jump-to-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1043)

| Position | Argument | Type            | Always Present | Description |
| -------- | -------- | --------------- | -------------- | ----------- |
| 1        | this.get | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1043 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1043)

| Position | Argument | Type            | Description |
| -------- | -------- | --------------- | ----------- |
| 1        | this.get | called_function | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1430 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1430)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | postId   | variable | -           |

</details>

#### topic:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L502)

| Position | Argument        | Type   | Always Present | Description |
| -------- | --------------- | ------ | -------------- | ----------- |
| 1        | objectArg1      | object | True           | -           |
| -        | objectArg1.type | string | True           | -           |

#### topic:scrolled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/discourse-topic.js#L102)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | offset   | variable | True           | -           |

#### topic:timings-sent [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/screen-track.js#L209)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |


### topic-entrance
#### topic-entrance:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#L89)

| Position | Argument            | Type            | Always Present | Description |
| -------- | ------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1          | object          | True           | -           |
| -        | objectArg1.topic    | variable        | True           | -           |
| -        | objectArg1.position | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#89 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#L89)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | variable        | -           |
| -        | objectArg1.position | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/featured-topic.gjs#14 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/featured-topic.gjs#L14)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/mobile-category-topic.gjs#19 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/mobile-category-topic.gjs#L19)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

</details>


### topic-header
#### topic-header:trigger-this.args.type-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/header/topic/participant.gjs#L19)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | this.args.username | property | True           | -           |
| 2        | e1.target          | property | True           | -           |
| 3        | e1                 | variable | True           | -           |


### upload-mixin
#### upload-mixin:this.config.id:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L575)

No arguments passed to this event.

#### upload-mixin:this.config.id:in-progress-uploads [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L385)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | this.inProgressUploads | property | True           | -           |

#### upload-mixin:this.config.id:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L307)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### upload-mixin:this.config.id:upload-success [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L252)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | file.name        | property | True           | -           |
| 2        | completeResponse | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#252 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L252)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | file.name        | property | -           |
| 2        | completeResponse | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#273 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L273)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | file.name | property | -           |
| 2        | upload    | variable | -           |

</details>

#### upload-mixin:this.config.id:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L349)

No arguments passed to this event.


### user-card
#### user-card:after-show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L94)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.user | variable | True           | -           |

#### user-card:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L89)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.username | variable | True           | -           |


### user-drafts
#### user-drafts:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1285)

No arguments passed to this event.


### user-menu
#### user-menu:notification-click [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/user-menu/notification-item.js#L91)

| Position | Argument                | Type     | Always Present | Description |
| -------- | ----------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1              | object   | True           | -           |
| -        | objectArg1.notification | property | True           | -           |
| -        | objectArg1.href         | property | True           | -           |

#### user-menu:rendered [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-menu/menu.gjs#L267)

No arguments passed to this event.

#### user-menu:tab-click [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-menu/menu.gjs#L262)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | tab1.id  | property | True           | -           |


### user-reviewable-count
#### user-reviewable-count:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1290)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | count    | variable | True           | -           |


### user-status
#### user-status:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L232)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |


### other events
#### AI_RESULTS_TOGGLED [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-ai/assets/javascripts/discourse/components/ai-full-page-search.gjs#L118)

| Position | Argument           | Type      | Always Present | Description |
| -------- | ------------------ | --------- | -------------- | ----------- |
| 1        | objectArg1         | object    | True           | -           |
| -        | objectArg1.enabled | undefined | True           | -           |

#### click-tracked [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/click-track.js#L98)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | href     | variable | True           | -           |

#### decorate-non-stream-cooked-element [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L441)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | preview1 | variable | True           | -           |
| 2        | helper1  | variable | True           | -           |

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.gjs#441 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L441)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | preview1 | variable | -           |
| 2        | helper1  | variable | -           |

##### /app/assets/javascripts/discourse/app/components/discourse-banner.gjs#48 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/discourse-banner.gjs#L48)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | element1 | variable | -           |
| 2        | helper1  | variable | -           |

##### /app/assets/javascripts/discourse/app/components/post-list/item/index.gjs#65 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post-list/item/index.gjs#L65)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | element1 | variable | -           |
| 2        | helper1  | variable | -           |

</details>

#### desktop-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/desktop-notifications.js#L179)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### keyboard-visibility-change [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-virtual-height.gjs#L59)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | keyboardVisible | variable | True           | -           |

#### push-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/push-notifications.js#L77)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### REFRESH_USER_SIDEBAR_CATEGORIES_SECTION_COUNTS_APP_EVENT_NAME [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/plugin-api.gjs#L2363)

No arguments passed to this event.

#### this.flagCreatedEvent [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L15)

| Position | Argument                       | Type     | Always Present | Description |
| -------- | ------------------------------ | -------- | -------------- | ----------- |
| 1        | flagModal.args.model.flagModel | property | True           | -           |
| 2        | postAction                     | variable | True           | -           |
| 3        | opts                           | variable | True           | -           |

#### undefined [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/post/cooked-html.gjs#L116)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | element1 | variable | True           | -           |
| 2        | helper1  | variable | True           | -           |