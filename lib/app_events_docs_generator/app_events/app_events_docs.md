### ace
#### ace:resize [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/admin/addon/components/admin-theme-editor.js#L109)

No arguments passed to this event.


### topic-entrance
#### topic-entrance:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/basic-topic-list.js#L106)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/basic-topic-list.js#106 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/basic-topic-list.js#L106)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | variable        | -           |
| -        | objectArg1.position | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/featured-topic.js#13 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/featured-topic.js#L13)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/topic-list-item.js#33 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/topic-list-item.js#L33)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | objectArg1          | object          | -           |
| -        | objectArg1.topic    | property        | -           |
| -        | objectArg1.position | called_function | -           |

</details>


### bookmarks
#### bookmarks:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.js#L40)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/bookmark-list.js#40 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.js#L40)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | null                | null            | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/components/bookmark-list.js#78 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/bookmark-list.js#L78)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | savedData           | variable        | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1376 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1376)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

##### /app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#57 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/topic-bookmark-manager.js#L57)

| Position | Argument                      | Type            | Description |
| -------- | ----------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData     | property        | -           |
| 2        | this.bookmarkModel.attachedTo | called_function | -           |

##### /app/assets/javascripts/discourse/app/models/post.js#526 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L526)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | data                | variable | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /app/assets/javascripts/discourse/app/models/post.js#547 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L547)

| Position | Argument            | Type     | Description |
| -------- | ------------------- | -------- | ----------- |
| 1        | null                | null     | -           |
| 2        | objectArg2          | object   | -           |
| -        | objectArg2.target   | string   | -           |
| -        | objectArg2.targetId | property | -           |

##### /app/assets/javascripts/discourse/app/models/topic.js#688 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/topic.js#L688)

| Position | Argument            | Type            | Description |
| -------- | ------------------- | --------------- | ----------- |
| 1        | null                | null            | -           |
| 2        | bookmark.attachedTo | called_function | -           |

##### /plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#343 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/lib/chat-message-interactor.js#L343)

| Position | Argument                  | Type            | Description |
| -------- | ------------------------- | --------------- | ----------- |
| 1        | bookmarkFormData.saveData | property        | -           |
| 2        | bookmark.attachedTo       | called_function | -           |

</details>


### card
#### card:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L63)

No arguments passed to this event.

#### card:hide [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L263)

No arguments passed to this event.

#### card:close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat/direct-message-button.gjs#L32)

No arguments passed to this event.


### user-card
#### user-card:show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L88)

No arguments passed to this event.

#### user-card:after-show [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/card-contents-base.js#L93)

No arguments passed to this event.


### composer
#### composer:find-similar [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L67)

No arguments passed to this event.

#### composer:div-resizing [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L93)

No arguments passed to this event.

#### composer:resized [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L127)

No arguments passed to this event.

#### composer:resize-started [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L145)

No arguments passed to this event.

#### composer:resize-ended [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L150)

No arguments passed to this event.

#### composer:opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-body.js#L177)

No arguments passed to this event.

#### this.composerEventPrefix:will-open [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L204)

No arguments passed to this event.

#### this.composerEventPrefix:replace-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L593)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.js#593 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L593)

| Position | Argument                  | Type     | Description |
| -------- | ------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder.index | property | -           |
| 2        | replacement               | variable | -           |
| 3        | objectArg3                | object   | -           |
| -        | objectArg3.regex          | variable | -           |
| -        | objectArg3.index          | variable | -           |

##### /app/assets/javascripts/discourse/app/components/composer-editor.js#636 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L636)

| Position | Argument    | Type     | Description |
| -------- | ----------- | -------- | ----------- |
| 1        | match       | variable | -           |
| 2        | replacement | variable | -           |

##### /app/assets/javascripts/discourse/app/components/composer-editor.js#722 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L722)

| Position | Argument                  | Type     | Description |
| -------- | ------------------------- | -------- | ----------- |
| 1        | matchingPlaceholder.index | property | -           |
| 2        | string                    | string   | -           |
| 3        | objectArg3                | object   | -           |
| -        | objectArg3.regex          | variable | -           |
| -        | objectArg3.index          | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#380 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L380)

| Position | Argument                      | Type            | Description |
| -------- | ----------------------------- | --------------- | ----------- |
| 1        | this...uploadPlaceholder.trim | called_function | -           |
| 2        | markdown                      | variable        | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#415 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L415)

| Position | Argument               | Type     | Description |
| -------- | ---------------------- | -------- | ----------- |
| 1        | data.uploadPlaceholder | property | -           |
| 2        | string                 | string   | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#513 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L513)

