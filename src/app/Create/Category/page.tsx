"use client";

import { categoryNew } from "@/Service/category";
import { AuthProps } from "@/Utils/AuthTypes";
import { Category } from "@/Utils/Category";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CategoryProps = {
  registerProps?: Category;
  setIsReloadNeeded: any;
  handleClose: any;
};

export const CategoryForm = ({
  setIsReloadNeeded,
  handleClose,
}: CategoryProps) => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Category>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Category> = (data) =>
    categoryNew(data)
      .then((res) => {
        push("/Admin");
      })
      .catch((e) => console.log(e));

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-900  text-gray-900">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Create Category
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("name", {
                  required: "This is required",
                  maxLength: { value: 20, message: "name Too big  " },
                  minLength: { value: 2, message: "name Too low " },
                })}
              />
              {errors?.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <a
                href="/Admin"
                className="text-sm text-indigo-600 hover:underline"
              >
                Go Panel Admin ?
              </a>
            </div>
          </div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
