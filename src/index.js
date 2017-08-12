import { render, h, Component } from 'preact'

function getCoordinatesForPercent (percentage) {
  const x = Math.cos(2 * Math.PI * percentage);
  const y = Math.sin(2 * Math.PI * percentage);

  return [x, y];
}

export class Slice extends Component {
  generatePath (cumulativePercent, slicePercent) {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent)
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent + slicePercent)
    const largeArcFlag = slicePercent > .5 ? 1 : 0

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `L 0 0`,
    ].join(' ');
  }

  render () {
    return <path
      d={this.generatePath(this.props.cumulativePercent, this.props.percent)}
      fill={this.props.fill}
    />
  }
}

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export default class Pizza extends Component {
  renderSlices(sliceData) {
    let cumulativePercent = 0

		return sliceData.map(slice => {
      let elem = <Slice cumulativePercent={cumulativePercent} percent={slice.percent} fill={slice.fill}/>
      cumulativePercent = cumulativePercent + slice.percent
      return elem
		})
  }

  render () {
    const slices = this.props.data ? this.renderSlices(this.props.data) : null
    return (
      <svg
        style="transform: rotate(-90deg);"
        viewBox="-1 -1 2 2"
        >
        {slices}
      </svg>
    )
  }
}
