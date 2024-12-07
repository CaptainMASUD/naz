import React,{StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contactus from './Components/ContactUS/Contactus';
import AdminPanel from './Components/Admin/AdminPanel';


const router = createBrowserRouter([
  {
    path :'/',
    element: <Layout/>,
    children : [
      {
        path:'',
        element : <Home/>
      },
      {
        path:'about',
        element : <About/>
      },
      {
        path:'services',
        element : <Services/>
      },
      {
        path:'contact',
        element : <Contactus/>
      },
      {
        path:'admin',
        element : <AdminPanel/>
      },
      
    
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
</StrictMode>
)
