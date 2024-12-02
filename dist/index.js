"use strict";
async function atLinks() {
    const modules = ["add-link", "clicks", "style"].map(async function terribleWebExtLoader(mod) {
        const url = chrome.runtime.getURL(`dist/${mod}.js`);
        return await import(url);
    });
    const [addLink, clicks, _] = await Promise.all(modules);
    console.log({ addLink, clicks });
    for await (let optionBtn of clicks.options()) {
        // TODO: is any delay necessary between button click & popper showing up?
        addLink.addLinkOption(optionBtn);
    }
}
atLinks();
//# sourceMappingURL=index.js.map