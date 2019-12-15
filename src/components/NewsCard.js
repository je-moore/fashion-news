import React from 'react'
import { useNewsCardStyles } from '../styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import ArticleImage from './ArticleImage'

function NewsCard({ article }) {
  const classes = useNewsCardStyles()

  const history = useHistory()
  const openDialog = id => {
    history.push(`/${id}`)
  }

  return (
    <Card className={classes.card} onClick={() => openDialog(article.id)}>
      <CardContent>
        <ArticleImage imageUrl={article.imageUrl} />
        <Typography
          className={classes.title}
          color="textPrimary"
          variant="h4"
          gutterBottom
        >
          <Link to={`/${article.id}`}>{article.title}</Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewsCard
