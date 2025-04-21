"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "A",
      className:
        "bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 p-3",
    },

    {
      text: "Front-end",
      className:
        "bg-clip-text text-transparent bg-gradient-to-b from-stone-200 to-blue-600",
    },
    {
      text: "Developer",
      className:
        "bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600",
    },
  ];
  return (
    <div className="">
      <TypewriterEffectSmooth words={words} className="text-white" />
    </div>
  );
}
