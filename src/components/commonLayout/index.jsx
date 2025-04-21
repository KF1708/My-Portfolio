"use client";
import React from "react";
import NavBar from "../home/NavBar";
import { BiUpArrowAlt } from "react-icons/bi";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <div className="fixed bottom-5 right-10 z-50">
        <a href="#top">
          <button className="">
            <BiUpArrowAlt className="bg-emerald-600 p-1 w-10 h-10 rounded-md text-white" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CommonLayout;
