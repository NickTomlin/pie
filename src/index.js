import React, {cloneElement} from 'react'
import {getProps, isComponentType} from './util'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage)
  const y = Math.sin(2 * Math.PI * percentage)

  return [x, y]
}

export class Slice extends React.Component {
  generatePath (start, slicePercent) {
    const [startX, startY] = getCoordinatesForPercent(start)
    const [endX, endY] = getCoordinatesForPercent(start + slicePercent)
    const largeArcFlag = slicePercent > 0.5 ? 1 : 0

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `L 0 0`
    ].join(' ')
  }

  render () {
    const { start, percent, ...rest } = this.props
    return <path
      {...rest}
      d={this.generatePath(start, percent)}
      fill={this.props.fill}
    />
  }
}

const svgStyle = { transform: 'rotate(-90deg)' }

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export class Pie extends React.Component {
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
