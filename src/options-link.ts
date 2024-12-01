function findAtLink(btn: HTMLElement, { protocol = "web+at" } = {}) {
  const area = btn?.parentNode?.parentNode
  const link = area?.firstElementChild?.lastElementChild

  if (!link) {
    throw new Error("Post link expected")
  }
  if (!(link instanceof HTMLAnchorElement)) {
    throw new Error("Post anchor expected")
  }

  //from: https://bsky.app/profile/jauntywk.bsky.social/post/3lc2oa5rl6s2r
  const paths = new URL(link.href).pathname.split("/")
  //to: at://jauntywk.bsky.social/app.bsky.feed.post/3lc2oa5rl6s2r
  return `${protocol}://${paths[2]}/app.bsky.feed.post/${paths[4]}`
}

type InsertLinkBtnOptions = { target?: string }
function insertLinkBtn(href: string, { target }: InsertLinkBtnOptions = {}) {
  const copyLink = document.querySelector("body > div[data-radix-popper-content-wrapper] div[aria-label='Copy link to post']")
  if (!copyLink) {
    throw new Error("Expected copy link option item")
  }

  // copy and modify menu item
  const clone = copyLink?.lastElementChild?.cloneNode() as HTMLElement | undefined
  if (!clone) {
    throw new Error("Expected option item")
  }
  if (!(clone.firstElementChild instanceof HTMLElement)) {
    throw new Error("Expected option item name")
  }
  if (!(clone.lastElementChild instanceof HTMLElement)) {
    throw new Error("Expected option item icon")
  }
  clone.firstElementChild.innerText = "at:// link"
  clone.lastElementChild.innerHTML = "🔗"
  clone.dataset.testid = "postDropdownLinkBtn"

  // stuff web+at:// url into <a href>
  const anchor = document.createElement("a")
  anchor.href = href
  if (target) {
    anchor.target = target
  }
  anchor.appendChild(clone)

  copyLink.insertAdjacentElement('afterend', anchor)
}

export function addLinkOption(optionBtn: HTMLElement, { protocol = "web+at", target }: { protocol?: string, target?: string } = {}) {
  const url = findAtLink(optionBtn, { protocol })
  insertLinkBtn(url, { target })
}
