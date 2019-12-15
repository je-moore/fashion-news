import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'https://fashionunited.info/graphql/',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" children={<App />} />
        <Route path="/:dialogId" children={<App />} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
