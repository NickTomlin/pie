import React from 'react' // eslint-disable-line
import { render } from 'react-dom'
import {Pie, Slice} from '../dist/pie'
import Snippet from './snippet'

const slices = [
  { percent: 0.1, fill: 'Coral' },
  { percent: 0.7, fill: 'CornflowerBlue' },
  { percent: 0.2, fill: '#00ab6b' }
]

class DataPie extends React.Component {
  render () {
    return <Pie>
      {this.props.data.map((x) => {
        return <Slice key={x.fill} percent={x.percent} fill={x.fill} />
      })}
    </Pie>
  }
}
DataPie.defaultProps = { data: [] }

render(
  <div>
    <article>
      <h1>Declarative</h1>

      <Snippet syntax='jsx'>{`
        import {Pie, Slice} from '@nicktomlin/pie'

        <Pie>
          <Slice percent={0.1} fill='Coral' />
          <Slice percent={0.7} fill='CornFlowerBlue'/>
          <Slice percent={0.2} fill='#00ab6b' />
        </Pie>
      `}</Snippet>

      <Pie>
        <Slice percent={0.1} fill='Coral' />
        <Slice percent={0.7} fill='CornFlowerBlue' />
        <Slice percent={0.2} fill='#00ab6b' />
      </Pie>

      <Snippet syntax='jsx'>{`
          <Pie donut>
            <Slice percent={0.1} fill='Coral' />
            <Slice percent={0.7} fill='CornFlowerBlue' />
            <Slice percent={0.2} fill='#00ab6b' />
          </Pie>
      `}</Snippet>
      <Pie donut>
        <Slice percent={0.1} fill='Coral' />
        <Slice percent={0.7} fill='CornFlowerBlue' />
        <Slice percent={0.2} fill='#00ab6b' />
      </Pie>
    </article>

    <article>
      <h1>Composable</h1>

      <Snippet syntax='jsx'>{`
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

        <DataPie data={slices} />`}</Snippet>

      <DataPie data={slices} />
    </article>

    <h1>Compatible with Preact</h1>
    {/* Why is the preact snippet in the react file you ask?
         Because getting compat to work for both without weird build hoops was too much
         someday...
    */}
    <article>
      <Snippet syntax='jsx'>{`
        import {Pie, Slice} from '@nicktomlin/pie/dist/pie.preact'

        <Pie>
          <Slice percent={0.1} fill='Coral' />
          <Slice percent={0.7} fill='CornFlowerBlue' />
          <Slice percent={0.2} fill='#00ab6b' />
        </Pie>
       `}</Snippet>
    </article>
  </div>
  , document.getElementById('container'))
