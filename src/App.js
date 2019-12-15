import React from 'react'
import { useNewsFeed } from './hooks'
import NewsCard from './components/NewsCard'

const App = () => {
  const { loading, error, data, fetchMore } = useNewsFeed()

  return (
    <div className="App">
      <header>Fashion News</header>
      <main>
        {loading && <pre>loading</pre>}
        {error && <pre>error</pre>}
        {data.fashionunitedNlNewsArticles &&
          data.fashionunitedNlNewsArticles.map(article => (
            <NewsCard article={article} key={article.id} />
          ))}
      </main>
    </div>
  )
}

export default App
