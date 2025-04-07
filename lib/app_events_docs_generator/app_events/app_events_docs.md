### ace
#### ace:resize [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/admin/addon/components/admin-theme-editor.gjs#L118)

No arguments passed to this event.


### bookmarks
#### bookmarks:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L53)

| Position | Argument                      | Type            | Always Present | Description |
| -------- | ----------------------------- | --------------- | -------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | True           | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#53 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L53)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | null                 | null            | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#84 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/bookmark-list.gjs#L84)

| Position | Argument             | Type            | Description |
| -------- | -------------------- | --------------- | ----------- |
| 1        | savedData1           | variable        | -           |
| 2        | bookmark1.attachedTo | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1385 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1385)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#58 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#L58)

| Position | Argument                      | Type            | Description |
| -------- | ----------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/models/post.js#632 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post.js#L632)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | data                | variable | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### discourse/app/assets/javascripts/discourse/app/models/post.js#653 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post.js#L653)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | null                | null     | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### discourse/app/assets/javascripts/discourse/app/models/topic.js#704 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/topic.js#L704)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | null                | null            | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### discourse/plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#361 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#L361)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

</details>


### card
#### card:close [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/components/chat/direct-message-button.gjs#L32)

No arguments passed to this event.

#### card:hide [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/card-contents-base.js#L264)

No arguments passed to this event.

#### card:show [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/card-contents-base.js#L63)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | username | variable | True           | -           |
| 2        | target   | variable | True           | -           |
| 3        | event    | variable | True           | -           |


### chat
#### chat:message_interaction [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/components/chat-message/blocks/index.gjs#L18)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | result1.interaction | property | True           | -           |

#### chat:modify-selection [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L72)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.type    | variable | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-insert-link-modal [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L84)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | event              | variable | True           | -           |
| 2        | objectArg2         | object   | True           | -           |
| -        | objectArg2.context | property | True           | -           |

#### chat:open-url [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/routes/chat.js#L48)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | url      | variable | True           | -           |

#### chat:refresh-channel-members [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/services/chat-subscriptions-manager.js#L469)

No arguments passed to this event.

#### chat:rerender-header [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L80)

No arguments passed to this event.

#### chat:toggle-close [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L110)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | event    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### discourse/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#110 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L110)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | event    | variable | -           |

##### discourse/plugins/chat/assets/javascripts/discourse/routes/chat.js#53 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/routes/chat.js#L53)

No arguments passed to this event.

</details>

#### chat:toggle-expand [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L164)

| Position | Argument                               | Type     | Always Present | Description |
| -------- | -------------------------------------- | -------- | -------------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#164 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/components/chat-drawer.gjs#L164)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

##### discourse/plugins/chat/assets/javascripts/discourse/services/chat.js#453 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/services/chat.js#L453)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

</details>


### composer
#### composer:cancel-upload [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L658)

No arguments passed to this event.

#### composer:cancelled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1571)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1571 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1571)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1579 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1579)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1592 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1592)

No arguments passed to this event.

</details>

#### composer:created-post [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1203)

No arguments passed to this event.

#### composer:div-resizing [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L88)

No arguments passed to this event.

#### composer:edited-post [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1191)

No arguments passed to this event.

#### composer:find-similar [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L69)

No arguments passed to this event.

#### composer:insert-block [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L484)

| Position | Argument        | Type            | Always Present | Description |
| -------- | --------------- | --------------- | -------------- | ----------- |
| 1        | quotedText.trim | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#484 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L484)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | quotedText | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#705 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L705)

| Position | Argument        | Type            | Description |
| -------- | --------------- | --------------- | ----------- |
| 1        | quotedText.trim | called_function | -           |

</details>

#### composer:insert-text [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/search.js#L65)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | document.activeElement.href | property | True           | -           |
| 2        | objectArg2                  | object   | True           | -           |
| -        | objectArg2.ensureSpace      | boolean  | True           | -           |

#### composer:open [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1399)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | property | True           | -           |

#### composer:opened [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L175)

No arguments passed to this event.

#### composer:preview-toggled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L144)

| Position | Argument              | Type     | Always Present | Description |
| -------- | --------------------- | -------- | -------------- | ----------- |
| 1        | this.isPreviewVisible | property | True           | -           |

#### composer:reply-reloaded [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L985)

| Position | Argument | Type | Always Present | Description |
| -------- | -------- | ---- | -------------- | ----------- |
| 1        | this     | this | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/models/composer.js#985 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L985)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

