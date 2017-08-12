import { h, Component, render } from 'preact'
import Pie, { Slice } from '../dist/preact-pie.built.js'

const slices = [
  { percent: 0.1, fill: 'Coral'  },
  { percent: 0.7, fill: 'CornflowerBlue'  },
  { percent: 0.2, fill: '#00ab6b'  },
]

function clickSlice () {
  console.log('A click', ...arguments)
}

class DataPie {
  render () {
    return <Pie>
      {this.props.data.map((x) => {
        return <Slice percent={x.percent} fill={x.fill} />
      })}
    </Pie>
  }
}

DataPie.defaultProps = { data: [] }

render(
  <div>
    <h1>Declarative component</h1>

    <Pie>
      <Slice percent={0.1} fill='Coral' />
      <Slice percent={0.7} fill='CornFlowerBlue'/>
      <Slice percent={0.2} fill='#00ab6b' onClick={clickSlice}/>
    </Pie>

    <hr />

    <h1>Data Driven higher level component</h1>

    <DataPie data={slices} />
  </div>
  , document.getElementById('container'))