| Position | Argument                              | Type     | Description |
| -------- | ------------------------------------- | -------- | ----------- |
| 1        | placeholderData.uploadPlaceholder     | property | -           |
| 2        | placeholderData.processingPlaceholder | property | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#522 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L522)

| Position | Argument                                  | Type            | Description |
| -------- | ----------------------------------------- | --------------- | ----------- |
| 1        | placeholderData.uploadPlaceholder.replace | called_function | -           |
| 2        | placeholderData.processingPlaceholder     | property        | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#533 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L533)

| Position | Argument                              | Type     | Description |
| -------- | ------------------------------------- | -------- | ----------- |
| 1        | placeholderData.processingPlaceholder | property | -           |
| 2        | placeholderData.uploadPlaceholder     | property | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#622 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L622)

| Position | Argument                 | Type     | Description |
| -------- | ------------------------ | -------- | ----------- |
| 1        | this...uploadPlaceholder | property | -           |
| 2        | string                   | string   | -           |

</details>

#### this.composerEventPrefix:apply-surround [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L750)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.js#750 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L750)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#791 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L791)

| Position | Argument                | Type    | Description |
| -------- | ----------------------- | ------- | ----------- |
| 1        | [grid]                  | string  | -           |
| 2        | [/grid]                 | string  | -           |
| 3        | grid_surround           | string  | -           |
| 4        | objectArg4              | object  | -           |
| -        | objectArg4.useBlockMode | boolean | -           |

</details>

#### this.composerEventPrefix:will-close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L782)

No arguments passed to this event.

#### this.composerEventPrefix:closed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L787)

No arguments passed to this event.

#### composer:insert-block [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L473)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#473 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L473)

| Position | Argument   | Type     | Description |
| -------- | ---------- | -------- | ----------- |
| 1        | quotedText | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#694 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L694)

| Position | Argument        | Type            | Description |
| -------- | --------------- | --------------- | ----------- |
| 1        | quotedText.trim | called_function | -           |

</details>

#### this.composerEventPrefix:uploads-aborted [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L129)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#129 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L129)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#176 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L176)

No arguments passed to this event.

</details>

#### this.composerEventPrefix:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L283)

No arguments passed to this event.

#### this.composerEventPrefix:insert-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L342)

No arguments passed to this event.

#### this.composerEventPrefix:upload-started [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L348)

No arguments passed to this event.

#### this.composerEventPrefix:upload-success [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L388)

No arguments passed to this event.

#### this.composerEventPrefix:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L395)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L427)

No arguments passed to this event.

#### this.composerEventPrefix:upload-error [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L448)

No arguments passed to this event.

#### this.composerEventPrefix:uploads-preprocessing-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/composer-upload.js#L546)

No arguments passed to this event.

#### composer:reply-reloaded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L944)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/models/composer.js#944 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L944)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#970 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L970)

| Position | Argument | Type | Description |
| -------- | -------- | ---- | ----------- |
| 1        | this     | this | -           |

</details>

#### composer:cancel-upload [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L644)

No arguments passed to this event.

#### composer:toolbar-popup-menu-button-clicked [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L673)

No arguments passed to this event.

#### composer:saved [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1181)

No arguments passed to this event.

#### composer:edited-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1200)

No arguments passed to this event.

#### composer:created-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1212)

No arguments passed to this event.

#### composer:typed-reply [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1295)

No arguments passed to this event.

#### composer:open [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1443)

No arguments passed to this event.

#### composer:cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1691)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#1691 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1691)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1699 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1699)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1712 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1712)

No arguments passed to this event.

</details>

#### composer:insert-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/search.js#L42)

No arguments passed to this event.


### other events
#### decorate-non-stream-cooked-element [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L495)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/composer-editor.js#495 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/composer-editor.js#L495)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | preview  | variable | -           |

##### /app/assets/javascripts/discourse/app/components/d-editor.js#288 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-editor.js#L288)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | cookedElement | variable | -           |

##### /app/assets/javascripts/discourse/app/components/discourse-banner.js#51 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/discourse-banner.js#L51)

| Position | Argument     | Type     | Description |
| -------- | ------------ | -------- | ----------- |
| 1        | this.element | property | -           |

##### /app/assets/javascripts/discourse/app/components/user-stream.js#50 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-stream.js#L50)

| Position | Argument     | Type     | Description |
| -------- | ------------ | -------- | ----------- |
| 1        | this.element | property | -           |

##### /app/assets/javascripts/discourse/app/components/user-stream.js#149 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-stream.js#L149)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | element  | variable | -           |

