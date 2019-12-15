import React from 'react'
import NewsCard from './NewsCard'
import LoadMoreButton from './LoadMoreButton'
import { useNewsFeedStyles } from '../styles'

function NewsFeed({ data, fetchMore }) {
  const classes = useNewsFeedStyles()

  return (
    <>
      <div className={classes.cardContainer}>
        {data.fashionunitedNlNewsArticles.map(article => (
          <NewsCard article={article} key={article.id} />
        ))}
      </div>
      <LoadMoreButton
        offset={data.fashionunitedNlNewsArticles.length}
        fetchMore={fetchMore}
      />
    </>
  )
}

export default NewsFeed
