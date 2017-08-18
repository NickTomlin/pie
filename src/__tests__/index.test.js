import React from 'react'
import {Pie, Slice} from '../index'
import renderer from 'react-test-renderer'

test('Renders an svg pie chart', () => {
  const component = renderer.create(
    <Pie>
      <Slice percent={0.1} fill='Coral' />
      <Slice percent={0.7} fill='CornFlowerBlue' />
      <Slice percent={0.2} fill='#00ab6b' />
    </Pie>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
