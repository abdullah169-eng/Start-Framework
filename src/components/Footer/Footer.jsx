import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white text-center">
      <section className="md:w-11/12 flex flex-wrap justify-between items-start mx-auto py-10">
        <article className="w-full md:w-1/3 my-3 py-8 px-5">
          <div>
            <h3 className="uppercase font-semibold text-2xl mb-3">location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </article>
        <article className="w-full md:w-1/3 my-3 py-8 px-5">
          <div>
            <h3 className="uppercase font-semibold text-2xl mb-3">
              AROUND THE WEB
            </h3>
            <section className="flex gap-2 mt-3 justify-center">
              <div className="text-xl border border-white rounded-full size-9 flex items-center justify-center">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="text-xl border border-white rounded-full size-9 flex items-center justify-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="text-xl border border-white rounded-full size-9 flex items-center justify-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="text-xl border border-white rounded-full size-9 flex items-center justify-center">
                <i className="fa-solid fa-globe"></i>
              </div>
            </section>
          </div>
        </article>
        <article className="w-full md:w-1/3 my-3 py-8 px-5">
          <div>
            <h3 className="uppercase font-semibold text-2xl mb-3">
              ABOUT FREELANCER
            </h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </article>
      </section>
      <section className="bg-[#121920] bg-opacity-70 py-5">
        <p>Copyright © Your Website 2021</p>
      </section>
    </footer>
  );
}
