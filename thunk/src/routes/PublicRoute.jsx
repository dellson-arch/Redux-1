import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  let { isAuthenticated, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (isAuthenticated) return <Navigate to={"/main"} />; //agar hai toh main me bhej do nii toh register login page me
  return <Outlet />;
};

export default PublicRoute;
