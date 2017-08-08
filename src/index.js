import { render, h, Component } from 'preact'

export class Pizza {
  constructor () {
    this.total = 185
    this.primary = 'yellowgreen'
  }

  componentWillMount () {
    document.body.style.height = "400px"
    document.body.style.width = "400px"
  }

  calc (percentage) {
    // what percentage of whatever our max radius
    // x is 40% of 185
    // 185 / 100 * 40
    // ? = 40 % of 185
    // 185 / 100 * 40

    return [50, 50, Math.ceil(this.total / 100 * percentage)]
  }

  render () {
    // our radius is 3
    // the full circle is 2 * 3.14 * r (18.84)
    // so to get a full circle we could do a dasharray of 18.85 or 19
    let [cx, cy, dash] = this.calc(30)
    let r = 30

    return (
      <svg
        style="background: yellowgreen; border-radius: 50%; transform: rotate(-90deg);"
        viewBox="0 0 100 100"
        >
        <circle
          r={r}
          cx={cx}
          cy={cy}
          fill="yellowgreen"
          stroke="#666"
          stroke-width={r * 2}
          stroke-dasharray={`${dash} ${Math.ceil(this.total)}`}
          >
        </circle>
  		</svg>
    )
  }
}
