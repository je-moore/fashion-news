import React from 'react'
import { useNewsFeed } from './hooks'
import { useParams } from 'react-router-dom'
import NewsFeed from './components/NewsFeed'
import NewsModal from './components/NewsModal'

const App = () => {
  const { loading, error, data, fetchMore } = useNewsFeed()
  const params = useParams()

  return (
    <div className="App">
      <header>Fashion News</header>
      <main>
        {loading && <pre>loading</pre>}
        {error && <pre>error</pre>}
        {data.fashionunitedNlNewsArticles && (
          <NewsFeed data={data} fetchMore={fetchMore} />
        )}
        {params.dialogId !== undefined && (
          <NewsModal articleId={params.dialogId} />
        )}
      </main>
    </div>
  )
}

export default App
