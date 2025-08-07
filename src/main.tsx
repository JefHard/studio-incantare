import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


import { AppLayout } from './components/AppLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Time from './pages/Time';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contato", element: <Contato /> },
      { path: "/time", element: <Time /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)