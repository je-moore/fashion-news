import React from 'react'
import { useNewsCardStyles } from '../styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import ArticleImage from './ArticleImage'

function NewsCard({ article }) {
  const classes = useNewsCardStyles()

  const history = useHistory()
  const openDialog = (slug, id) => {
    history.push(`/${slug}/${id}`)
  }

  return (
    <Card
      className={classes.card}
      onClick={() => openDialog(article.slug, article.id)}
    >
      <CardContent>
        <ArticleImage imageUrl={article.imageUrl} />
        <Typography
          className={classes.title}
          color="textPrimary"
          variant="h4"
          gutterBottom
        >
          {article.title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewsCard
