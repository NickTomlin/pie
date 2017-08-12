import { render, h, Component, cloneElement } from 'preact'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage)
  const y = Math.sin(2 * Math.PI * percentage)

  return [x, y]
}

export class Slice extends Component {
  generatePath (start, slicePercent) {
    const [startX, startY] = getCoordinatesForPercent(start)
    const [endX, endY] = getCoordinatesForPercent(start + slicePercent)
    const largeArcFlag = slicePercent > .5 ? 1 : 0

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `L 0 0`,
    ].join(' ')
  }

  render () {
    return <path
      {...this.props}
      d={this.generatePath(this.props.start, this.props.percent)}
      fill={this.props.fill}
    />
  }
}

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export default class Pie extends Component {
  renderSlices() {
    let cumulativePercent = 0

    return this.props.children.map((child) => {
      let name = child.nodeName.name
      if (name === 'Slice') {
        let { percent, fill } = child.attributes
        let start = cumulativePercent
        cumulativePercent = cumulativePercent + percent

        return cloneElement(child, {
          start,
          percent,
          fill,
        })
      } else { return child }
    })
  }

  render () {
    return (
      <svg
        style="transform: rotate(-90deg);"
        viewBox="-1 -1 2 2"
        >
        {this.renderSlices()}
      </svg>
    )
  }
}
