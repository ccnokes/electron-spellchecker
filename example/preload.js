const { remote } = require('electron');
const SpellCheckHandler = require('../lib/spell-check-handler').default;
const ContextMenuListener = require('../lib/context-menu-listener').default;
const ContextMenuBuilder = require('../lib/context-menu-builder').default;

const spellCheckHandler = new SpellCheckHandler();

const contextMenuBuilder = new ContextMenuBuilder(spellCheckHandler);
const contextMenuListener = new ContextMenuListener((info) => {
  contextMenuBuilder.showPopupMenu(info);
});

spellCheckHandler.init();

remote.getCurrentWebContents().openDevTools();
