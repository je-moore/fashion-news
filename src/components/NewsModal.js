import React from 'react'
import { useFeaturedArticle } from '../hooks'
import { Dialog } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function NewsModal({ articleId }) {
  const history = useHistory()
  const closeDialog = () => {
    history.push('/')
  }
  const { loading, error, data } = useFeaturedArticle(articleId)

  return (
    <Dialog fullScreen open={true} onClick={closeDialog}>
      {loading && <pre>loading</pre>}
      {error && <pre>error</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Dialog>
  )
}

export default NewsModal
