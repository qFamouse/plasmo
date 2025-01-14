// @ts-nocheck
import * as Component from "__plasmo_import_module__"
import React from "react"
import { createRoot } from "react-dom/client"

let __plasmoRoot: HTMLElement = null

document.addEventListener("DOMContentLoaded", () => {
  if (!!__plasmoRoot) {
    return
  }

  __plasmoRoot = document.getElementById("__plasmo")
  const root = createRoot(__plasmoRoot)
  root.render(<Component.default />)
})
