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
      <iframe
    width="100%"
    height="100%"
    src="https://rr3---sn-h557sn6e.c.drive.google.com/videoplayback?expire=1699540739&ei=08RMZYydAdnEp84Pr4OygAY&ip=2405:201:c023:8129:f143:d525:bd93:5fbb&id=02e8d1ce8e01b2f1&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=oE&mm=32&mn=sn-h557sn6e&ms=su&mv=m&mvi=3&pl=47&ttl=transient&susc=dr&driveid=1WS_bE1pcSaMEu6ZUtuJXuornyh-nVvTf&app=explorer&eaua=rbtpvI8GoUg&mime=video/mp4&vprv=1&prv=1&dur=4251.387&lmt=1699514071282584&mt=1699529571&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRgIhAOxUJ3XSveyRv9cdtOU2-sEsxDee7CvBQ4OKQBS_BdcHAiEAk_As5ZEWHQltVX2CW7rJqV8cCDH5mkXIzXnPsASMcfA=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRAIgOmwRKzy8KwLGVdI4HbhapeFlHjx_m6rnu5icVH31ig0CIBEwHJWTvV6ztcQTSoQOvvnBRYbVUTxpdFof_lLU0nMQ&cpn=g3EmKtSHcYfJJW1o&c=WEB_EMBEDDED_PLAYER&cver=1.20231105.00.01"
    frameborder="0"
    allowfullscreen
  ></iframe>
      </main>
  )
}

export default Home