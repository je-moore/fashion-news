import React from 'react'
import { useNewsFeed } from './hooks'

const App = () => {
  const { loading, error, data, fetchMore } = useNewsFeed()

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