##### discourse/app/assets/javascripts/discourse/app/models/composer.js#1004 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L1004)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

</details>

#### composer:resize-ended [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L148)

No arguments passed to this event.

#### composer:resize-started [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L143)

No arguments passed to this event.

#### composer:resized [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-body.js#L125)

No arguments passed to this event.

#### composer:saved [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1172)

No arguments passed to this event.

#### composer:toolbar-popup-menu-button-clicked [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L687)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | menuItem | variable | True           | -           |

#### composer:typed-reply [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1282)

No arguments passed to this event.

#### this.composerEventPrefix:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L385)

No arguments passed to this event.

#### this.composerEventPrefix:apply-surround [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L554)

| Position | Argument                | Type    | Always Present | Description |
| -------- | ----------------------- | ------- | -------------- | ----------- |
| 1        | [grid]                  | string  | True           | -           |
| 2        | [/grid]                 | string  | True           | -           |
| 3        | grid_surround           | string  | True           | -           |
| 4        | objectArg4              | object  | True           | -           |
| -        | objectArg4.useBlockMode | boolean | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#554 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L554)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#689 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L689)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

</details>

#### this.composerEventPrefix:closed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L579)

No arguments passed to this event.

#### this.composerEventPrefix:replace-text [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L451)

| Position | Argument                    | Type     | Always Present | Description |
| -------- | --------------------------- | -------- | -------------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | True           | -           |
| 2        | replacement1                | variable | True           | -           |
| 3        | objectArg3                  | object   | False          | -           |
| -        | objectArg3.regex            | variable | False          | -           |
| -        | objectArg3.index            | variable | False          | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#451 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L451)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | replacement1                | variable | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#477 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L477)

| Position | Argument     | Type     | Description |
| -------- | ------------ | -------- | ----------- |
| 1        | match1       | variable | -           |
| 2        | replacement1 | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#537 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L537)

| Position | Argument                    | Type     | Description |
| -------- | --------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder1.index1 | property | -           |
| 2        | string                      | string   | -           |
| 3        | objectArg3                  | object   | -           |
| -        | objectArg3.regex            | variable | -           |
| -        | objectArg3.index            | variable | -           |

</details>

#### this.composerEventPrefix:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L285)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### this.composerEventPrefix:upload-error [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L427)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file     | variable | True           | -           |

#### this.composerEventPrefix:upload-started [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L340)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |

#### this.composerEventPrefix:upload-success [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L378)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | file.name | property | True           | -           |
| 2        | upload    | variable | True           | -           |

#### this.composerEventPrefix:uploads-aborted [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L131)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#131 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L131)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#178 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L178)

No arguments passed to this event.

</details>

#### this.composerEventPrefix:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L406)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-preprocessing-complete [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L502)

No arguments passed to this event.

#### this.composerEventPrefix:will-close [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L577)

No arguments passed to this event.

#### this.composerEventPrefix:will-open [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L160)

No arguments passed to this event.


### composer-messages
#### composer-messages:close [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L917)

No arguments passed to this event.

#### composer-messages:create [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L779)

| Position | Argument                | Type            | Always Present | Description |
| -------- | ----------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1              | object          | True           | -           |
| -        | objectArg1.extraClass   | string          | True           | -           |
| -        | objectArg1.templateName | string          | True           | -           |
| -        | objectArg1.body         | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#779 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L779)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#789 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L789)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#968 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L968)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#992 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L992)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1001 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1001)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

</details>


### composer-service
#### composer-service:last-validated-at-cleared [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1754)

No arguments passed to this event.

#### composer-service:last-validated-at-updated [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1068)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.model | variable | True           | -           |


### count-updated
#### count-updated:user.username_lower:key [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/routes/user.js#L102)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | value    | variable | True           | -           |


### cta
#### cta:shown [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/signup-cta.js#L72)

No arguments passed to this event.


### d-editor
#### d-editor:preview-click-group-card [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/d-editor.gjs#L152)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |

#### d-editor:preview-click-user-card [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/d-editor.gjs#L149)

| Position | Argument      | Type     | Always Present | Description |
| -------- | ------------- | -------- | -------------- | ----------- |
| 1        | event1.target | property | True           | -           |
| 2        | event1        | variable | True           | -           |

#### d-editor:toolbar-button-clicked [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/composer/toolbar.js#L140)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | button   | variable | True           | -           |


