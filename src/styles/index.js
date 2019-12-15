import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

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
    padding: '2px',
  },
})

export const useArticleImageStyles = makeStyles({
  articleImg: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    margin: '0 0 0.3%',
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
    backgroundColor: '#f6f7fc',
  },
  articleContainer: {
    backgroundColor: '#ffffff',
    width: '80%',
    maxWidth: '600px',
    margin: '20px auto',
    cursor: 'pointer',
    padding: '36px',
  },
})

export const fontTheme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '72px',
        lineHeight: '1.6',
        fontWeight: '700',
      },
      h2: {
        fontSize: '24px',
        lineHeight: '1.2',
        fontWeight: '500',
      },
      h4: {
        fontSize: '16px',
        lineHeight: '1.2',
        fontWeight: '700',
      },
    },
  },
})
