"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import project from "../../../public/images/my-project/myproject.jpeg";
import { ColourfulText } from "../ui/colourful-text";

const MyProject = () => {
  return (
    <div className="bg-neutral-950 text-center flex-wrap flex justify-evenly py-3">
      <div>
        <h1 className="sm:text-xl md:text-2xl lg:text-4xl text-lg font-bold font-sans sm:pt-5 lg:pt-32 text-white ">
          My <ColourfulText text=" E-commerce " />
          Project
        </h1>
        <div className="flex p-2">
          <FaGithub className="text-white h-12 w-7" />
          <Link
            target="_blank"
            href={"https://github.com/KF1708/My-Next-Ecommerce"}
          >
            <h1 className="text-red-200 font-semibold text-xl p-3 font-serif text-center">
              {" "}
              View Source Code
            </h1>
          </Link>
        </div>
      </div>

      <div className="">
        {" "}
        <Image src={project} className="h-full w-96 " />
      </div>
    </div>
  );
};

export default MyProject;
