"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";

export const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1t3z42f", "template_6pjoawc", form.current, {
        publicKey: "gEUGw2Nl35Uxs8w9q",
      })
      .then(
        () => {
          alert("SUCCESS!");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className=" pt-2">
        <div className="pb-8">
          {" "}
          <label className="text-stone-600 text-xl font-medium font-serif">
            Name:
          </label>
          <input
            className="text-stone-600 outline-1 h-12 w-96 rounded-md outline-pink-500 ml-3 p-1 outline-dashed"
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="pb-8">
          {" "}
          <label className="text-stone-600 text-xl font-medium font-serif">
            Email:
          </label>
          <input
            className="text-stone-600 outline-1 h-12 w-96 rounded-md outline-pink-500 ml-3 p-1 outline-dashed"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="pb-8">
          {" "}
          <label className="text-stone-600 text-xl font-medium font-serif text-center justify-center">
            Message:
          </label>
          <textarea
            className="text-stone-600 outline-1 h-20 w-96 rounded-md outline-pink-500 ml-3 p-1 outline-dashed"
            name="message"
            placeholder="Enter your massage"
            required
          />
        </div>
        <input
          className="text-white px-4 outline-1 h-10 w-32 text-center font-serif text-2xl  my-5 rounded-md outline-purple-500 hover:bg-white cursor-pointer bg-black-700 hover:text-black hover:text-3xl"
          type="submit"
          value="Send"
          required
        />
      </div>
    </form>
  );
};
