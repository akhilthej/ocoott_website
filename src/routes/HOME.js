import React from 'react'
import { Helmet } from 'react-helmet-async'
import HomeSlider from '../components/Sliders/HomeSlider'
import PopularSlider from '../components/Sliders/PopularSlider'
import Telugu from '../components/Sliders/TeluguSlide'
import Hindi from '../components/Sliders/HindiSlide'

const HOME = () => {
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
      <PopularSlider />
      <Telugu/>
      <Hindi />
      </main>
  )
}

export default HOME