import { makeStyles } from '@material-ui/core/styles'

export const DEFAULT_IMAGE =
  'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg'

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

export const useArticleImageStyles = makeStyles({
  articleImg: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
  },
  defaultImg: {
    padding: '4.3% 0',
  },
})

export const useLoadMoreButtonStyles = makeStyles({
  loadMore: {
    textAlign: 'center',
  },
})

export const useModalStyles = makeStyles({
  articleModal: {
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
  modalImg: {
    width: '100%',
    boxSizing: 'border-box',
    margin: '0 0 16px',
    border: '1px solid #eee',
  },
  modalTitle: {
    fontSize: '32px',
    lineWeight: '1.1',
  },
})