### decorate-post-cooked-element
#### decorate-post-cooked-element:after-adopt [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/cooked-html.gjs#L89)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | element1 | variable | True           | -           |
| 2        | helper1  | variable | True           | -           |


### destroyed-custom-html
#### destroyed-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/custom-html.js#L40)

No arguments passed to this event.


### discourse
#### discourse:focus-changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/document-title.js#L40)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | session.hasFocus | property | True           | -           |


### do-not-disturb
#### do-not-disturb:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/user.js#L1253)

| Position | Argument                  | Type     | Always Present | Description |
| -------- | ------------------------- | -------- | -------------- | ----------- |
| 1        | this.do_not_disturb_until | property | True           | -           |


### dom
#### dom:clean [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/clean-dom-on-route-change.js#L32)

No arguments passed to this event.


### draft
#### draft:destroyed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1544)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | key      | variable | True           | -           |


### emoji-picker
#### emoji-picker:close [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L912)

No arguments passed to this event.


### full-page-search
#### full-page-search:trigger-search [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/full-page-search.js#L570)

No arguments passed to this event.


### group
#### group:join [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/group-membership-button.gjs#L56)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | group1   | variable | True           | -           |

#### group:leave [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/group-membership-button.gjs#L46)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | model1   | variable | True           | -           |


### header
#### header:hide-topic [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/routes/topic.js#L395)

No arguments passed to this event.

#### header:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L455)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | objectArg1       | object   | True           | -           |
| -        | objectArg1.type  | string   | True           | -           |
| -        | objectArg1.event | variable | False          | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#455 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L455)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#529 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L529)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#538 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L538)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#545 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L545)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/search.js#72 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/search.js#L72)

| Position | Argument        | Type   | Description |
| -------- | --------------- | ------ | ----------- |
| 1        | objectArg1      | object | -           |
| -        | objectArg1.type | string | -           |

</details>

#### header:show-topic [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/modal/convert-to-public-topic.gjs#L31)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic1   | variable | True           | -           |

#### header:update-topic [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1759)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | composer.topic | property | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1759 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1759)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#163 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L163)

| Position | Argument | Type    | Description |
| -------- | -------- | ------- | ----------- |
| 1        | null     | null    | -           |
| 2        | 5000     | integer | -           |

##### discourse/app/assets/javascripts/discourse/app/routes/topic.js#420 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/routes/topic.js#L420)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | model    | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1196 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1196)

| Position | Argument       | Type     | Description |
| -------- | -------------- | -------- | ----------- |
| 1        | composer.topic | property | -           |

</details>


### inserted-custom-html
#### inserted-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/custom-html.js#L33)

No arguments passed to this event.


### interface-color
#### interface-color:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/interface-color.js#L73)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | LIGHT    | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/services/interface-color.js#73 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/interface-color.js#L73)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | LIGHT    | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/interface-color.js#91 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/interface-color.js#L91)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | DARK     | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/interface-color.js#101 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/interface-color.js#L101)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | LIGHT    | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/interface-color.js#107 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/interface-color.js#L107)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | DARK     | variable | -           |

</details>


### keyboard
#### keyboard:move-selection [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L802)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1                 | object   | True           | -           |
| -        | objectArg1.articles        | variable | True           | -           |
| -        | objectArg1.selectedArticle | variable | True           | -           |


### notifications
#### notifications:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L155)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#155 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L155)

No arguments passed to this event.

##### discourse/plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#110 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#L110)

No arguments passed to this event.

</details>


### page
#### page:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/page-tracker.js#L42)

| Position | Argument                           | Type            | Always Present | Description |
| -------- | ---------------------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1                         | object          | True           | -           |
| -        | objectArg1.url                     | variable        | True           | -           |
| -        | objectArg1.title                   | called_function | True           | -           |
| -        | objectArg1.currentRouteName        | property        | True           | -           |
| -        | objectArg1.replacedOnlyQueryParams | variable        | True           | -           |

#### page:compose-reply [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L683)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic    | variable | True           | -           |

#### page:like-toggled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post.gjs#L194)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | post1       | variable | True           | -           |
| 2        | likeAction1 | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/post.gjs#194 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post.gjs#L194)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | post1       | variable | -           |
| 2        | likeAction1 | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/widgets/post.js#1155 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/widgets/post.js#L1155)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | post       | variable | -           |
| 2        | likeAction | variable | -           |

