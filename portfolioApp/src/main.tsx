import './index.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App';
import ProjectsPage from './projectsPage';
import AboutPage from './aboutPage'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/projects',
    element:<ProjectsPage></ProjectsPage>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/about',
    element:<AboutPage/>,
    errorElement: <div>404 Not Found</div>
  }
]);
const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

