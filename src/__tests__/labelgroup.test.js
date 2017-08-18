import React from 'react'
import {Pie, Slice, LabelGroup, Label} from '../index'
import renderer from 'react-test-renderer'

test('Render Labels within a pie chart', () => {
  const component = renderer.create(
    <Pie>
      <LabelGroup>
        <Label fill='CornFlowerBlue'>Blueberry</Label>
        <Label fill='lightCoral'>Cherry</Label>
      </LabelGroup>

      <Slice percent={0.4} fill='CornFlowerBlue' />
      <Slice percent={0.6} fill='lightCoral' />
    </Pie>
  )
  expect(component.toJSON()).toMatchSnapshot()
})
