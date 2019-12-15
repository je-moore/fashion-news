import React from 'react'
import { render } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import { shallow } from 'enzyme'
import { Typography } from '@material-ui/core'
import App from '../App'

describe('<App />', () => {
  jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ dialogId: undefined }),
  }))

  it('renders', () => {
    const header = shallow(<Typography />)
    expect(header).toBeTruthy()
  })
})
