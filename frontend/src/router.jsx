import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
        path: 'contributors',
        element: <ContributorDashboardLayout />,
        children: [
            {
                path: '',
                element: <ContributorDashboard />
            },
            {
                path: 'uploads',
                element: <UploadMedia />
            },
        ]
    }
]);

export default router;
