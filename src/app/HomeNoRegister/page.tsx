"use client";
import Footer from "@/Components/Footer/Footer";
import Tabproduct from "@/Components/Home/TabPanier";
import MainNoRegister from "@/Components/HomeNoregister/MainNoRegister";
import Main from "@/Components/HomeNoregister/MainNoRegister";
import NavBarNoRegister from "@/Components/HomeNoregister/NavBarNoRegister";
import NavBar from "@/Components/HomeNoregister/NavBarNoRegister";

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
        <NavBarNoRegister />
      </div>
      <div className="">
        <MainNoRegister />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
