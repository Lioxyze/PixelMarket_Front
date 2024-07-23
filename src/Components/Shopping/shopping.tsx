import React from "react";

const ShoppingCart = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-400 leading-tight">
            Shopping Cart
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-100">
            Review your items and proceed to checkout
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="text-center text-gray-100">
          <p>Your cart is currently empty.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400">
            Items in your cart:
          </h2>
          <div className="mt-6 bg-gray-900 text-white rounded-lg shadow-lg p-4">
            <div key="" className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold"></h3>
                <p className="text-gray-400">Quantity: </p>
              </div>
              <div className="text-gray-400">$</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400">
            Total: $
          </p>
          <button className="mt-6 inline-block bg-gray-900 text-white text-base md:text-lg font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in duration-150">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
