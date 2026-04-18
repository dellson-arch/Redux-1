import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "../features/authSlice";
const AppRoutes = () => {
    let dispatch = useDispatch()
    let token = localStorage.getItem('accessToken-->')

    useEffect(()=>{

        (async()=>{
            try {
                let res = await axios.get("https://dummyjson.com/auth/me",{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
                console.log("logged in User --> ", res)
                dispatch(addUser(res.data))
            } catch (error) {
                console.log("error in me api calling", error)
            }
        })()
    },[]) // abhi currently kya ho raha hoga ki jab tum login kar loge then wo /main pe chala jayega but hen tum reload karoge toh kuch time ke liye just for 1 or 2 sec ke liye / dikhega fir /main dikhega kyu ki useEffect async hota hai toh usko aane me thoda sa time lagta hai

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
