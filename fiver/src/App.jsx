import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {
  Add,
  Gig,
  Gigs,
  Home,
  Login,
  Message,
  Messages,
  Mygigs,
  Orders,
  Register,
} from './pages';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ErrorBoundary, ErrorPage } from './errorPage';
import './app.scss';

//router for routing the endpoint url
//firing the url with specific url fires the page

function App() {
  const Layout = () => {
    return (
      <ErrorBoundary>
        <Navbar />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/mygigs',
          element: <Mygigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/*',
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
