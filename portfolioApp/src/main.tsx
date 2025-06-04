import './index.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App';
import ProjectsPage from './projectsPage';
import Skills from './components/skills';
import Dashboard from './pages/Dashboard';
import MelodyOdyssey from './pages/Melody-odyssey';
import Tasselysium from './pages/Tasselysium';
import Puissance4 from './pages/Puissance4';
import Skyjo from './pages/Skyjo';
import Quadtree from './pages/Quadtree';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/projects',
    element:<ProjectsPage/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/skills',
    element:<Skills/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/1',
    element:<Dashboard/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/2',
    element:<Tasselysium/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/3',
    element:<Puissance4/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/4',
    element:<Skyjo/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/5',
    element:<Quadtree/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/6',
    element:<MelodyOdyssey/>,
    errorElement: <div>404 Not Found</div>
  }
]);
const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

