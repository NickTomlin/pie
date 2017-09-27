import React from 'react'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage)
  const y = Math.sin(2 * Math.PI * percentage)

  return [x, y]
}

function donutPath (start, slicePercent) {
  const {startX, startY, endX, endY, largeArcFlag} = generatePath(start, slicePercent)
  return [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    // go halfway to center
    `L ${endX / 2} ${endY / 2}`,
    // angle back towards the starting point
    `A 0.5 0.5 0 ${largeArcFlag} 0 ${startX / 2} ${startY / 2}`
  ].join(' ')
}

function path (start, slicePercent) {
  const {startX, startY, endX, endY, largeArcFlag} = generatePath(start, slicePercent)
  return [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`
  ].join(' ')
}

function generatePath (start, slicePercent, donut) {
  const [startX, startY] = getCoordinatesForPercent(start)
  const [endX, endY] = getCoordinatesForPercent(start + slicePercent)
  const largeArcFlag = slicePercent > 0.5 ? 1 : 0

  return { startX, startY, endX, endY, largeArcFlag }
}

export default function Slice (props) {
  const { fill, start, percent, donut, ...rest } = props
  return <path
    {...rest}
    d={donut ? donutPath(start, percent) : path(start, percent)}
    fill={fill}
  />
}
