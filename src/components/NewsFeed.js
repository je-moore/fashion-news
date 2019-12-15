import React from 'react'
import NewsCard from './NewsCard'

function NewsFeed({ data }) {
  return (
    <div>
      {data.fashionunitedNlNewsArticles.map(article => (
        <NewsCard article={article} key={article.id} />
      ))}
    </div>
  )
}

export default NewsFeed
