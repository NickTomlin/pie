import { h, Component} from 'preact'
// alas, prism and node has some rough spots
// https://github.com/PrismJS/prism/issues/593#issuecomment-226143416
const Prism = require('prismjs')
require('prismjs/components/prism-jsx')
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');


export default function Example () {
  let examples = this.props.children.map((child) => {
    let normalized = Prism.plugins.NormalizeWhitespace.normalize(child)
    let code = Prism.highlight(normalized, Prism.languages[this.props.syntax])
    return <code dangerouslySetInnerHTML={{__html: code}}></code>
  })

  return <pre>{examples}</pre>
}
