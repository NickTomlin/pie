import React from 'react'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage)
  const y = Math.sin(2 * Math.PI * percentage)

  return [x, y]
}

function generatePath (start, slicePercent) {
  const [startX, startY] = getCoordinatesForPercent(start)
  const [endX, endY] = getCoordinatesForPercent(start + slicePercent)
  const largeArcFlag = slicePercent > 0.5 ? 1 : 0

  return [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`
  ].join(' ')
}

export default function Slice (props) {
  const { start, percent, ...rest } = props
  return <path
    {...rest}
    d={generatePath(start, percent)}
    fill={props.fill}
  />
}
