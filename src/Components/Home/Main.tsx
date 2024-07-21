import { Product } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import Tabproduct from "./TabPanier";
import SearchBar from "../SearchBar/SearchBar";
import { AllProduct, searchProduct, getAllCategories } from "@/Service/Product";
import { CarouselDefault } from "../Carousel/Caroousel";

interface Category {
  id: number;
  name: string;
}

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    AllProduct().then((res) => {
      setProducts(res.product);
      setFilteredProducts(res.product);
    });

    getAllCategories().then((res) => {
      setCategories(res.categories);
    });
  }, [isReloadNeeded]);

  const handleSearch = async (searchText: string, category: string) => {
    if (searchText.trim() === "" && category === "All") {
      setFilteredProducts(products);
    } else {
      const result = await searchProduct(searchText, category);
      setFilteredProducts(result);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-400 leading-tight">
            Welcome to PixelMarket
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-100">
            Your trusted platform for buying and collecting high-quality
            figurines
          </p>

          <a
            href="#"
            className="mt-6 inline-block bg-gray-900 text-white text-base md:text-lg font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in duration-150"
          >
            Start Now
          </a>
        </div>
      </div>

      <div className="mt-12 w-full px-4">
        <CarouselDefault />
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Figurines:</h1>

        <div className="mb-6">
          <SearchBar categories={categories} onSearch={handleSearch} />
        </div>

        <CardContainer>
          {filteredProducts.map((product) => (
            <Tabproduct key={product.id} product={product} />
          ))}
        </CardContainer>
      </div>
    </main>
  );
};

export default Main;
