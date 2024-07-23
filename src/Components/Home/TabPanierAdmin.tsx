import { getCategoryById } from "@/Service/category";
import { deleteProduct } from "@/Service/User";
import { Product } from "@/Utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type TabproductProps = {
  product: Product | null;
  onDelete: (id: number) => void;
};

const TabPanierAdmin: React.FC<TabproductProps> = ({ product, onDelete }) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [randomPrice, setRandomPrice] = useState<number>(0);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);

  useEffect(() => {
    const fetchCategory = async () => {
      if (product && product.categoryId) {
        try {
          const category = await getCategoryById(product.categoryId.toString());
          setCategoryName(category.name);
        } catch (error) {
          console.error("Error fetching category:", error);
        }
      }
    };

    if (product) {
      fetchCategory();

      const price = generateRandomNumber(10, 100);
      setRandomPrice(price);
      setDiscountedPrice(price * 1.2);
    }
  }, [product]);

  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleDelete = async () => {
    if (product) {
      try {
        await deleteProduct(product.id);
        onDelete(product.id);
        toast.success("Product successfully removed!");
      } catch (error) {
        console.error("Error while deleting the product:", error);
        toast.success("Product successfully removed!");
      }
    }
  };

  if (!product) {
    return null;
  }

  return (
    <div className="relative flex flex-col max-w-sm w-full bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden m-4">
      <a href="#" className="relative">
        <Link href={`/Home/${product.id}`}>
          <img
            className="w-full h-64 object-cover"
            src={product.image}
            alt={product.title}
          />{" "}
        </Link>

        <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
          39% OFF
        </span>
      </a>
      <div className="flex flex-col justify-between p-4 h-48">
        <div>
          <a href="#">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              {product.title}
            </h5>
          </a>
          <p className="text-gray-700 mb-2">
            <span className="text-xl font-bold text-gray-900">
              {randomPrice} $
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              {discountedPrice} $
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <button
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-4 w-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="ml-2 text-xs font-semibold text-yellow-500 bg-yellow-200 px-2 py-0.5 rounded">
              5.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanierAdmin;
