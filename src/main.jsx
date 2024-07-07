import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Video from './components/home/Video.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },    
    {
        path: "/video",
        element: <Video />
    }    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