</details>

#### page:topic-loaded [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L93)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | topic    | variable | True           | -           |


### poll
#### poll:voted [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L190)

| Position | Argument  | Type     | Always Present | Description |
| -------- | --------- | -------- | -------------- | ----------- |
| 1        | poll1     | variable | True           | -           |
| 2        | this.post | property | True           | -           |
| 3        | this.vote | property | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/plugins/poll/assets/javascripts/discourse/components/poll.gjs#190 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L190)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

##### discourse/plugins/poll/assets/javascripts/discourse/components/poll.gjs#448 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L448)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

</details>


### post
#### post:created [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L1249)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |

#### post:highlight [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/url.js#L366)

| Position | Argument                   | Type     | Always Present | Description |
| -------- | -------------------------- | -------- | -------------- | ----------- |
| 1        | result.payload.post_number | property | True           | -           |
| 2        | options                    | variable | False          | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/lib/url.js#366 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/url.js#L366)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/routes/topic-from-params.js#98 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L98)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1204 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1204)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | result.payload.post_number | property | -           |
| 2        | options                    | variable | -           |

</details>

#### post:show-revision [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L1290)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | copy.postNumber     | property | True           | -           |
| 2        | copy.revisionNumber | property | True           | -           |


### post-stream
#### post-stream:filter-replies [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L270)

| Position | Argument               | Type            | Always Present | Description |
| -------- | ---------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1             | object          | True           | -           |
| -        | objectArg1.topic_id    | called_function | True           | -           |
| -        | objectArg1.post_number | variable        | True           | -           |
| -        | objectArg1.post_id     | variable        | True           | -           |

#### post-stream:filter-show-all [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#L111)

| Position | Argument                 | Type     | Always Present | Description |
| -------- | ------------------------ | -------- | -------------- | ----------- |
| 1        | this.attrs.streamFilters | property | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#111 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/filtered-notice.gjs#L111)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | this.args.streamFilters | property | -           |

##### discourse/app/assets/javascripts/discourse/app/widgets/post-stream.js#205 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/widgets/post-stream.js#L205)

| Position | Argument                 | Type     | Description |
| -------- | ------------------------ | -------- | ----------- |
| 1        | this.attrs.streamFilters | property | -           |

</details>

#### post-stream:filter-upwards [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L299)

| Position | Argument            | Type            | Always Present | Description |
| -------- | ------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1          | object          | True           | -           |
| -        | objectArg1.topic_id | called_function | True           | -           |
| -        | objectArg1.post_id  | variable        | True           | -           |

#### post-stream:gap-expanded [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/gap.gjs#L26)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | objectArg1         | object   | True           | -           |
| -        | objectArg1.post_id | property | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/post/gap.gjs#26 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/gap.gjs#L26)

| Position | Argument           | Type     | Description |
| -------- | ------------------ | -------- | ----------- |
| 1        | objectArg1         | object   | -           |
| -        | objectArg1.post_id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/widgets/post-gap.js#32 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/widgets/post-gap.js#L32)

| Position | Argument           | Type     | Description |
| -------- | ------------------ | -------- | ----------- |
| 1        | objectArg1         | object   | -           |
| -        | objectArg1.post_id | property | -           |

</details>

#### post-stream:posted [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1265)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | staged   | variable | True           | -           |

#### post-stream:refresh [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L256)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | args     | variable | False          | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/invite-panel.gjs#256 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L256)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/components/invite-panel.gjs#267 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/invite-panel.gjs#L267)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### discourse/app/assets/javascripts/discourse/app/components/modal/history.gjs#159 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/modal/history.gjs#L159)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/components/search-menu.gjs#273 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/search-menu.gjs#L273)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#115 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L115)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#307 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L307)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#745 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L745)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#916 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L916)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1426 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1426)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1743 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1743)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | args     | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1893 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1893)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#26 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L26)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#632 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L632)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#61 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#L61)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/models/composer.js#1114 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L1114)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/models/composer.js#1126 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L1126)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/models/post-stream.js#284 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L284)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/models/post-stream.js#304 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L304)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/models/post-stream.js#438 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post-stream.js#L438)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/models/post.js#636 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/post.js#L636)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1185 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1185)

No arguments passed to this event.

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1192 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1192)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/services/composer.js#1199 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/composer.js#L1199)

No arguments passed to this event.

</details>


