import React from 'react'
import { render } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import { shallow } from 'enzyme'
import { Typography } from '@material-ui/core'
import NewsHeader from '../components/NewsHeader'

test('renders header text', () => {
  const { getByText } = render(<NewsHeader />)
  const headerElement = getByText(/Fashion News/i)
  expect(headerElement).toBeInTheDocument()
})
