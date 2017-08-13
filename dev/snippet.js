import React from 'react' // eslint-disable-line
// alas, prism and node has some rough spots
// https://github.com/PrismJS/prism/issues/593#issuecomment-226143416
const Prism = require('prismjs')
require('prismjs/components/prism-jsx')
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')

export default function Snippet (props) {
  let examples = React.Children.map(props.children, (child) => {
    let normalized = Prism.plugins.NormalizeWhitespace.normalize(child)
    let code = Prism.highlight(normalized, Prism.languages[props.syntax])
    return <code dangerouslySetInnerHTML={{__html: code}} />
  })

  return <pre>{examples}</pre>
}
