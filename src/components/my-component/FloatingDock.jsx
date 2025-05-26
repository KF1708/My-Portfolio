import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMailFast,
  IconNewSection,
  IconPresentationAnalytics,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About-me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/aboutMe",
    },
    {
      title: "Contact with me",
      icon: (
        <IconMailFast className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    //     {
    //       title: "Aceternity UI",
    //       icon: (
    //         <Image
    //           src="https://assets.aceternity.com/logo-dark.png"
    //           width={20}
    //           height={20}
    //           alt="Aceternity Logo"
    //         />
    //       ),
    //       href: "#",
    //     },
    {
      title: "My projects",
      icon: (
        <IconPresentationAnalytics className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/project",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kaniz-fatama-a32ba2367/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/KF1708",
    },
  ];
  return (
    <div className="flex items-center justify-center bg-black h-[12rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
