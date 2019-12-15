import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

const DEFAULT_IMAGE =
  'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg'

function NewsCard({ article }) {
  const classes = makeStyles({
    card: {
      margin: '20px',
    },
    title: {
      fontSize: 14,
    },
    description: {
      fontSize: 12,
    },
    cardImg: {
      width: '100%',
      boxSizing: 'border-box',
    },
  })()

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
          {article.title}
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
