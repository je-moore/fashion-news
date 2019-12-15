import React from 'react'
import { useNewsFeed } from './hooks'
import NewsFeed from './components/NewsFeed'

const App = () => {
  const { loading, error, data, fetchMore } = useNewsFeed()

  return (
    <div className="App">
      <header>Fashion News</header>
      <main>
        {loading && <pre>loading</pre>}
        {error && <pre>error</pre>}
        {data.fashionunitedNlNewsArticles && <NewsFeed data={data} />}
      </main>
    </div>
  )
}

export default App
