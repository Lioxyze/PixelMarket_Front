"use client";
import Footer from "@/Components/Footer/Footer";
import Main from "@/Components/Home/Main";
import Tabproduct from "@/Components/Home/TabPanier";
import NavBar from "@/Components/NavBar/NavBar";
import { AllProduct } from "@/Service/Product";
import { Product } from "@/Utils/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    AllProduct().then((res) => {
      setProducts(res.product);
    });
  }, [isReloadNeeded]);

  return (
    <div className="bg-red-200 ">
      <div>
        <NavBar />
      </div>
      <div className="">
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
