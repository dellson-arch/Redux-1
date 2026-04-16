import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[8%] px-10 flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-8 ">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to="/cart"
        >
          Cart
        </NavLink>
      </div>
      <div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;