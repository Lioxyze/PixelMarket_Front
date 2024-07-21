import React, { useState } from "react";

const NavBarNoRegister = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="relative mx-auto">
      <nav className="bg-gray-900 text-white w-full flex items-center justify-between px-5 xl:px-12 py-4">
        <div className="flex items-center">
          <img
            className="h-9"
            src="https://static.vecteezy.com/system/resources/previews/013/743/843/original/red-heart-pixel-art-png.png"
            alt="Pixel Market."
          />
          <a className="text-2xl xl:text-3xl font-bold ml-3" href="#">
            Pixel Market.
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 font-semibold">
          <li>
            <a className="hover:text-gray-200" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Catagory
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden xl:flex space-x-5 items-center">
          <a
            className="flex items-center hover:text-gray-200"
            href="/Auth/Register"
          >
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a
            className="flex items-center hover:text-gray-200"
            href="/Auth/Register"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-gray-900 text-white w-full absolute top-full left-0 p-4">
          <ul className="space-y-4">
            <li>
              <a className="block hover:text-gray-200" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="block hover:text-gray-200" href="#">
                Catagory
              </a>
            </li>
            <li>
              <a className="block hover:text-gray-200" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="block hover:text-gray-200" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="block hover:text-gray-200" href="/Auth/Register">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default NavBarNoRegister;
