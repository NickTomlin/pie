import React from 'react'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage)
  const y = Math.sin(2 * Math.PI * percentage)

  return [x, y]
}

export default class Slice extends React.Component {
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
