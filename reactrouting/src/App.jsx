import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import DashBoard from './components/DashBoard.jsx';
import NavBar from './components/NavBar.jsx';

// Layout component: includes NavBar + page content
const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        {/* This renders the component of the current route */}
        <Outlet />
      </div>
    </div>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/dashboard", element: <DashBoard /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
