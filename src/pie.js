import React, {cloneElement} from 'react'
import Slice from './slice'
import { isComponentType, getProps } from './util'

const svgStyle = { transform: 'rotate(-90deg)' }

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export default class Pie extends React.Component {
  renderSlices () {
    let cumulativePercent = 0
    const { children, donut } = this.props
    return children.map((child) => {
      if (isComponentType(child, Slice)) {
        const {percent, fill} = getProps(child)
        const key = child.key || percent + fill
        const start = cumulativePercent
        cumulativePercent = cumulativePercent + percent

        return cloneElement(child, {
          key,
          start,
          percent,
          fill,
          donut
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
