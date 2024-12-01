function findAtLink(btn, { protocol = "web+at" } = {}) {
    const area = btn?.parentNode?.parentNode?.parentNode?.parentNode;
    const link = area?.firstElementChild?.lastElementChild;
    // either the anchor, or the current location
    let href = link instanceof HTMLAnchorElement ? link.href : window.location.href;
    if (!href) {
        throw new Error("Post link expected");
    }
    //from: https://bsky.app/profile/jauntywk.bsky.social/post/3lc2oa5rl6s2r
    const paths = new URL(href).pathname.split("/");
    //to: at://jauntywk.bsky.social/app.bsky.feed.post/3lc2oa5rl6s2r
    return `${protocol}://${paths[2]}/app.bsky.feed.post/${paths[4]}`;
}
function insertLinkBtn(href, { target } = {}) {
    const copyLink = document.querySelector("body > div[data-radix-popper-content-wrapper] div[aria-label='Copy link to post']");
    if (!copyLink) {
        throw new Error("Expected copy link option item");
    }
    // copy and modify menu item
    const clone = copyLink.cloneNode();
    if (!clone) {
        throw new Error("Expected option item");
    }
    clone.innerHTML = copyLink.innerHTML;
    if (!(clone.firstElementChild instanceof HTMLElement)) {
        throw new Error("Expected option item name");
    }
    if (!(clone.lastElementChild instanceof HTMLElement)) {
        throw new Error("Expected option item icon");
    }
    clone.firstElementChild.innerText = "at:// link";
    clone.lastElementChild.innerHTML = "🔗";
    clone.dataset.testid = "postDropdownLinkBtn";
    // stuff web+at:// url into <a href>
    const anchor = document.createElement("a");
    anchor.href = href;
    if (target) {
        anchor.target = target;
    }
    anchor.style.textDecoration = "none";
    anchor.appendChild(clone);
    copyLink.insertAdjacentElement('afterend', anchor);
}
export async function addLinkOption(optionBtn, { protocol = "web+at", target } = {}) {
    const url = findAtLink(optionBtn, { protocol });
    await new Promise(resolve => setTimeout(resolve, 150));
    insertLinkBtn(url, { target });
}
//# sourceMappingURL=add-link.js.map