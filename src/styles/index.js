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

export const useModalStyles = makeStyles({
  articleDialog: {
    backgroundColor: '#eeeeee',
  },
  articleContainer: {
    backgroundColor: '#ffffff',
    width: '80%',
    maxWidth: '600px',
    margin: '20px auto',
    cursor: 'pointer',
    padding: '36px',
  },
  dialogImg: {
    width: '100%',
    boxSizing: 'border-box',
    margin: '0 0 16px',
    border: '1px solid #eee',
  },
  dialogTitle: {
    fontSize: '32px',
    lineWeight: '1.1',
  },
  dialogDescription: {
    fontSize: '24px',
  },
})
