import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/Home" className="flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/743/843/original/red-heart-pixel-art-png.png"
                className="h-8 me-3"
                alt="PixelMarket Logo"
              />
              <span className="text-3xl font-bold font-heading">
                PixelMarket
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Lioxyze"
                    className="hover:text-white"
                  >
                    PixelMarket
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Lioxyze"
                    className="hover:text-white"
                  >
                    PixelMarket
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Lioxyze"
                    className="hover:text-white"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/MZb3QRcbBU"
                    className="hover:text-white"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Lioxyze"
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Lioxyze"
                    className="hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            &copy; 2023{" "}
            <a href="https://github.com/Lioxyze" className="hover:text-white">
              PixelMarket™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-5">
            <a
              href="https://github.com/Lioxyze"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 8 19" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://github.com/Lioxyze"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 21 16" fill="currentColor">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm15.99 1.6a2 2 0 1 1 2.818-2.844 2 2 0 0 1-2.818 2.844Zm-15.99-1.6a2 2 0 1 1 2.818-2.844 2 2 0 0 1-2.818 2.844Zm15.99 1.6a2 2 0 1 1-2.818 2.844 2 2 0 0 1 2.818-2.844Zm-15.99-1.6a2 2 0 1 1 2.818-2.844 2 2 0 0 1-2.818 2.844Z" />
              </svg>
            </a>
            <a
              href="https://github.com/Lioxyze"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 20 17" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 1-4.597.434c.009.122.015.244.015.367 0 2.283-1.73 4.915-4.915 4.915a4.912 4.912 0 0 1 2.326-.601c-1.437 1.11-3.038 1.788-5.022 1.788-.326 0-.647-.023-.966-.067a6.944 6.944 0 0 0 3.788 1.11c3.977 0 6.827-2.765 6.827-6.412 0-.098-.002-.195-.007-.291a4.758 4.758 0 0 0 1.158-1.207c-.422.188-.876.322-1.346.377a4.884 4.884 0 0 0 2.102-.601c-.491.18-1.008.299-1.542.354a4.924 4.924 0 0 0-1.452-.22c.409-.26.759-.588 1.036-.963a4.94 4.94 0 0 0-2.192.603Z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/Lioxyze"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm7.293 5.293a1 1 0 0 0-1.32-.083 1 1 0 0 0-.277.948l.56 2.916a1 1 0 0 0 1.185.777l.216-.046a1 1 0 0 0 .556-.277l2.286-2.285a1 1 0 0 0 .277-.948 1 1 0 0 0-1.32-.084L10 10.62l-1.707-1.707z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
