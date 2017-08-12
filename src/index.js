import { render, h, Component } from 'preact'

export default class Pizza extends Component {
  componentWillMount () {
    document.body.style.height = "400px"
    document.body.style.width = "400px"
  }

  // this is the poor person's technique introduced by
  // https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
  getCoordinatesForPercent (percentage) {
    const x = Math.cos(2 * Math.PI * percentage);
    const y = Math.sin(2 * Math.PI * percentage);

    return [x, y];
  }

  pathForSlice (cumulativePercent, percent) {
    const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent)
    const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent + percent)
    const largeArcFlag = percent > .5 ? 1 : 0

		return [
			`M ${startX} ${startY}`,
			`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
			`L 0 0`,
		].join(' ');
  }

  renderSlices(sliceData) {
    let cumulativePercent = 0
    return sliceData.map((slice) => {
      const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent)
      cumulativePercent = cumulativePercent + slice.percent
      const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent)
      const largeArcFlag = slice.percent > .5 ? 1 : 0

      const pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(' ');

      return <path
        d={pathData}
        fill={slice.fill}
      />
    })
  }

  render () {
    const slices = this.renderSlices([
      { percent: 0.20, fill: 'red' },
      { percent: 0.30, fill: 'blue' },
      { percent: 0.40, fill: 'green' },
    ])

    return (
      <svg
        style="background: yellowgreen; border-radius: 50%; transform: rotate(-90deg);"
        viewBox="-1 -1 2 2"
        >
        {slices}
      </svg>
    )
  }
}