</details>

#### keyboard-visibility-change [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-virtual-height.gjs#L87)

No arguments passed to this event.

#### click-tracked [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/click-track.js#L98)

No arguments passed to this event.

#### desktop-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/desktop-notifications.js#L179)

No arguments passed to this event.

#### this.flagCreatedEvent [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L15)

No arguments passed to this event.

#### REFRESH_USER_SIDEBAR_CATEGORIES_SECTION_COUNTS_APP_EVENT_NAME [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/plugin-api.gjs#L2356)

No arguments passed to this event.

#### push-notification-opened [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/push-notifications.js#L77)

No arguments passed to this event.


### inserted-custom-html
#### inserted-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/custom-html.js#L33)

No arguments passed to this event.


### destroyed-custom-html
#### destroyed-custom-html:this.name [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/custom-html.js#L40)

No arguments passed to this event.


### d-editor
#### d-editor:preview-click-user-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-editor.js#L186)

No arguments passed to this event.

#### d-editor:preview-click-group-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/d-editor.js#L194)

No arguments passed to this event.

#### d-editor:toolbar-button-clicked [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/composer/toolbar.js#L140)

No arguments passed to this event.


### topic
#### topic:scrolled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/discourse-topic.js#L99)

No arguments passed to this event.

#### topic:current-post-changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L513)

No arguments passed to this event.

#### topic:current-post-scrolled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L520)

No arguments passed to this event.

#### topic:jump-to-post [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L965)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#965 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L965)

| Position | Argument | Type            | Description |
| -------- | -------- | --------------- | ----------- |
| 1        | this.get | called_function | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1344 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1344)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | postId   | variable | -           |

</details>

#### topic:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L518)

No arguments passed to this event.

#### topic:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1212)

No arguments passed to this event.

#### topic:timings-sent [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/screen-track.js#L209)

No arguments passed to this event.


### group
#### group:leave [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/group-membership-button.js#L49)

No arguments passed to this event.

#### group:join [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/group-membership-button.js#L65)

No arguments passed to this event.


### topic-header
#### topic-header:trigger-this.args.type-card [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/header/topic/participant.gjs#L19)

No arguments passed to this event.


### post-stream
#### post-stream:refresh [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.js#L340)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/components/invite-panel.js#340 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.js#L340)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/components/invite-panel.js#353 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/invite-panel.js#L353)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/components/modal/history.js#190 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/modal/history.js#L190)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/components/search-menu.js#297 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/search-menu.js#L297)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#112 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L112)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#296 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L296)

| Position | Argument         | Type    | Description |
| -------- | ---------------- | ------- | ----------- |
| 1        | objectArg1       | object  | -           |
| -        | objectArg1.force | boolean | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#734 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L734)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/controllers/topic.js#914 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L914)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1417 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1417)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1734 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1734)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | args     | variable | -           |

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1880 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1880)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### /app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#26 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/flag-targets/flag.js#L26)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#625 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L625)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#60 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/post-bookmark-manager.js#L60)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#1075 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1075)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/composer.js#1087 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1087)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/models/post-stream.js#284 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L284)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post-stream.js#304 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L304)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post-stream.js#438 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L438)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/models/post.js#530 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post.js#L530)

| Position | Argument      | Type     | Description |
| -------- | ------------- | -------- | ----------- |
| 1        | objectArg1    | object   | -           |
| -        | objectArg1.id | property | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1194 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1194)

No arguments passed to this event.

##### /app/assets/javascripts/discourse/app/services/composer.js#1201 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1201)

| Position | Argument      | Type            | Description |
| -------- | ------------- | --------------- | ----------- |
| 1        | objectArg1    | object          | -           |
| -        | objectArg1.id | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1208 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1208)

No arguments passed to this event.

</details>

#### post-stream:filter-replies [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L270)

No arguments passed to this event.

#### post-stream:filter-upwards [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L299)

No arguments passed to this event.

#### post-stream:posted [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1278)

No arguments passed to this event.

#### post-stream:gap-expanded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post-gap.js#L32)

No arguments passed to this event.

#### post-stream:filter-show-all [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post-stream.js#L186)

No arguments passed to this event.


### header
#### header:show-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/modal/convert-to-public-topic.js#L23)

No arguments passed to this event.

#### header:update-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1750)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/controllers/topic.js#1750 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L1750)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | topic    | variable | -           |

##### /app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#163 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L163)

| Position | Argument | Type    | Description |
| -------- | -------- | ------- | ----------- |
| 1        | null     | null    | -           |
| 2        | 5000     | integer | -           |

