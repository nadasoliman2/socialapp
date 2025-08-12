import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Layout from './Commponet/Layout';
import { Children } from 'react';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/register';
import { Singlepost } from './pages/singlepost';
import Profile from './pages/Profile';
function App() {



  const x = createBrowserRouter([
      
      {
        path: '/',
        element: <Layout />,
        errorElement: <Notfound/>, 
        children: [
          
  
          {path : '/', element: <Login></Login>},
                    {path :'/home', element: <Home />},
                       { path: '/posts/:id', element:<Singlepost></Singlepost>},
                            {path :'/register', element: <Register />},
                           {path :'/profile/:id', element: <Profile></Profile>},



     
  
  
        ]
      }
    ]);
  return (
    <>
   <RouterProvider router={x}></RouterProvider>
  
    </>
  )
}

export default App
