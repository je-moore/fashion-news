import { makeStyles } from '@material-ui/core/styles'

export const useNewsFeedStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  },
})

export const useNewsCardStyles = makeStyles({
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
})

export const useLoadMoreButtonStyles = makeStyles({
  loadMore: {
    textAlign: 'center',
    marginBottom: '20px',
  },
})