##### /app/assets/javascripts/discourse/app/routes/topic.js#418 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic.js#L418)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | model    | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1205 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1205)

| Position | Argument       | Type     | Description |
| -------- | -------------- | -------- | ----------- |
| 1        | composer.topic | property | -           |

</details>

#### header:keyboard-trigger [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L451)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#451 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L451)

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

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#531 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L531)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#538 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L538)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | objectArg1       | object   | -           |
| -        | objectArg1.type  | string   | -           |
| -        | objectArg1.event | variable | -           |

##### /app/assets/javascripts/discourse/app/services/search.js#49 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/search.js#L49)

| Position | Argument        | Type   | Description |
| -------- | --------------- | ------ | ----------- |
| 1        | objectArg1      | object | -           |
| -        | objectArg1.type | string | -           |

</details>

#### header:hide-topic [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic.js#L393)

No arguments passed to this event.


### sidebar-hamburger-dropdown
#### sidebar-hamburger-dropdown:rendered [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/sidebar/hamburger-dropdown.gjs#L26)

No arguments passed to this event.


### user-menu
#### user-menu:tab-click [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-menu/menu.js#L313)

No arguments passed to this event.

#### user-menu:rendered [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/components/user-menu/menu.js#L319)

No arguments passed to this event.

#### user-menu:notification-click [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/user-menu/notification-item.js#L85)

No arguments passed to this event.


### full-page-search
#### full-page-search:trigger-search [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/full-page-search.js#L563)

No arguments passed to this event.


### page
#### page:compose-reply [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/controllers/topic.js#L672)

No arguments passed to this event.

#### page:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/page-tracker.js#L41)

No arguments passed to this event.

#### page:topic-loaded [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L93)

No arguments passed to this event.

#### page:like-toggled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/widgets/post.js#L1138)

No arguments passed to this event.


### dom
#### dom:clean [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/clean-dom-on-route-change.js#L32)

No arguments passed to this event.


### site-header
#### site-header:force-refresh [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/narrow-desktop.js#L26)

No arguments passed to this event.


### cta
#### cta:shown [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/signup-cta.js#L72)

No arguments passed to this event.


### notifications
#### notifications:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L155)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#155 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L155)

No arguments passed to this event.

##### /plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#110 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-tracking-state-manager.js#L110)

No arguments passed to this event.

</details>


### user-status
#### user-status:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/instance-initializers/subscribe-user-notifications.js#L227)

No arguments passed to this event.


### quote-button
#### quote-button:quote [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L337)

No arguments passed to this event.

#### quote-button:edit [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L353)

No arguments passed to this event.


### keyboard
#### keyboard:move-selection [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/keyboard-shortcuts.js#L790)

No arguments passed to this event.


### this.eventPrefix
#### this.eventPrefix:insert-text [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L423)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#423 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L423)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | table    | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#477 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/textarea-text-manipulation.js#L477)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | markdown | variable | -           |

</details>


### upload-mixin
#### upload-mixin:this.config.id:upload-success [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L249)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#249 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L249)

| Position | Argument         | Type     | Description |
| -------- | ---------------- | -------- | ----------- |
| 1        | file.name        | property | -           |
| 2        | completeResponse | variable | -           |

##### /app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#270 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L270)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | file.name | property | -           |
| 2        | upload    | variable | -           |

</details>

#### upload-mixin:this.config.id:upload-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L304)

No arguments passed to this event.

#### upload-mixin:this.config.id:uploads-cancelled [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L346)

No arguments passed to this event.

#### upload-mixin:this.config.id:in-progress-uploads [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L382)

No arguments passed to this event.

#### upload-mixin:this.config.id:all-uploads-complete [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/uppy/uppy-upload.js#L572)

No arguments passed to this event.


### post
#### post:highlight [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/url.js#L356)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/lib/url.js#356 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/lib/url.js#L356)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /app/assets/javascripts/discourse/app/routes/topic-from-params.js#98 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/topic-from-params.js#L98)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | closest  | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#1213 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1213)

| Position | Argument                   | Type     | Description |
| -------- | -------------------------- | -------- | ----------- |
| 1        | result.payload.post_number | property | -           |
| 2        | options                    | variable | -           |

</details>

#### post:created [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/composer.js#L1210)

No arguments passed to this event.

#### post:show-revision [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/post-stream.js#L1290)

No arguments passed to this event.


### do-not-disturb
#### do-not-disturb:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1226)

No arguments passed to this event.


### user-drafts
#### user-drafts:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1232)

No arguments passed to this event.


### user-reviewable-count
#### user-reviewable-count:changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/models/user.js#L1237)

