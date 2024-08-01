import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import store from '../src/utilis/strore.jsx';

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
