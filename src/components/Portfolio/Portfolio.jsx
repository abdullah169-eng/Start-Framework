import React from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import DocumentTitle from "./../DocumentTitle/DocumentTitle";

export default function Portfolio() {
  DocumentTitle("Portfolio");
  return (
    <section className="text-[#2C3E50] pt-32">
      <article>
        <h1 className="text-3xl md:text-5xl uppercase font-bold text-center">
          Portfolio COMPONENT
        </h1>
        <div className="flex gap-2 my-5 items-center justify-center">
          <div className="bg-[#2C3E50] my-1 w-20 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-[#2C3E50] my-1 w-20 h-1"></div>
        </div>
        <section className="md:w-11/12 mx-auto flex flex-wrap">
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port1} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port2} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port3} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port1} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port2} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
          <article className="md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group">
              <img className="rounded-lg" src={port3} alt="port" />
              <div className="absolute top-0 bottom-0 start-0 end-0 bg-[#29B197] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
}
