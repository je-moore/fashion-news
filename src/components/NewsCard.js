import React from 'react'
import { useNewsCardStyles, DEFAULT_IMAGE } from '../styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function NewsCard({ article }) {
  const classes = useNewsCardStyles()

  const history = useHistory()
  const openDialog = id => {
    history.push(`/${id}`)
  }

  return (
    <Card className={classes.card} onClick={() => openDialog(article.id)}>
      <CardContent>
        <img
          className={classes.cardImg}
          src={
            article.imageUrl
              ? `https://fashionunited.com${article.imageUrl}`
              : DEFAULT_IMAGE
          }
          alt=""
        />
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <Link to={`/${article.id}`}>{article.title}</Link>
        </Typography>
        <Typography
          className={classes.description}
          color="textSecondary"
          gutterBottom
        >
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewsCard
