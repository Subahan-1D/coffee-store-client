import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './componentes/AddCoffee.jsx'
import UpdateCoffee from './componentes/UpdateCoffee.jsx'
import SignUp from './componentes/SignUp.jsx'
import SignIn from './componentes/SignIn.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Users from './componentes/Users.jsx'
import Main from './componentes/Main.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/',
    element:<Main></Main>

  },
  {
    path:'/addcoffee',
    element:<AddCoffee></AddCoffee>,
  },
  {
    path:'/updatecoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
