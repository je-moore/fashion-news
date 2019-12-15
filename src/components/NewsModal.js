import React from 'react'
import { useFeaturedArticle } from '../hooks'
import { Dialog } from '@material-ui/core'

function NewsModal({ articleId }) {
  const { loading, error, data } = useFeaturedArticle(articleId)

  return (
    <Dialog fullScreen open={true}>
      {loading && <pre>loading</pre>}
      {error && <pre>error</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Dialog>
  )
}

export default NewsModal
