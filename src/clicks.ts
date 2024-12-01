let cur: PromiseWithResolvers<HTMLElement> = Promise.withResolvers()

function optionContextHandler(event: MouseEvent) {
  if (!(event?.target instanceof HTMLButtonElement)) {
    console.trace("click was not button")
    return;
  }
  if (event.target.ariaLabel != "Open post options menu") {
    console.trace("click was not on open options")
    return;
  }

  cur.resolve(event.target)
  cur = Promise.withResolvers()
}

document.body.addEventListener("click", optionContextHandler, true)

export async function* options() {
  while (true) {
    yield await cur.promise
  }
}
