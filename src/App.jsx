import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';


const router = createBrowserRouter(
  [
  {
    path:"/",
    element:
    <div>
       <Navbar />
       <Home />
    </div>
  },
  {
    path:"/pastes",
    element:
    <div>
       <Navbar />
       <Paste />
    </div>
  },
  {
    path:"/pstes/:id",
    element:
    <div>
       <Navbar />
       <ViewPaste />
      
    </div>
  }
]
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App