"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

import { Contact } from "@/components/emailJs/EmailJs";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-lg sm:text-xl md:text-3xl font-medium tracking-tight text-transparent lg:text-5xl"
      >
        Contact with me
      </motion.h1>
      <h1>Email</h1>
      <Contact />
    </LampContainer>
  );
}
