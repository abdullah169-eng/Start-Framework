import React, { useState } from "react";
import DocumentTitle from "../DocumentTitle/DocumentTitle";

export default function Contact() {
  DocumentTitle("Contact");
  const [active, setActive] = useState(0);
  const [ele, setEle] = useState("");
  function moveLabel(e) {
    if (e.target.value.length > 0) {
      setActive(e.target.value.length);
      setEle(e.target.id);
    } else {
      setActive(0);
      setEle("");
    }
  }
  return (
    <section className="text-[#2C3E50] pt-32">
      <article>
        <h1 className="text-3xl md:text-5xl uppercase font-bold text-center">
          contact section
        </h1>
        <div className="flex gap-2 my-5 items-center justify-center">
          <div className="bg-[#2C3E50] my-1 w-20 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-[#2C3E50] my-1 w-20 h-1"></div>
        </div>
        <section className="w-full px-4 md:w-1/2 mx-auto mb-6 mt-10">
          <div className="my-2">
            <label
              htmlFor="userName"
              className={`text-[rgb(26,188,156)] ms-2 block transition-all duration-500 ${
                active > 0 && ele == "userName"
                  ? "translate-y-0"
                  : "-translate-y-[-150%]"
              }`}
            >
              userName :
            </label>
            <input
              onInput={moveLabel}
              id="userName"
              type="text"
              placeholder="userName"
              className="w-full rounded-md p-3 my-2 placeholder:text-gray-500 border-0 border-b outline-none relative z-10"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="userAge"
              className={`text-[#1ABC9C] ms-2 block transition-all duration-500 ${
                active > 0 && ele == "userAge"
                  ? "translate-y-0"
                  : "-translate-y-[-150%]"
              }`}
            >
              userAge :
            </label>
            <input
              onInput={moveLabel}
              id="userAge"
              type="number"
              placeholder="userAge"
              className="w-full rounded-md p-3 my-2 placeholder:text-gray-500 border-0 border-b outline-none relative z-10"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="userEmail"
              className={`text-[#1ABC9C] ms-2 block transition-all duration-500 ${
                active > 0 && ele == "userEmail"
                  ? "translate-y-0"
                  : "-translate-y-[-150%]"
              }`}
            >
              userEmail :
            </label>
            <input
              onInput={moveLabel}
              id="userEmail"
              type="email"
              placeholder="userEmail"
              className="w-full rounded-md p-3 my-2 placeholder:text-gray-500 border-0 border-b outline-none relative z-10"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="userPassword"
              className={`text-[#1ABC9C] ms-2 block transition-all duration-500 ${
                active > 0 && ele == "userPassword"
                  ? "translate-y-0"
                  : "-translate-y-[-150%]"
              }`}
            >
              userPassword :
            </label>
            <input
              onInput={moveLabel}
              id="userPassword"
              type="password"
              placeholder="userPassword"
              className="w-full rounded-md p-3 my-2 placeholder:text-gray-500 border-0 border-b outline-none relative z-10"
            />
          </div>
          <button className="bg-[#1ABC9C] text-white rounded-lg px-3 py-2">
            send Message
          </button>
        </section>
      </article>
    </section>
  );
}
