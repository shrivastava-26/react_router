
import './App.css'
import About from './component/About';
import Dashboard  from './component/Dashboard';
import Home from './component/Home';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(
  [
     {
      path: '/',
      element: <Home/>,

     }, 

     {
      path: '/about',
      element: <About/>

     },

     {
      path: '/dashboard',
      element: <Dashboard/>
     }
  ]
)


function App() {

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
