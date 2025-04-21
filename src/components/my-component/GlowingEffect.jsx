"use client";
import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles,
  Goal,
  Handshake,
  PencilRuler,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]"
        icon={<Goal className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="My Ambition"
        description=" My goal is to create exceptional web experiences using React, Next.js,
          and Tailwind, driving innovation and setting new standards in the
          digital landscape. I am committed to developing not just functional
          websites but immersive digital journeys that are user-friendly,
          memorable, and exceed client expectations. I am motivated by
          continuous learning and the opportunity to grow professionally,
          ensuring that I stay up-to-date with emerging technologies.
          Contributing to meaningful projects that have a positive impact is a
          key driver in my career. Ultimately, I strive to make valuable
          contributions while advancing both my skills and career."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]"
        icon={
          <Handshake className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title=" Work Ethic and Approach"
        description="I maintain a collaborative and adaptable work style, always focused on
          finding solutions and overcoming challenges efficiently. I actively
          contribute to team discussions, ensuring that everyone’s opinions are
          valued and respected, which fosters a positive and inclusive
          environment. My problem-solving approach is centered on creative
          solutions, aimed at achieving the best outcomes for the team. I
          prioritize open communication and mutual respect, helping to
          strengthen team dynamics and productivity. Ultimately, I am committed
          to supporting team success while promoting continuous growth and
          collaboration."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]"
        icon={
          <PencilRuler className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title=" Skills and Strengths"
        description=" I am a skilled front-end developer with expertise in HTML, CSS,
          Tailwind, API integration, and version control using GitHub. I am
          well-versed in Agile methodology, participating in sprint planning,
          daily stand-ups, and retrospectives to drive team success. My
          collaborative work style focuses on fostering an inclusive environment
          where everyone’s opinions are respected and valued. I am punctual,
          reliable, and always committed to delivering tasks on time and to a
          high standard. Additionally, my proficiency in both English and Bangla
          enhances my ability to communicate effectively and work seamlessly
          with diverse teams."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/7/3/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title=" My Hobby"
        description="Outside of work, I have a passion for traveling, cooking, and
            gardening, as well as spending quality time with loved ones.
            Traveling allows me to explore new cultures and gain fresh
            perspectives, while cooking provides a creative outlet where I can
            experiment with flavors and share meals with those close to me.  Gardening offers a peaceful escape, allowing me to connect with
            nature and experience the satisfaction of nurturing growth. These
            hobbies bring balance to my life, blending creativity, relaxation,
            and adventure, and helping me maintain a sense of fulfillment and
            well-being."
      />
      {/* <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Coming soon on Aceternity UI"
        description="I'm writing the code as I record this, no shit."
      /> */}
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[17rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-1 ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative h-full justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-3">
          <div className="relative flex justify-items-start gap-3 pb-2">
            <div className="w-fit rounded-lg bg-gray-400 border border-white border-dotted p-2 ">
              {icon}
            </div>

            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance  dark:text-white bg-clip-text text-transparent bg-gradient-to-b from-blue-700 to-red-700 ">
              {title}
            </h3>
          </div>
          <h2
            className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-white dark:text-neutral-400"
          >
            {description}
          </h2>
        </div>
      </div>
    </li>
  );
};
