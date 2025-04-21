"use client";

import React from "react";

import { FloatingDockDemo } from "../my-component/FloatingDock";
const NavBar = () => {
  return (
    <div className="flex items-center justify-around sticky top-0 z-50 shadow-md bg-black ">
      <FloatingDockDemo />
    </div>
  );
};

export default NavBar;
