import React from "react";
import DocumentTitle from "../DocumentTitle/DocumentTitle";

export default function About() {
  DocumentTitle("About")
  return (
    <section className="bg-[#1ABC9C] flex justify-center items-center text-white h-screen">
      <article className="pt-20">
        <h1 className="text-3xl md:text-5xl uppercase font-bold text-center">
          ABOUT COMPONENT
        </h1>
        <div className="flex gap-2 my-5 items-center justify-center">
          <div className="bg-white my-1 w-20 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-white my-1 w-20 h-1"></div>
        </div>
        <section className="w-3/4 mx-auto md:flex gap-3">
          <article className="md:w-1/2">
            <p className="py-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </article>
          <article className="md:w-1/2">
            <p className="py-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </article>
        </section>
      </article>
    </section>
  );
}
