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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import './app.scss';

//router for routing the endpoint url
//firing the url with specific url fires the page
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add',
    element: <Add />,
  },
  {
    path: '/gig',
    element: <Gig />,
  },
  {
    path: '/gigs',
    element: <Gigs />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/message',
    element: <Message />,
  },
  {
    path: '/messages',
    element: <Messages />,
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
    path: '/register',
    element: <Register />,
  },
]);
function App() {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </React.Fragment>
    </ErrorBoundary>
  );
}

export default App;
