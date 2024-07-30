import React from "react";
import home from "../../assets/home.svg";
import DocumentTitle from "../DocumentTitle/DocumentTitle";

export default function Home() {
  DocumentTitle("Home");
  return (
    <section className="bg-[#1ABC9C] flex justify-center items-center text-white text-center pt-32">
      <article className="py-16">
        <img src={home} alt="man" className="mx-auto mb-8" />
        <h1 className="text-3xl uppercase font-bold">start framework</h1>
        <div className="flex gap-2 my-5 items-center justify-center">
          <div className="bg-white my-1 w-20 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-white my-1 w-20 h-1"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </article>
    </section>
  );
}
