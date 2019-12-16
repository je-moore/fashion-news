import React from 'react'
import EnzymeToJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import NewsHeader from '../components/NewsHeader'

it('renders correctly', () => {
  const subject = mount(<NewsHeader />)
  expect(EnzymeToJson(subject)).toMatchSnapshot()
})
