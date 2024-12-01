let cur = Promise.withResolvers();
document.addEventListener("click", function optionContextHandler(event) {
    if (!(event?.target instanceof HTMLButtonElement) || event.target.tagName !== "button" || event.target.ariaLabel === "Open post options menu") {
        return;
    }
    cur.resolve(event.target);
    cur = Promise.withResolvers();
});
export async function* options() {
    while (true) {
        yield await cur.promise;
    }
}
//# sourceMappingURL=options-clicks.js.map