No arguments passed to this event.


### count-updated
#### count-updated:user.username_lower:key [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/routes/user.js#L102)

No arguments passed to this event.


### composer-messages
#### composer-messages:create [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L765)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /app/assets/javascripts/discourse/app/services/composer.js#765 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L765)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#775 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L775)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#954 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L954)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#978 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L978)

| Position | Argument                | Type     | Description |
| -------- | ----------------------- | -------- | ----------- |
| 1        | objectArg1              | object   | -           |
| -        | objectArg1.extraClass   | string   | -           |
| -        | objectArg1.templateName | string   | -           |
| -        | objectArg1.body         | variable | -           |

##### /app/assets/javascripts/discourse/app/services/composer.js#987 [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L987)

| Position | Argument                | Type            | Description |
| -------- | ----------------------- | --------------- | ----------- |
| 1        | objectArg1              | object          | -           |
| -        | objectArg1.extraClass   | string          | -           |
| -        | objectArg1.templateName | string          | -           |
| -        | objectArg1.body         | called_function | -           |

</details>

#### composer-messages:close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L903)

No arguments passed to this event.


### emoji-picker
#### emoji-picker:close [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L898)

No arguments passed to this event.


### draft
#### draft:destroyed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/composer.js#L1622)

No arguments passed to this event.


### discourse
#### discourse:focus-changed [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/document-title.js#L40)

No arguments passed to this event.


### lightbox
#### LIGHTBOX_APP_EVENT_NAMES.OPENED [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L77)

No arguments passed to this event.

#### LIGHTBOX_APP_EVENT_NAMES.ITEM_WILL_CHANGE [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L85)

No arguments passed to this event.

#### LIGHTBOX_APP_EVENT_NAMES.ITEM_DID_CHANGE [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L92)

No arguments passed to this event.

#### LIGHTBOX_APP_EVENT_NAMES.CLOSED [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L109)

No arguments passed to this event.

#### LIGHTBOX_APP_EVENT_NAMES.OPEN [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L129)

No arguments passed to this event.

#### LIGHTBOX_APP_EVENT_NAMES.CLOSE [:link:](https://github.com/discourse/discourse/blob/main/app/assets/javascripts/discourse/app/services/lightbox.js#L142)

No arguments passed to this event.


### chat
#### chat:rerender-header [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.js#L91)

No arguments passed to this event.

#### chat:toggle-expand [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.js#L208)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/components/chat-drawer.js#208 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-drawer.js#L208)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

##### /plugins/chat/assets/javascripts/discourse/services/chat.js#455 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat.js#L455)

| Position | Argument                               | Type     | Description |
| -------- | -------------------------------------- | -------- | ----------- |
| 1        | this.chatStateManager.isDrawerExpanded | property | -           |

</details>

#### chat:message_interaction [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/components/chat-message/blocks/index.gjs#L18)

No arguments passed to this event.

#### chat:modify-selection [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L72)

No arguments passed to this event.

#### chat:open-insert-link-modal [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L84)

No arguments passed to this event.

#### chat:toggle-close [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L110)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#110 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/initializers/chat-keyboard-shortcuts.js#L110)

| Position | Argument | Type     | Description |
| -------- | -------- | -------- | ----------- |
| 1        | event    | variable | -           |

##### /plugins/chat/assets/javascripts/discourse/routes/chat.js#53 [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L53)

No arguments passed to this event.

</details>

#### chat:open-url [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/routes/chat.js#L48)

No arguments passed to this event.

#### chat:refresh-channel-members [:link:](https://github.com/discourse/discourse/blob/main/plugins/chat/assets/javascripts/discourse/services/chat-subscriptions-manager.js#L469)

No arguments passed to this event.


### discourse-reactions
#### discourse-reactions:reaction-toggled [:link:](https://github.com/discourse/discourse/blob/main/plugins/discourse-reactions/assets/javascripts/discourse/models/discourse-reactions-custom-reaction.js#L23)

No arguments passed to this event.


### poll
#### poll:voted [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L188)

No arguments passed to this event.

<details><summary>Detailed List</summary>

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#188 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L188)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

##### /plugins/poll/assets/javascripts/discourse/components/poll.gjs#442 [:link:](https://github.com/discourse/discourse/blob/main/plugins/poll/assets/javascripts/discourse/components/poll.gjs#L442)

| Position | Argument  | Type     | Description |
| -------- | --------- | -------- | ----------- |
| 1        | poll1     | variable | -           |
| 2        | this.post | property | -           |
| 3        | this.vote | property | -           |

</details>