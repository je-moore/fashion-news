import React from 'react'
import { Button } from '@material-ui/core'
import { useLoadMoreButtonStyles } from '../styles'

function LoadMoreButton({ offset, fetchMore }) {
  const classes = useLoadMoreButtonStyles()

  return (
    <div className={classes.loadMore}>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          fetchMore({
            variables: {
              offset: offset,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev
              return Object.assign({}, prev, {
                fashionunitedNlNewsArticles: [
                  ...prev.fashionunitedNlNewsArticles,
                  ...fetchMoreResult.fashionunitedNlNewsArticles,
                ],
              })
            },
          })
        }
      >
        Load More
      </Button>
    </div>
  )
}

export default LoadMoreButton
