import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Tours from './Components/Tours/Tours.jsx';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails.jsx';
import AllTours from './Components/AllTours/AllTours.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blog from './Components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: '/',
      element: <Home />

    },
    {
      path: '/tours/:continent',
      element: <Tours />
    },
    {
      path: '/tours',
      element: <AllTours />
    },
    {
      path: '/tour/:id',
      element: <PlaceDetails />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/blog',
      element: <Blog />
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