### quote-button
#### quote-button:edit [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L357)

No arguments passed to this event.

#### quote-button:quote [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L341)

No arguments passed to this event.


### search
#### search:search_result_view [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/full-page-search.js#L463)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.page | property | True           | -           |


### search-menu
#### search-menu:search_menu_opened [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/search-menu.gjs#L127)

No arguments passed to this event.


### sidebar-hamburger-dropdown
#### sidebar-hamburger-dropdown:rendered [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/sidebar/hamburger-dropdown.gjs#L26)

No arguments passed to this event.


### site-header
#### site-header:force-refresh [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/narrow-desktop.js#L26)

No arguments passed to this event.


### this.eventPrefix
#### this.eventPrefix:insert-text [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L443)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | markdown | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#443 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L443)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | table    | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#497 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L497)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | markdown | variable | -           |

</details>


### topic
#### topic:created [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/composer.js#L1251)

| Position | Argument    | Type     | Always Present | Description |
| -------- | ----------- | -------- | -------------- | ----------- |
| 1        | createdPost | variable | True           | -           |
| 2        | this        | this     | True           | -           |

#### topic:current-post-changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L524)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.post | variable | True           | -           |

#### topic:current-post-scrolled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L531)

| Position | Argument             | Type            | Always Present | Description |
| -------- | -------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1           | object          | True           | -           |
| -        | objectArg1.postIndex | property        | True           | -           |
| -        | objectArg1.percent   | called_function | True           | -           |

#### topic:jump-to-post [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L967)

| Position | Argument | Type            | Always Present | Description |
| -------- | -------- | --------------- | -------------- | ----------- |
| 1        | this.get | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#967 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L967)

| Position | Argument | Type            | Description |
| -------- | -------- | --------------- | ----------- |
| 1        | this.get | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/controllers/topic.js#1353 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/controllers/topic.js#L1353)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | postId   | variable | -           |

</details>

#### topic:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L525)

| Position | Argument        | Type   | Always Present | Description |
| -------- | --------------- | ------ | -------------- | ----------- |
| 1        | objectArg1      | object | True           | -           |
| -        | objectArg1.type | string | True           | -           |

#### topic:scrolled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/discourse-topic.js#L99)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | offset   | variable | True           | -           |

#### topic:timings-sent [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/services/screen-track.js#L209)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |


### topic-entrance
#### topic-entrance:show [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#L90)

| Position | Argument            | Type            | Always Present | Description |
| -------- | ------------------- | --------------- | -------------- | ----------- |
| 1        | objectArg1          | object          | True           | -           |
| -        | objectArg1.topic    | variable        | True           | -           |
| -        | objectArg1.position | called_function | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#90 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/basic-topic-list.gjs#L90)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | variable        | -           |
| -        | objectArg1.position | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/components/featured-topic.gjs#14 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/featured-topic.gjs#L14)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

##### discourse/app/assets/javascripts/discourse/app/components/topic-list-item.gjs#31 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/topic-list-item.gjs#L31)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

</details>


### topic-header
#### topic-header:trigger-this.args.type-card [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/header/topic/participant.gjs#L19)

| Position | Argument           | Type     | Always Present | Description |
| -------- | ------------------ | -------- | -------------- | ----------- |
| 1        | this.args.username | property | True           | -           |
| 2        | e1.target          | property | True           | -           |
| 3        | e1                 | variable | True           | -           |


### upload-mixin
#### upload-mixin:this.config.id:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L572)

No arguments passed to this event.

#### upload-mixin:this.config.id:in-progress-uploads [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L382)

| Position | Argument               | Type     | Always Present | Description |
| -------- | ---------------------- | -------- | -------------- | ----------- |
| 1        | this.inProgressUploads | property | True           | -           |

#### upload-mixin:this.config.id:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L304)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | file.id  | property | True           | -           |

#### upload-mixin:this.config.id:upload-success [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L249)

| Position | Argument         | Type     | Always Present | Description |
| -------- | ---------------- | -------- | -------------- | ----------- |
| 1        | file.name        | property | True           | -           |
| 2        | completeResponse | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#249 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L249)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | file.name        | property | -           |
| 2        | completeResponse | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#270 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L270)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | file.name | property | -           |
| 2        | upload    | variable | -           |

</details>

#### upload-mixin:this.config.id:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L346)

No arguments passed to this event.


