import React from 'react'
import { Dialog, DialogContent, Paper, Typography } from '@material-ui/core'
import { useFeaturedArticle } from '../hooks'
import { useHistory } from 'react-router-dom'
import { useModalStyles } from '../styles'
import ArticleImage from './ArticleImage'

function NewsModal({ articleId }) {
  const classes = useModalStyles()

  const history = useHistory()
  const closeModal = () => {
    history.push('/')
  }
  const { loading, error, data } = useFeaturedArticle(articleId)

  return (
    <Dialog fullScreen open={true} onClick={closeModal}>
      <DialogContent className={classes.articleModal}>
        {loading && <pre>loading</pre>}
        {error && <pre>error</pre>}
        {data && (
          <Paper className={classes.articleContainer} elevation={4}>
            <ArticleImage imageUrl={data.fashionunitedNlNewsArticle.imageUrl} />
            <Typography
              className={classes.modalTitle}
              color="textPrimary"
              variant="h4"
              gutterBottom
            >
              {data.fashionunitedNlNewsArticle.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {data.fashionunitedNlNewsArticle.description}
            </Typography>
          </Paper>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default NewsModal
