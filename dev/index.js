import { h, Component, render } from 'preact'
import {Pizza} from '../dist/preact-pie.built.js'

render(<Pizza minHeight="100" minWidth="100" />, document.getElementById('container'))

