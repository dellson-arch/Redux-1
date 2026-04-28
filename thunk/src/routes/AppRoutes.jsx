import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getCurrentUser } from "../features/actions/authAction";
const AppRoutes = () => {
    const dispatch = useDispatch()
  
    useEffect(()=>{
       dispatch(getCurrentUser())
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
