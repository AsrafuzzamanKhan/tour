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
      path: '/tour/:id',
      element: <PlaceDetails />
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
