import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './Pages/Home';
import Footer from './Components/Footer';
import './App.css'

// import { Navbar } from './Components/Navbar';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  

  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
