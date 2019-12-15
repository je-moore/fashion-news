import React from 'react'
import { useNewsCardStyles } from '../styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import ArticleImage from './ArticleImage'

const slugify = text =>
  text
    .toString()
    .slice(28)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

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
