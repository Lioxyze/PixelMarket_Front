"use client";

import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import ShoppingCart from "@/Components/Shopping/shopping";

const Cart = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ShoppingCart />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
