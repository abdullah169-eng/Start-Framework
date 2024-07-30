import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // Responsive Nav
  const [open, isOpen] = useState(false);
  function getLinks() {
    if (open == true) {
      isOpen(false);
    } else {
      isOpen(true);
    }
  }
  // Move Nav
  const [move, isMove] = useState(false);
  function moveNav() {
    if (window.scrollY > 20) {
      isMove(true);
    } else {
      isMove(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", moveNav);
    return () => {
      window.removeEventListener("scroll", moveNav);
    };
  }, []);
  return (
    <nav className="fixed z-50 w-full bg-[#2C3E50] text-white uppercase font-bold">
      <div
        className={`flex transition-all duration-500 ${move ? "h-20" : "h-28"}`}
      >
        <section className="px-3 w-full md:w-5/6 flex justify-between items-center mx-auto">
          <article>
            <Link to="/" className="text-3xl">
              start framework
            </Link>
          </article>
          <article className="flex justify-center">
            <button onClick={getLinks} className="p-2">
              <i className="fa-solid fa-bars text-3xl md:hidden"></i>
            </button>
            <ul className="hidden md:flex gap-6">
              <li>
                <NavLink to="/about" className="rounded-md p-2">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="rounded-md p-2">
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="rounded-md p-2">
                  Contact
                </NavLink>
              </li>
            </ul>
          </article>
        </section>
      </div>
      {/* small screen */}
      <section
        id="mobile"
        className={`md:hidden overflow-hidden transition-all duration-700 ${
          open ? "h-44" : "h-0"
        }`}
      >
        <ul className="flex flex-col md:hidden gap-y-8 px-4 py-5">
          <li>
            <NavLink to="/about" className="rounded-md p-2">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="rounded-md p-2">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="rounded-md p-2">
              Contact
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}
