import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './Pages/Home';
import Footer from './Components/Footer';
import './App.css'

import { Navbar } from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ChatIcon from './Components/ChatIcon';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {


  return (
    <div className='bg-[#0b0b0b] p-0 overflow-hidden'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <ChatIcon />
        <Footer />
      </Router>
    </div>
  )
}

export default App
