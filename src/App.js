import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import {
  Navbar,
  Footer,
  PrivacyPolicy,
  TermsnConditions,
  Disclaimer,
  ReturnPolicy,
  Error404,
  Home,
  Aboutus,
  Contactus,
} from './routes/Routes';

import { Telugu, Hindi } from './routes/Routes';

import Signup from './routes/UserData/SignupForm';
import Login from './routes/UserData/Login';

import Player from './components/Players/Player';
import PlayerFullScreen from './components/Players/PlayerFullScreen';
import OCOPlayer from './components/Players/OCOPlayer';
import ShhhhQmovie from './routes/Originals/ShhhhQ';

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  // Mock authentication status, replace this with actual authentication logic
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    // Redirect to /login if trying to access protected routes without login
    const protectedRoutes = ['/telugu-movies', '/originals-movies' , '/player/:videoId'];
    if (!isAuthenticated && protectedRoutes.includes(location.pathname)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, location.pathname]);

  return (
    <>
      {/* Conditionally render Navbar */}
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
   

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

        <Route
          path="/telugu-movies"
          element={isAuthenticated ? <Telugu /> : <Link to="/login" />} // Use Link
        />

        <Route
          path="/originals-movies"
          element={isAuthenticated ? <Hindi /> : <Link to="/login" />} // Use Link
        />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
