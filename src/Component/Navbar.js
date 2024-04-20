import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getGlobalName } from "./auth/GoogleAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  const name = getGlobalName();
  console.log("hi", name);
  return (
    <nav className="bg-slate-950">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-white font-bold w-20">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex">
          <div className="flex space-x-4">
            <div
              className={`px-3 py-2 rounded-md ${
                location.pathname === "/"
                  ? " active border border-green-200"
                  : ""
              }`}
            >
              <Link to="/" className="text-white">
                Home
              </Link>
            </div>
            <div
              className={`px-3 py-2 rounded-md ${
                location.pathname === "/shop"
                  ? " active border border-green-200"
                  : ""
              }`}
            >
              <Link to="/shop" className="text-white">
                Shop
              </Link>
            </div>
            <div
              className={`px-3 py-2 rounded-md ${
                location.pathname === "/blog"
                  ? " active border border-green-200"
                  : ""
              }`}
            >
              <Link to="/blog" className="text-white">
                Blog
              </Link>
            </div>
            <div
              className={`px-3 py-2 rounded-md ${
                location.pathname === "/login"
                  ? " active border border-green-200"
                  : ""
              }`}
            >
              <Link to="/login" className="text-white">
                Login {name}
              </Link>
            </div>

            <div
              className={`px-3 py-2 rounded-md ${
                location.pathname === "/signup"
                  ? " active border border-green-200"
                  : ""
              }`}
            >
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-1/2 bg-slate-950 z-50 p-2">
          <div
            className={`px-3 py-2 rounded-md ${
              location.pathname === "/" ? " active border border-green-200" : ""
            }`}
          >
            <Link to="/" className="block text-white">
              Home
            </Link>
          </div>
          <div
            className={`px-3 py-2 rounded-md ${
              location.pathname === "/shop"
                ? " active border border-green-200"
                : ""
            }`}
          >
            <Link to="/shop" className="block text-white">
              Shop
            </Link>
          </div>
          <div
            className={`px-3 py-2 rounded-md ${
              location.pathname === "/blog"
                ? " active border border-green-200"
                : ""
            }`}
          >
            <Link to="/blog" className="text-white">
              Blog
            </Link>
          </div>
          <div
            className={`px-3 py-2 rounded-md ${
              location.pathname === "/login"
                ? " active border border-green-200"
                : ""
            }`}
          >
            <Link to="/login" className="block text-white">
              Login
            </Link>
          </div>
          <div
            className={`px-3 py-2 rounded-md ${
              location.pathname === "/signup"
                ? " active border border-green-200"
                : ""
            }`}
          >
            <Link to="/signup" className="block text-white">
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
