import React from 'react'
import NewsFeed from './components/NewsFeed'
import NewsModal from './components/NewsModal'
import NewsHeader from './components/NewsHeader'
import { useNewsFeed } from './hooks'
import { useParams } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { fontTheme } from './styles'

const App = () => {
  const { loading, error, data, fetchMore } = useNewsFeed()
  const params = useParams()

  return (
    <ThemeProvider theme={fontTheme}>
      <div className="App">
        <header>
          <NewsHeader />
        </header>
        <main>
          {loading && <pre>loading</pre>}
          {error && <pre>error</pre>}
          {data.fashionunitedNlNewsArticles && (
            <NewsFeed data={data} fetchMore={fetchMore} />
          )}
          {params.modalId !== undefined && (
            <NewsModal articleId={params.modalId} />
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
