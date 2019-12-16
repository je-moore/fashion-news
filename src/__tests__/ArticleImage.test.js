import React from 'react'
import EnzymeToJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import ArticleImage from '../components/ArticleImage'

it('renders correctly', () => {
  const subject = mount(<ArticleImage />)
  expect(EnzymeToJson(subject)).toMatchSnapshot()
})
