import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Browse } from './Pages/Browse';
import { Contributor } from './Pages/Contributor';
import Pricing from './Pages/Pricing';
import { Support } from './Pages/Support';
import { Blogs } from './Pages/Blogs';
import BlogDetail from './Components/BlogDetail';
import WebsiteLayout from './DashboardLayout/WebsiteLayout';
import ContributorDashboardLayout from './DashboardLayout/ContributorDashboardLayout';
import ContributorDashboard from './Pages/ContributorDashboard';
import UploadMedia from './Components/UploadMedia';
import ProtectedRoute from './Components/ProtectedRoute';



export default function App() {
  const [userType, setUserType] = useState('contributors');

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'browse',
          element: <Browse />
        },
        {
          path: 'contributor',
          element: <Contributor />
        },
        {
          path: 'pricing',
          element: <Pricing />
        },
        {
          path: 'support',
          element: <Support />
        },
        {
          path: 'blogs',
          element: <Blogs />,
          children: [
            {
              path: ':id',
              element: <BlogDetail />
            }
          ]
        },
      ]
    },
    {
      path: '/contributors',
      element: <ContributorDashboardLayout userType={userType} />, // Pass userType to layout
      children: [
        { path: '', element: <ContributorDashboard /> },
        { path: 'uploads', element: <UploadMedia /> }
      ]
    }
  ]);

  return (
    <div className='bg-[#0b0b0b] p-0 overflow-hidden'>
      <RouterProvider router={router} />
    </div>
  );
}
