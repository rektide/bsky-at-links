async function atLinks(): Promise<void> {
  const clickSrc = chrome.runtime.getURL("dist/clicks.js")
  const addLinkSrc = chrome.runtime.getURL("dist/add-link.js")
  let clicks_ = import(clickSrc).then(m => m.options)
  let addLink_ = import(addLinkSrc).then(m => m.addLinkOption)
  let [clicks, addLink] = await Promise.all([clicks_, addLink_])
  for await (let optionBtn of clicks()) {
    // TODO: is any delay necessary between button click & popper showing up?
    addLink(optionBtn)
  }
}
atLinks()
