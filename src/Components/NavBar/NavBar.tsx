"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [roleId, setRoleId] = useState<number | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedRoleId = localStorage.getItem("role_id");
    if (storedRoleId) {
      setRoleId(parseInt(storedRoleId, 10));
    }

    const storedPseudo = localStorage.getItem("pseudo");
    if (storedPseudo) {
      setUsername(storedPseudo);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/HomeNoRegister");
  };

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
        <ul className="hidden xl:flex space-x-12 font-semibold">
          <li>
            <a className="hover:text-gray-200" href="/Home">
              Home
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
          {roleId === 2 && (
            <li>
              <a className="hover:text-gray-200" href="/Admin">
                Admin
              </a>
            </li>
          )}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden xl:flex space-x-5 items-center">
          <a className="hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
          <a
            className="flex items-center hover:text-gray-200 relative"
            href="/ShoppingCart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 bg-pink-500 rounded-full text-xs text-white">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative">0</span>
            </span>
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            {username && <span className="ml-2">{username}</span>}
          </a>
          <img
            src="https://media.discordapp.net/attachments/1213050633322496040/1264885569796702248/istockphoto-1129712683-612x612-removebg-preview.png?ex=669f7ffc&is=669e2e7c&hm=5c489a5c4e5c06430661cd45731bb4b31e39702674b57cc61c9075f51a4026c5&=&format=webp&quality=lossless&width=473&height=473"
            alt="Disconnect"
            onClick={handleLogout}
            className="h-7 w-7 cursor-pointer hover:opacity-75"
          />
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
              <span className="ml-2">{username}</span>
            </li>
            <li>
              <a className="block hover:text-gray-200" href="/Home">
                Home
              </a>
            </li>
            {roleId === 2 && (
              <li>
                <a className="block hover:text-gray-200" href="/Admin">
                  Admin
                </a>
              </li>
            )}
            <li>
              <a className="block hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="block hover:text-gray-200"
                href="#"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default NavBar;
