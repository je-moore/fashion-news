import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'

const NEWS_FEED = gql`
  query NewsArticles($offset: Int, $limit: Int, $keywords: [String]) {
    fashionunitedNlNewsArticles(
      keywords: $keywords
      limit: $limit
      offset: $offset
    ) {
      title
      url
      imageUrl
      description
      id
    }
  }
`

const App = () => {
  const { loading, error, data, fetchMore } = useQuery(NEWS_FEED, {
    partialRefetch: true,
    returnPartialData: true,
  })

  return (
    <div className="App">
      <header>Fashion News</header>
      <main>
        {loading && <pre>loading</pre>}
        {error && <pre>error</pre>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </main>
    </div>
  )
}

export default App
