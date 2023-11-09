import React from 'react'
import { Helmet } from 'react-helmet-async'
import HomeSlider from '../components/Sliders/HomeSlider'
import TeluguSlider from '../components/Sliders/TeluguSlide'
import OriginalsSlider from '../components/Sliders/OriginalsSlide'

const Home = () => {
  return (
    <main>
     <Helmet>
        <title>OTT app</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>
      

      <HomeSlider/>
      <TeluguSlider/>
      <OriginalsSlider />
     
      </main>
  )
}

export default Home