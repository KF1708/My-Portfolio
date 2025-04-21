import React from "react";
import { Contactme } from "../emailJs/EmailJs";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { CoverDemo } from "../my-component/Cover";

const Contact = () => {
  return (
    <div className="bg-black flex gap-2 lg:flex-row flex-col text-center lg:justify-around">
      <div>
        <CoverDemo />
        <Contactme />
      </div>
      <div className="">
        <h1 className=" text-stone-400 text-lg pt-10 pb-5">
          If you want to know more about me or my work, <br />
          or if you would just like to say hello, send me a message. <br /> I'd
          love to hear from you.
        </h1>
        <h1 className=" justify-center flex gap-3 m-1 py-3 font-bold font-serif lg:text-3xl md:text-2xl sm:text-xl text-lg text-stone-500">
          <HiOutlineMail /> Email: kftech.va@gmail.com
        </h1>
        <h1 className="justify-center flex gap-3 m-1 py-3 font-bold font-serif lg:text-3xl md:text-2xl sm:text-xl text-lg text-stone-500">
          <IoIosPhonePortrait /> Phone: 703-982-0808
        </h1>
        <h1 className="justify-center flex gap-3 m-1 py-3 font-bold font-serif lg:text-3xl md:text-2xl sm:text-xl text-lg text-stone-500">
          <CiLinkedin /> Linkdin: kftech.va@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Contact;
