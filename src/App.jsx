import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contactUs",
    element: <Contact />,
  },
  {
    path:"/portfolio",
    element:<Portfolio/>
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App