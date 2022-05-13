import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'

const Home = () => {
  return (
    <>
        <Main />

        {/* <Row title='Up Coming' fetchURL={requests.requestUpcoming} /> */}
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
        {/* <Row title='Trending' fetchURL={requests.requestTrending} /> */}
        <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
        {/* <Row title='Similar' fetchURL={requests.requestSimilar} />
        */}
        

        

    </>
  )
}

export default Home