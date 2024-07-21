"use client";
import { AllCategory } from "@/Service/category";
import { productNew } from "@/Service/Product";
import { Product } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ProductProps = {
  setIsReloadNeeded: any;
  handleClose: any;
};

type Category = {
  id: number;
  name: string;
};

export const ProductForm = ({
  setIsReloadNeeded,
  handleClose,
}: ProductProps) => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    mode: "onChange",
  });

  useEffect(() => {
    AllCategory()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      });
  }, []);

  const onSubmit: SubmitHandler<Product> = (data) => {
    productNew(data)
      .then((res) => {
        push("/Admin");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-900 text-gray-900">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Create Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                type="text"
                autoComplete="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("title", {
                  required: "This is required",
                  maxLength: { value: 40, message: "Title too big" },
                  minLength: { value: 1, message: "Title too low" },
                })}
              />
              {errors?.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2">
              <input
                id="image"
                type="text"
                autoComplete="image"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("image", {
                  required: "This is required",
                  maxLength: { value: 10000000, message: "Image URL too big" },
                  minLength: { value: 1, message: "Image URL too low" },
                })}
              />
              {errors?.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                type="text"
                autoComplete="price"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("price", {
                  required: "This is required",
                  maxLength: { value: 10, message: "Price too big" },
                  minLength: { value: 2, message: "Price too low" },
                })}
              />
              {errors?.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Status
            </label>
            <div className="mt-2">
              <input
                id="status"
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("status", {
                  required: "This is required",
                  maxLength: { value: 20, message: "Status too big" },
                  minLength: { value: 2, message: "Status too low" },
                })}
              />
              {errors?.status && (
                <p className="text-red-500">{errors.status.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="categoryId"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("categoryId", {
                  required: "This is required",
                })}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors?.categoryId && (
                <p className="text-red-500">{errors.categoryId.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between"></div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Create"
            />
          </div>
          <div>
            <a
              href="/Admin"
              className="text-sm text-indigo-600 hover:underline"
            >
              Go Panel Admin ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
