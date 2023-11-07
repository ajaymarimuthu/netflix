import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
 
import App from './App'
import Header from './components/Header'
import Browse from './components/Browse'


const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/header",
    element:<Header name="asdkn"/>
  },
  {
    path:"/browse",
    element:<Browse name="Browse"/>
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
