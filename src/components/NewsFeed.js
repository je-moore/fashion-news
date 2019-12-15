import React from 'react'
import NewsCard from './NewsCard'
import { makeStyles } from '@material-ui/core/styles'

function NewsFeed({ data }) {
  const classes = makeStyles({
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    },
  })()

  return (
    <div className={classes.cardContainer}>
      {data.fashionunitedNlNewsArticles.map(article => (
        <NewsCard article={article} key={article.id} />
      ))}
    </div>
  )
}

export default NewsFeed