### user-card
#### user-card:after-show [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/card-contents-base.js#L93)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | objectArg1      | object   | True           | -           |
| -        | objectArg1.user | variable | True           | -           |

#### user-card:show [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/card-contents-base.js#L88)

| Position | Argument            | Type     | Always Present | Description |
| -------- | ------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1          | object   | True           | -           |
| -        | objectArg1.username | variable | True           | -           |


### user-drafts
#### user-drafts:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/user.js#L1259)

No arguments passed to this event.


### user-menu
#### user-menu:notification-click [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/user-menu/notification-item.js#L85)

| Position | Argument                | Type     | Always Present | Description |
| -------- | ----------------------- | -------- | -------------- | ----------- |
| 1        | objectArg1              | object   | True           | -           |
| -        | objectArg1.notification | property | True           | -           |
| -        | objectArg1.href         | property | True           | -           |

#### user-menu:rendered [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/user-menu/menu.gjs#L266)

No arguments passed to this event.

#### user-menu:tab-click [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/user-menu/menu.gjs#L261)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | tab1.id  | property | True           | -           |


### user-reviewable-count
#### user-reviewable-count:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/models/user.js#L1264)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | count    | variable | True           | -           |


### user-status
#### user-status:changed [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L227)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | data     | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#227 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L227)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | data     | variable | -           |

##### discourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#91 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#L91)

| Position | Argument             | Type     | Description |
| -------- | -------------------- | -------- | ----------- |
| 1        | objectArg1           | object   | -           |
| -        | objectArg1.undefined | variable | -           |

##### discourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#105 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#L105)

| Position | Argument             | Type      | Description |
| -------- | -------------------- | --------- | ----------- |
| 1        | objectArg1           | object    | -           |
| -        | objectArg1.undefined | undefined | -           |

##### discourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#136 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#L136)

| Position | Argument             | Type     | Description |
| -------- | -------------------- | -------- | ----------- |
| 1        | objectArg1           | object   | -           |
| -        | objectArg1.undefined | variable | -           |

##### discourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#151 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/plugins/chat/test/javascripts/components/chat-channel-test.gjs#L151)

| Position | Argument             | Type      | Description |
| -------- | -------------------- | --------- | ----------- |
| 1        | objectArg1           | object    | -           |
| -        | objectArg1.undefined | undefined | -           |

</details>


### other events
#### click-tracked [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/click-track.js#L98)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | href     | variable | True           | -           |

#### decorate-non-stream-cooked-element [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L382)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | preview1 | variable | True           | -           |
| 2        | helper1  | variable | True           | -           |

<details><summary>Detailed List</summary>

##### discourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#382 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/composer-editor.gjs#L382)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | preview1 | variable | -           |
| 2        | helper1  | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/components/discourse-banner.gjs#48 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/discourse-banner.gjs#L48)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | element1 | variable | -           |
| 2        | helper1  | variable | -           |

##### discourse/app/assets/javascripts/discourse/app/components/post-list/item/index.gjs#67 [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post-list/item/index.gjs#L67)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | element1 | variable | -           |
| 2        | helper1  | variable | -           |

</details>

#### desktop-notification-opened [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/desktop-notifications.js#L179)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### keyboard-visibility-change [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/d-virtual-height.gjs#L59)

| Position | Argument        | Type     | Always Present | Description |
| -------- | --------------- | -------- | -------------- | ----------- |
| 1        | keyboardVisible | variable | True           | -           |

#### push-notification-opened [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/push-notifications.js#L77)

| Position | Argument       | Type     | Always Present | Description |
| -------- | -------------- | -------- | -------------- | ----------- |
| 1        | objectArg1     | object   | True           | -           |
| -        | objectArg1.url | property | True           | -           |

#### this.flagCreatedEvent [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L15)

| Position | Argument                       | Type     | Always Present | Description |
| -------- | ------------------------------ | -------- | -------------- | ----------- |
| 1        | flagModal.args.model.flagModel | property | True           | -           |
| 2        | postAction                     | variable | True           | -           |
| 3        | opts                           | variable | True           | -           |

#### undefined [:link:](https://github.com/discourse/discourse/blob/maindiscourse/app/assets/javascripts/discourse/app/components/post/cooked-html.gjs#L82)

| Position | Argument | Type     | Always Present | Description |
| -------- | -------- | -------- | -------------- | ----------- |
| 1        | element1 | variable | True           | -           |
| 2        | helper1  | variable | True           | -           |