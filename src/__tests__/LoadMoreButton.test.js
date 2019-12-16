import React from 'react'
import EnzymeToJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import LoadMoreButton from '../components/LoadMoreButton'

it('renders correctly', () => {
  const subject = mount(<LoadMoreButton />)
  expect(EnzymeToJson(subject)).toMatchSnapshot()
})
