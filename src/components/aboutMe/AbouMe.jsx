"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import { GiStairsGoal } from "react-icons/gi";
import Image from "next/image";
import hobby1 from "../../../public/images/hobby/p-1.jpg";
import hobby2 from "../../../public/images/hobby/p-2.jpg";
import { BsPersonGear } from "react-icons/bs";
import { PiPottedPlant } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { GlowingEffect } from "../ui/glowing-effect";
import { GlowingEffectDemoSecond } from "../my-component/GlowingEffect";

const AbouMe = () => {
  return (
    <div className="bg-black py-5 px-3">
      {/* <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 py-2 w-full h-full"
      > */}
      {/* <h1 className="p-2 md:text-4xl text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          A Frontend Developer with React and Next.js Experience
        </h1> */}
      {/* <div>
        <h1 className=" flex gap-4 md:text-3xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 font-sans font-bold">
          <GiStairsGoal className="bg-green-900 lg:h-8 lg:w-8 h-5 w-5 rounded-lg text-white" />
          My Ambition
        </h1>
        <h1 className="text-white text-lg  font-medium font-serif">
          My goal is to create exceptional web experiences using React, Next.js,
          and Tailwind, driving innovation and setting new standards in the
          digital landscape. I am committed to developing not just functional
          websites but immersive digital journeys that are user-friendly,
          memorable, and exceed client expectations. I am motivated by
          continuous learning and the opportunity to grow professionally,
          ensuring that I stay up-to-date with emerging technologies.
          Contributing to meaningful projects that have a positive impact is a
          key driver in my career. Ultimately, I strive to make valuable
          contributions while advancing both my skills and career.
        </h1>
      </div>
      <div className="py-2">
        <h1 className=" flex gap-4 pb-2 md:text-3xl text-xl  bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-700  font-sans font-bold">
          <BsPersonGear className="bg-green-900 lg:h-8 lg:w-8 h-5 w-5 rounded-lg text-white" />
          Work Ethic and Approach
        </h1>
        <h1 className="text-white text-lg  font-medium font-serif">
          I maintain a collaborative and adaptable work style, always focused on
          finding solutions and overcoming challenges efficiently. I actively
          contribute to team discussions, ensuring that everyone’s opinions are
          valued and respected, which fosters a positive and inclusive
          environment. My problem-solving approach is centered on creative
          solutions, aimed at achieving the best outcomes for the team. I
          prioritize open communication and mutual respect, helping to
          strengthen team dynamics and productivity. Ultimately, I am committed
          to supporting team success while promoting continuous growth and
          collaboration.
        </h1>
      </div>
      <div className="py-2">
        <h1 className=" flex gap-4 md:text-3xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-blue-700 font-sans font-bold">
          <FaTools className="bg-green-900 lg:h-8 lg:w-8 h-5 w-5 rounded-lg text-white" />
          Skills and Strengths
        </h1>
        <h1 className="text-white text-lg  font-medium font-serif">
          I am a skilled front-end developer with expertise in HTML, CSS,
          Tailwind, API integration, and version control using GitHub. I am
          well-versed in Agile methodology, participating in sprint planning,
          daily stand-ups, and retrospectives to drive team success. My
          collaborative work style focuses on fostering an inclusive environment
          where everyone’s opinions are respected and valued. I am punctual,
          reliable, and always committed to delivering tasks on time and to a
          high standard. Additionally, my proficiency in both English and Bangla
          enhances my ability to communicate effectively and work seamlessly
          with diverse teams.
        </h1>
      </div>
      <div className="py-2">
        <h1 className=" flex gap-4 pb-2 md:text-3xl text-xl  bg-clip-text text-transparent bg-gradient-to-b from-pink-200 to-pink-700  font-sans font-bold">
          <PiPottedPlant className="bg-green-900 lg:h-8 lg:w-8 h-5 w-5 rounded-lg text-white" />
          My Hobby
        </h1>
        <article>
          <Image
            className="float-right lg:h-28 lg:w-52 h-28 w-40"
            src={hobby1}
          />
          <p className="clear-left font-serif text-lg text-amber-50">
            Outside of work, I have a passion for traveling, cooking, and
            gardening, as well as spending quality time with loved ones.
            Traveling allows me to explore new cultures and gain fresh
            perspectives, while cooking provides a creative outlet where I can
            experiment with flavors and share meals with those close to me.
            <Image
              className="float-left lg:h-24 lg:w-32 p-1 h-20 w-24"
              src={hobby2}
            />{" "}
            Gardening offers a peaceful escape, allowing me to connect with
            nature and experience the satisfaction of nurturing growth. These
            hobbies bring balance to my life, blending creativity, relaxation,
            and adventure, and helping me maintain a sense of fulfillment and
            well-being.
          </p>
        </article>
      </div> */}
      {/* </Vortex> */}
      <GlowingEffectDemoSecond />
    </div>
  );
};

export default AbouMe;
