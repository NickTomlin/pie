import React, {cloneElement} from 'react'
import {getProps, isComponentType} from './util'
import Slice from './slice'

const svgStyle = { overflow: 'visible', transform: 'rotate(-90deg)' }

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export default class Pie extends React.Component {
  renderSlices () {
    let cumulativePercent = 0

    return this.props.children.map((child) => {
      if (isComponentType(child, Slice)) {
        const {percent, fill} = getProps(child)
        const key = child.key || percent + fill
        const start = cumulativePercent
        cumulativePercent = cumulativePercent + percent

        return cloneElement(child, {
          key,
          start,
          percent,
          fill
        })
      } else { return child }
    })
  }

  render () {
    return (
      <svg
        style={svgStyle}
        viewBox='-1 -1 2 2'
        >
        {this.renderSlices()}
      </svg>
    )
  }
}
