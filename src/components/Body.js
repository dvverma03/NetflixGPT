import React from 'react'
import Login from './login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUsers, removeUser } from '../utils/userslice'

const Body = () => {
    const dispatch= useDispatch();
    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
