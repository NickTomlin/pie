import React, {cloneElement} from 'react'
import {isComponentType} from './util'

const defaultProps = {
  style: {
    overflow: 'visible'
  }
}

const defaultLabelProps = {
  style: {
    fontSize: '3px',
    transform: 'rotate(90deg)' // because our parent SVG is rotate(-90deg)
  }
}

export function Label (props) {
  const newProps = Object.assign({}, defaultLabelProps, props)
  return <text {...newProps}>{props.children}</text>
}

export class LabelGroup extends React.Component {
  render () {
    const { children, ...rest } = this.props
    let labels = children.map((child, index) => {
      if (isComponentType(child, Label)) {
        return cloneElement(child, { key: index, y: index * 5 })
      } else { return child }
    })

    // we are in a rotated parent, so X and Y are switched here ¯\_(ツ)_/¯
    return <svg {...Object.assign({}, defaultProps, rest)} y={1.75} x={1} viewBox='10 10 40 40'>{labels}</svg>
  }
}
