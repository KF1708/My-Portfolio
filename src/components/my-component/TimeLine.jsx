import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import project from "../../../public/images/my-project/myproject.jpeg";
import project1 from "../../../public/images/my-project/myproject-1.jpeg";
import project2 from "../../../public/images/my-project/myproject-2.jpeg";
import project3 from "../../../public/images/my-project/myproject-3.jpeg";
import project4 from "../../../public/images/my-project/myproject-4.jpeg";
import project5 from "../../../public/images/my-project/myproject-5.jpeg";
import project6 from "../../../public/images/my-project/myproject-6.jpeg";
import project7 from "../../../public/images/my-project/myproject-7.jpeg";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            Built and launched in vercel from scratch.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={project}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={project1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={project2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <Image
              src={project3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            I start doing some projects from last years.
          </p>
          <p className="text-neutral-500 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            It helps me build confidence in my work and gives me the chance to
            practice new tools in my projects. It allows me to improve my skills
            while exploring different techniques and approaches. This practice
            strengthens my problem-solving abilities, making me more efficient
            and adaptable.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={project5}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={project6}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={project7}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            5 new tools I learned
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Redux
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Clerk
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Shadcn/ui
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Vercel
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Stripe
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
