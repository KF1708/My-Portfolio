import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better *", "interactive ~", "beautiful *", "modern !"];

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
        My slills to create
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
