import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { Home } from './Pages/Home';
import Footer from './Components/Footer';
import './App.css'

import { Navbar } from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ChatIcon from './Components/ChatIcon';
import Sidebar from './Components/Sidebar';
import AdminDashboard from './Pages/AdminDashboard';
import UserDashboard from './Pages/UserDashboard';
import ContributorDashboard from './Pages/ContributorDashboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [userType, setUserType] = useState('admin'); 

  return (
    <div className='bg-[#0b0b0b] p-0 overflow-hidden'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={userType === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
          <Route path='/user' element={userType === 'user' ? <UserDashboard /> : <Navigate to="/" />} />
          <Route path='/contributor' element={userType === 'contributor' ? <ContributorDashboard /> : <Navigate to="/" />} />
        </Routes>
        <ChatIcon />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
