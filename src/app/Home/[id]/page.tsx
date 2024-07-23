"use client";
import Image from "next/image";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Product } from "@/Utils/types";
import { AllProduct, getProductdetails } from "@/Service/Product";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";

const Details = ({ params }: { params: { id: number } }) => {
  const [detailsproduct, setdetailsproduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  const monId = params.id;

  useEffect(() => {
    const getProduct = async () => {
      const response = await getProductdetails(monId);
      setdetailsproduct(response);
      console.log(response);
    };
    getProduct();
  }, [monId]);

  useEffect(() => {
    AllProduct()
      .then((res) => {
        console.log("AllProduct response:", res);
        if (res && Array.isArray(res.product)) {
          setProducts(res.product);
        } else {
          console.error("Unexpected response format:", res);
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, [isReloadNeeded]);

  return (
    <div className="bg-gray-800  ">
      <NavBar />
      <main className="flex-grow  bg-gray-800">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black my-8">
          <div className="relative h-80 w-full">
            {detailsproduct?.image && (
              <Image
                className="rounded-t-lg"
                src={detailsproduct.image}
                alt="Product image"
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
          <div className="p-6">
            <h4 className="font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {detailsproduct?.title}
            </h4>
            <span className="text-3xl font-bold text-black dark:text-black">
              {detailsproduct?.price}$
            </span>
            <button className="mt-4 flex items-center justify-center bg-gray-900 px-4 py-2 text-sm text-white rounded-md transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black my-8 p-6">
          <h4 className="font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Product Description
          </h4>
          <p className="mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {}
          </p>
          <div className="mt-6">
            <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Product Details
            </h5>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>Feature 1: {}</li>
              <li>Feature 2: {}</li>
              <li>Feature 3: {}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Details;
