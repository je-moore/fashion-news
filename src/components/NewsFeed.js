import React from 'react'
import NewsCard from './NewsCard'
import { useNewsFeedStyles } from '../styles'

function NewsFeed({ data }) {
  const classes = useNewsFeedStyles()

  return (
    <div className={classes.cardContainer}>
      {data.fashionunitedNlNewsArticles.map(article => (
        <NewsCard article={article} key={article.id} />
      ))}
    </div>
  )
}

export default NewsFeed
