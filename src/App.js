
import UnderMaintenance from './components/Underconstruction';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Error404 } from './routes/Routes';



export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  return (
    <>


      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<UnderMaintenance />} />
        
        <Route path="*" element={<Error404 />} />
      </Routes>

    </>
  );
}

export default App;
