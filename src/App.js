import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ReturnPolicy, Error404, Home, Aboutus, Contactus } from './routes/Routes';

import {Telugu,Hindi} from './routes/Routes';

import Signup from './routes/UserData/SignupForm';
import Login from './routes/UserData/Login'

import Player from './components/YoutubePlayer/Player';
import PlayerFullScreen from './components/YoutubePlayer/PlayerFullScreen'

import OCOPlayer from './components/YoutubePlayer/OCOPlayer';

import ShhhhQmovie from './routes/Originals/ShhhhQ'


export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);


  return (
    <>
      {/* Conditionally render Navbar */}
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/telugu-movies" element={<Telugu />} />
        <Route path="/originals-movies" element={<Hindi />} />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsnConditions />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        <Route path="/player/:videoId" element={<Player />} />
        <Route path="/fullscreenplayer/:videoId" element={<PlayerFullScreen />} />

        <Route path="/ocoplayer/:videoId" element={<OCOPlayer />} />

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/ShhhhQmovie" element={<ShhhhQmovie />} />
        


        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
