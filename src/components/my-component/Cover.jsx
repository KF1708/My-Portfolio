import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mb-1 mt-2 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Get in touch <br /> <Cover>send me email</Cover>
      </h1>
    </div>
  );
}
