import { h, render } from 'preact'
import {Pie, Slice} from '../dist/pie.preact'

/** @jsx h */
render(
  <div>
    <article>
      <Pie>
        <Slice percent={0.1} fill='Coral' />
        <Slice percent={0.7} fill='CornFlowerBlue' />
        <Slice percent={0.2} fill='#00ab6b' />
      </Pie>
    </article>
  </div>
, document.getElementById('preact-container'))
