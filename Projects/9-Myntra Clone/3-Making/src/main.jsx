import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from "./components/Bag.jsx"
import Home from './routes/Home.jsx'
import Profile from "./components/Profile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/bag", element: <Bag />
      },
      {
        path: "/profile", element: <Profile />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
