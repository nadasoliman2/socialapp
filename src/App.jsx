import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './Commponet/Layout';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/register';
import { Singlepost } from './pages/singlepost';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        errorElement: <Notfound/>, 
        children: [
          { path: '/', element: <Login /> },
          { path: '/home', element: <Home /> },
          { path: '/posts/:id', element: <Singlepost/> },
          { path: '/register', element: <Register /> },
          { path: '/profile/:id', element: <Profile /> },
        ]
      }
    ],
    { basename: '/socialapp' } // هنا ضبط الـ basename
  );

  return <RouterProvider router={router} />;
}

export default App;
