import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="px-10 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;