import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="join flex px-8 gap-40" id="join-us">
      <div className="lefy-j text-white text-[3rem] font-bold uppercase relative">
        <hr className="absolute w-[10.5rem] border-[2px] border-orange rounded-[20%]" />
        <div className="flex gap-4">
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div className="flex gap-4">
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>

      <div className="right-j flex justify-center items-end">
        <form
          ref={form}
          className="email-container flex gap-12 bg-gray py-4 px-8"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
            className="bg-transparent border-none  outline-none text-black"
          />

          <button className="btn text-white">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
