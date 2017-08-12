import { h, Component, render } from 'preact'
import {Pie, Slice} from '../dist/preact-pie.built.js'
import Example from './example'

const slices = [
  { percent: 0.1, fill: 'Coral'  },
  { percent: 0.7, fill: 'CornflowerBlue'  },
  { percent: 0.2, fill: '#00ab6b'  },
]

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
    <article>
      <h1>Declarative</h1>

      <Example syntax='jsx'>{`
        import {Pie, Slice} from '@nicktomlin/pie'

        <Pie>
          <Slice percent={0.1} fill='Coral' />
          <Slice percent={0.7} fill='CornFlowerBlue'/>
          <Slice percent={0.2} fill='#00ab6b' />
        </Pie>`}
      </Example>

      <Pie>
        <Slice percent={0.1} fill='Coral' />
        <Slice percent={0.7} fill='CornFlowerBlue'/>
        <Slice percent={0.2} fill='#00ab6b' />
      </Pie>
    </article>


    <article>
      <h1>Composable</h1>

      <Example syntax='jsx'>{`
        import {Pie, Slice} from '@nicktomlin/pie'

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

        <DataPie data={slices} />`}</Example>

      <DataPie data={slices} />
    </article>
  </div>
  , document.getElementById('container'))

