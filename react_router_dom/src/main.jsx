import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubRepos } from './components/Github/Github.jsx'


// const router = createBrowserRouter(
//   [
//     { 
//       path:"/",
//       element:<Layout/>, // changes will be done in <Outlet/> tag on screen
//       children:[
//         {
//             path:"", // "/" is already given
//             element:<Home/> // this <Home/> component will be shown on OutLet tag area
//         },
//         {
//             path:"about",
//             element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//       ]
//     }
//   ]
// )

// Or ------------------

const router = createBrowserRouter( // nested routing 
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}> 
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='user/:id' element={<User/>}></Route>

            
            <Route 
            loader={githubRepos} // directly function declare here or call from another file by importing 
              // this loader directly make api call when clicked and store in cache so that we screen shown data easily available
            path='github' 
            element={<Github/>}></Route>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
