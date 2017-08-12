pie
---

A tiny pie chart plugin for (P)React.

:warning: this is published as an alpha not considered ready for wide use. I'm just playing around :warning:

```shell
npm i @nicktomlin/pie
```

```jsx
import {Pie, Slice} from '@nicktomlin/pie'

<Pie>
  <Slice percent={0.1} fill='Coral' />
  <Slice percent={0.7} fill='CornFlowerBlue' />
  <Slice percent={0.2} fill='#00ab6b' />
</Pie>
```

Prior Art
---

- [hard things stolen from a simple pie chart in SVG](https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936)
- Structure stolen from [Ryan Florence's "Compound Components" talk](https://www.youtube.com/watch?v=hEGg-3pIHlE)
- You should probably just use [charts.js](http://www.chartjs.org/) or [d3](https://d3js.org/)
