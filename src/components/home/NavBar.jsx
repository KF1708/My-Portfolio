"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo/logo.png";
import Link from "next/link";
import { FloatingDockDemo } from "../my-component/FloatingDock";
const NavBar = () => {
  return (
    <div className="flex items-center justify-around sticky top-0 z-50 shadow-md bg-black ">
      {/* <Link className="" href={"/aboutMe"}>
        {" "}
        <h3 className=" font-semibold text-lg lg:text-xl font-serif">
          About Me
        </h3>
      </Link>
      <Link className="" href={"/"}>
        {" "}
        <Image src={logo} className="h-14 w-24" />
      </Link>

      <Link className="" href={"/contact"}>
        {" "}
        <h3 className=" font-semibold text-lg lg:text-xl font-serif">
          Contact{" "}
        </h3>
      </Link> */}
      <FloatingDockDemo />
    </div>
  );
};

export default NavBar;
