import { createBrowserRouter } from "react-router-dom"

import Login from '../pages/auth/Login'
import Home from '../pages/home/Home'
import About from '../pages/home/About'

export const Router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
])