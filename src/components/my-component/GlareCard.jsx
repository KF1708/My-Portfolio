"use client";
import Image from "next/image";
import { ColourfulText } from "../ui/colourful-text";
import { GlareCard } from "../ui/glare-card";
import html from "../../../public/images/skills/html.png";
import css from "../../../public/images/skills/css.png";
import javascript from "../../../public/images/skills/javascript.webp";
import nodejs from "../../../public/images/skills/nodejs.png";
import sass from "../../../public/images/skills/sass.png";
import aceternityui from "../../../public/images/skills/aceternity-ui.png";
import antdesign from "../../../public/images/skills/ant-design.png";
import bootstrap from "../../../public/images/skills/bootstrap.png";
import clerk from "../../../public/images/skills/clerk.png";
import cypress from "../../../public/images/skills/cypress.png";
import github from "../../../public/images/skills/github.png";
import jsonwebtoken from "../../../public/images/skills/json-web-token.png";
import nextjs from "../../../public/images/skills/nextjs2.png";
import postman from "../../../public/images/skills/postman.png";
import react from "../../../public/images/skills/react.png";
import redux from "../../../public/images/skills/redux.png";
import swiper from "../../../public/images/skills/swiper.png";
import tailwind from "../../../public/images/skills/tailwind.png";
import { FlipWordsDemo } from "./FlipWords";

export function GlareCardDemo() {
  return (
    <div className="bg-gray-950 py-5">
      <h1 className="py-3 sm:text-xl md:text-2xl lg:text-4xl text-lg font-bold text-center relative font-sans">
        <FlipWordsDemo />
      </h1>
      <h1 className="pb-2 text-xl font-bold text-center text-white relative font-serif">
        Crafting stories through Design and Imagination
      </h1>
      <div className="grid m-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5 gap-3">
        <GlareCard className="flex gap-3 flex-col items-center justify-center">
          <div className="flex justify-center">
            <Image src={html} className="h-15 w-24 " />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              HTML
            </h1>
          </div>
          <div className="flex">
            <Image src={css} className="h-14 w-20" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              CSS
            </h1>
          </div>
          <div className="flex">
            {" "}
            <Image src={javascript} className="h-13 w-20" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              JavaScrtip
            </h1>
          </div>
        </GlareCard>

        <GlareCard className="flex gap-3 flex-col items-center justify-center">
          <div className="flex gap-2">
            {" "}
            <Image src={tailwind} className="h-13 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Tailwind
            </h1>
          </div>
          <div className="flex gap-2">
            {" "}
            <Image src={sass} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              SASS
            </h1>
          </div>
          <div className="flex gap-3">
            {" "}
            <Image src={antdesign} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Ant design
            </h1>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col gap-3 items-center justify-center">
          <div className="flex gap-2">
            <Image src={swiper} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Swiper
            </h1>
          </div>
          <div className="flex gap-2">
            <Image src={bootstrap} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Bootstrap
            </h1>
          </div>
          <div className="flex gap-2">
            <Image src={jsonwebtoken} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Json-web-token
            </h1>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-end py-4">
          <div className="flex gap-2">
            <Image src={postman} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Postman
            </h1>
          </div>
          <div className="flex gap-2">
            <Image src={react} className="h-24 w-20" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              React.js
            </h1>
          </div>
          <div className="flex">
            <Image src={nextjs} className="h-24 w-28" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-5">
              Next.js
            </h1>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col gap-3 items-center justify-center py-5">
          <div className="flex gap-2">
            <Image src={cypress} className="h-14 w-14" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Cypress
            </h1>
          </div>
          <div className="flex gap-2">
            <Image src={redux} className="h-20 w-20" />
            <h1 className="text-gray-600 text-xl font-bold font-serif p-3">
              Redux
            </h1>
          </div>
          <div className="flex gap-2">
            <Image src={github} className="h-14 w-14 bg-amber-50 rounded-4xl" />
            <h1 className="text-gray-600 text-xl  font-bold font-serif p-3">
              Github
            </h1>
          </div>
        </GlareCard>
      </div>
    </div>
  );
}
