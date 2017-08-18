import React from 'react' // eslint-disable-line

// alas, prism and node has some rough spots
// https://github.com/PrismJS/prism/issues/593#issuecomment-226143416
const Prism = require('prismjs')
require('prismjs/components/prism-jsx')
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')

function highlight (syntax, code) {
  let normalized = Prism.plugins.NormalizeWhitespace.normalize(code)
  let highlighted = Prism.highlight(normalized, Prism.languages[syntax])
  return <code key={code} dangerouslySetInnerHTML={{__html: highlighted}} />
}

export default function Snippet (props) {
  let children = typeof props.children === 'string'
    ? [props.children]
    : props.children
  let code = children.map(highlight.bind(null, props.syntax))

  return <pre>{code}</pre>
}
