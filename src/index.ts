import { options } from './options-clicks.js'
import { addLinkOption } from './options-link.js'

async function atLinks(): Promise<void> {
  for await (let optionBtn of options()) {
    // TODO: is any delay necessary between button click & popper showing up?
    addLinkOption(optionBtn)
  }
}
atLinks()
