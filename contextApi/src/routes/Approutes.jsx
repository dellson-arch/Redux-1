import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layout/AuthLayout";
import LoginUser from "../components/LoginUser";
import RegisterUser from "../components/RegisterUser";
const Approutes = () => {
    const router = createBrowserRouter([
        {
           path:"/",
           element : <AuthLayout/>,
           children : [
            {
              path : "/",
              element : <LoginUser/>
            },
             {
              path : "/register",
              element : <RegisterUser/>
            },
        ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default Approutes
