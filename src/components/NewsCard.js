import React from 'react'
import { useNewsCardStyles } from '../styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE =
  'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg'

function NewsCard({ article }) {
  const classes = useNewsCardStyles()

  return (
    <Card className={classes.card}>
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
