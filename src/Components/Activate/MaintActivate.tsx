import React from "react";

const MaintActivate = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-gray-800">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-400 leading-tight">
          Account Validated!
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-100">
          Congratulations! Your account has been successfully validated on
          PixelMarket.
        </p>
        <a
          href="/Auth/Login"
          className="mt-6 inline-block bg-gray-900 text-white text-base md:text-lg font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in duration-150"
        >
          Go to Login
        </a>
      </div>
    </main>
  );
};

export default MaintActivate;
