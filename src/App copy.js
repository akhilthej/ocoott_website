import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Blogs, Clients } from './routes/Routes';

import { Login } from './routes/Routes';
import Player from './components/Player';

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  // Check if the current route is '/player'
  const isPlayerRoute = location.pathname.startsWith('/player');

  return (
    <>
      {/* Conditionally render Navbar */}
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsnConditions />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/shippingdelivery" element={<ShippingandDelivery />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:videoId" element={<Player />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
