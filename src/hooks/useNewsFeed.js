import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const NEWS_FEED = gql`
  query NewsArticles($offset: Int, $limit: Int, $keywords: [String]) {
    fashionunitedNlNewsArticles(
      keywords: $keywords
      limit: $limit
      offset: $offset
    ) {
      title
      url
      imageUrl
      description
      id
      slug
    }
  }
`
const useNewsFeed = () => {
  const { loading, error, data, fetchMore } = useQuery(NEWS_FEED, {
    variables: { limit: 12 },
    partialRefetch: true,
    returnPartialData: true,
  })
  return { loading, error, data, fetchMore }
}

export default useNewsFeed
