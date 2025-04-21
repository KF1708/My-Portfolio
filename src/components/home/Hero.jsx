"use client";
import React from "react";
import Image from "next/image";
import portfolio from "../../../public/images/portfolio/new-3.png";
import { FaDownload } from "react-icons/fa";
import { TypewriterEffectSmoothDemo } from "../my-component/TypewriterEffet";

const Hero = () => {
  return (
    <div className="flex justify-center md:flex-row flex-col bg-black">
      <div className="pt-2">
        <h1 className="p-2 md:text-3xl lg:text-5xl text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Hello!
        </h1>
        <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-4xl font-bold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-neutral-100">
            {" "}
            Kaniz Fatama
          </span>{" "}
          Here,
        </h2>

        <TypewriterEffectSmoothDemo />
        <p className="text-white text-sm md:text-xl lg:text-2xl max-w-xl mt-6 mb-5">
          I'm a front-end developer with a passion for crafting visually
          appealing, responsive and interactive web applications. With expertise
          in HTML, CSS, JavaScript and API integration, I transfer designs into
          functional user experience
        </p>

        <button className="kaniz">
          <a
            href={"/images/kf-resume.pdf"}
            download={"kaniz-resume"}
            className="flex mb-5 px-4 py-2 lg:text-lg lg:font-medium text-base font-light bg-black hover:bg-white hover:text-black transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            <FaDownload className="m-1.5 font-extralight text-yellow-300" />
            Resume Here
          </a>
        </button>
      </div>
      <div>
        <Image
          src={portfolio}
          className="lg:h-96 lg:w-96 md:h-96 md:w-80 sm:h-56 sm:w-44 h-48 w-40  rounded-2xl "
        />
      </div>
    </div>
  );
};

export default Hero;
