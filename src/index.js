import { render, h, Component } from 'preact'

// this is the poor person's technique introduced by
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
export default class Pizza extends Component {
  getCoordinatesForPercent (percentage) {
    const x = Math.cos(2 * Math.PI * percentage);
    const y = Math.sin(2 * Math.PI * percentage);

    return [x, y];
  }

  generateSlicePath (cumulativePercent, slicePercent) {
    const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent)
    const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent + slicePercent)
    const largeArcFlag = slicePercent > .5 ? 1 : 0

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `L 0 0`,
    ].join(' ');
  }

  renderSlices(sliceData) {
    let cumulativePercent = 0

		return sliceData.map(slice => {
      let elem = <path
        d={this.generateSlicePath(cumulativePercent, slice.percent)}
        fill={slice.fill}
      />
      cumulativePercent = cumulativePercent + slice.percent
      return elem
		})
  }

  render () {
    const slices = this.renderSlices([
      { percent: 0.1, fill: 'Coral'  },
      { percent: 0.7, fill: 'CornflowerBlue'  },
      { percent: 0.2, fill: '#00ab6b'  },
    ])

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
