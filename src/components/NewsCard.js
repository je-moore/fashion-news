import React from 'react'

const DEFAULT_IMAGE =
  'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg'

function NewsCard({ article }) {
  return (
    <div>
      <img
        src={
          article.imageUrl
            ? `https://fashionunited.com${article.imageUrl}`
            : DEFAULT_IMAGE
        }
        alt=""
      />
      <h5>{article.title}</h5>
    </div>
  )
}

export default NewsCard
