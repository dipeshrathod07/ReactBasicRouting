import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Layout from './Layout'
import Contact from './component/Contact/contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'

// const router = createBrowserRouter([

//   {
//     path: '/',
//     element:<Layout/>,

//     children:[{path:"",
//       element:<Home/>
//     },

//     {
//       path: 'about',
//       element:<About/>
//     },
//     {
//       path: 'contact',
//       element:<Contact/>
//     },
//   ]}
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
