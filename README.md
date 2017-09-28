pie [![npm version](https://badge.fury.io/js/%40nicktomlin%2Fpie.svg)](https://badge.fury.io/js/%40nicktomlin%2Fpie) [![Build Status](https://travis-ci.org/NickTomlin/pie.svg?branch=master)](https://travis-ci.org/NickTomlin/pie)
---

Create deliciously declarative pie charts with (P)React.

> This is currently in alpha; feel free to use it but don't get your hopes up

```shell
npm i @nicktomlin/pie
```

```jsx
import {Pie, Slice} from '@nicktomlin/pie' // OR @nicktomlin/pie/dist/pie.preact

<Pie>
  <Slice percent={0.1} fill='Coral' />
  <Slice percent={0.7} fill='CornFlowerBlue' />
  <Slice percent={0.2} fill='#00ab6b' />
</Pie>
```

Features
---

- [x] Actually renders a pie chart
- [x] Preact compatible (vanilla without needing `preact-compat`)
- [x] Doughnut chart
- [ ] Top/Bottom Labels
- [ ] Hover effects (technically one could just pass props through to `Slice>` and be done with it but we could also make this easier)

Prior Art
---

- [hard things stolen from a simple pie chart in SVG](https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936)
- Structure stolen from [Ryan Florence's "Compound Components" talk](https://www.youtube.com/watch?v=hEGg-3pIHlE)
- You should probably just use [charts.js](http://www.chartjs.org/) or [d3](https://d3js.org/)

Contributing
---

1. Fork and clone this repo
2. Make your changes
3. Please add a test if possible
4. Ensure that `npm test` passes
5. Open up a pull request
