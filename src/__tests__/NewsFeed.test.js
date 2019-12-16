import React from 'react'
import EnzymeToJson from 'enzyme-to-json'
import { mount } from 'enzyme'
import NewsFeed from '../components/NewsFeed'
import { useHistory } from 'react-router-dom'

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    useParams: jest.fn(() => {
      return {
        modalId: 44366,
      }
    }),
    useHistory: jest.fn(() => {
      return {
        length: 50,
        action: 'PUSH',
        location: {
          pathname: '/',
          search: '',
          hash: '',
          key: 'ud1unh',
        },
      }
    }),
    Link: jest.fn(() => null),
  }
})

const data = {
  fashionunitedNlNewsArticles: [
    {
      title:
        'Interview: Martijn Vlaming van OGER over zijn rol als Personal Advisor bij Italiaans Luxury Maatwerk.',
      url:
        'https://fashionunited.nl/nieuws/mode/interview-martijn-vlaming-van-oger-over-zijn-rol-als-personal-advisor-bij-italiaans-luxury-maatwerk/2019121344367',
      imageUrl:
        '/DlQNIXLzw12YzrwK9k3UutFViomv5EVKEyGRmKDAsTw/gravity:sm/quality:70/aHR0cHM6Ly9zdGF0aWMuZmFzaGlvbnVuaXRlZC5jb20vMjAxOTEyLzRzcXVhcmUtbmluZTEuanBn',
      description:
        'Een carrière in de modebranche is een belangrijk onderwerp op FashionUnited. Met deze interviewserie',
      id: 44367,
      __typename: 'LocalNewsArticle',
    },
    {
      title:
        'Wolford maakt nieuw plan voor herpositionering merk na omzetdaling en operationeel verlies',
      url:
        'https://fashionunited.nl/nieuws/business/wolford-maakt-nieuw-plan-voor-herpositionering-merk-na-omzetdaling-en-operationeel-verlies/2019121344366',
      imageUrl: null,
      description:
        'Wolford AG zag de omzet in het het eerste halfjaar met 3 procent dalen, zo blijkt uit het halfjaar verslag. Het operationele verlies komt neer op 9,4 miljoen ',
      id: 44366,
      __typename: 'LocalNewsArticle',
    },
  ],
}

const fetchMore = () => null

it('renders correctly', () => {
  const subject = mount(<NewsFeed data={data} fetchMore={fetchMore} />)
  expect(EnzymeToJson(subject)).toMatchSnapshot()
})
