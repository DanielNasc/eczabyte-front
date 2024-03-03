import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/404Voyage';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/settings', element: <Settings /> },
  { path: '/login', element: <div>Login</div> },
  { path: '/signup', element: <div>Sign Up</div> },
  { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
