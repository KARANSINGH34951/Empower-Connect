import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import store from '../src/utilis/strore.jsx';
import JobResourcePage from './pages/JobResourcePage.jsx'
import About from './pages/About.jsx'
import Volunter from './pages/Volunter.jsx'
import Donate from './components/Donate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/jobresource',
        element: <JobResourcePage />,
      },
      {
        path: '/aboutus',
        element: <About />,
      },
      {
        path: '/volunter',
        element: <Volunter />,
      },
      {
        path: '/donate',
        element: <Donate />,
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
  
)
