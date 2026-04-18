import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = () => {
  
  let {isAuthenticated,isLoading} = useSelector((store)=>store.auth)
 
   if(isLoading) return <h1>Loading...</h1>

   if(!isAuthenticated) return <Navigate to={'/'}/> //matlab agar user login nahi hua toh woh directly wo login register page me pohoch jayega
   return <Outlet/>
}

export default ProtectedRoute
