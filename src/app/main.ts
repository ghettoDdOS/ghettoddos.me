import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

import './index.css'

function getRootElement(id: string) {
  const el = document.getElementById(id)
  if (el === null) throw new Error(`Element with id ${id} not found`)
  return el
}

function main() {
  const rootElement = getRootElement('root')
  const root = createRoot(rootElement)
  const rootNode = createElement(App)

  root.render(rootNode)
}

main()
