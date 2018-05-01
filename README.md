# electron-spellchecker

## Quick Start

```js
import { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } from '@ccnokes/electron-spellchecker';

const spellCheckHandler = new SpellCheckHandler();

const contextMenuBuilder = new ContextMenuBuilder(spellCheckHandler);
const contextMenuListener = new ContextMenuListener((info) => {
  contextMenuBuilder.showPopupMenu(info);
});

spellCheckHandler.init();
```
