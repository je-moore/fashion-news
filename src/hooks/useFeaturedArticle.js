import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FEATURED_ARTICLE = gql`
  query NewsArticle($id: Int) {
    fashionunitedNlNewsArticle(id: $id) {
      title
      imageUrl
      description
      id
      url
    }
  }
`
const useFeaturedArticle = articleId => {
  const { loading, error, data } = useQuery(FEATURED_ARTICLE, {
    variables: { id: Number(articleId) },
    fetchPolicy: 'cache-and-network',
  })
  return { loading, error, data }
}

export default useFeaturedArticle
