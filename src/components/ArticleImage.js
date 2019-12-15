import React from 'react'
import { useArticleImageStyles, DEFAULT_IMAGE } from '../styles'

function ArticleImage({ imageUrl }) {
  const classes = useArticleImageStyles()
  const articleImg = imageUrl
    ? classes.articleImg
    : classes.articleImg + ' ' + classes.defaultImg

  return (
    <img
      className={articleImg}
      src={imageUrl ? `https://fashionunited.com${imageUrl}` : DEFAULT_IMAGE}
      alt=""
    />
  )
}

export default ArticleImage
