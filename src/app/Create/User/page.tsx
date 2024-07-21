"use client";

import { registerr } from "@/Service/Auth";
import { AuthProps, AuthUpdateProps } from "@/Utils/AuthTypes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterProps = {
  registerProps?: AuthProps;
  setIsReloadNeeded: any;
  handleClose: any;
};

export const UsersForm = ({
  setIsReloadNeeded,
  handleClose,
}: RegisterProps) => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthUpdateProps>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthUpdateProps> = (data) =>
    registerr(data)
      .then((res) => {
        push("/Admin");
      })
      .catch((e) => console.log(e));

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-900  text-gray-900">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Create Users
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("email", {
                  required: "This is required",
                  maxLength: { value: 40, message: "Email Too big  " },
                  minLength: { value: 1, message: "Email Too low " },
                })}
              />
              {errors?.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                type="firstname"
                autoComplete="firstname"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("firstname", {
                  required: "This is required",
                  maxLength: { value: 10, message: "Firstname Too big  " },
                  minLength: { value: 2, message: "Firstname Too low " },
                })}
              />
              {errors?.firstname && (
                <p className="text-red-500">{errors.firstname.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                type="lastname"
                autoComplete="lastname"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("lastname", {
                  required: "This is required",
                  maxLength: { value: 10, message: "LastName Too big  " },
                  minLength: { value: 2, message: "LastName Too low " },
                })}
              />
              {errors?.lastname && (
                <p className="text-red-500">{errors.lastname.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="pseudo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pseudo
            </label>
            <div className="mt-2">
              <input
                id="pseudo"
                type="pseudo"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("pseudo", {
                  required: "This is required",
                  maxLength: { value: 20, message: "Pseudo Too big  " },
                  minLength: { value: 2, message: "Pseudo Too low " },
                })}
              />
              {errors?.pseudo && (
                <p className="text-red-500">{errors.pseudo.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                type="address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("address", {
                  required: "This is required",
                  maxLength: { value: 20, message: "Address Too big  " },
                  minLength: { value: 2, message: "Address Too low " },
                })}
              />
              {errors?.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("password", {
                  required: "This is required",
                  maxLength: { value: 25, message: "Password Too big  " },
                  minLength: { value: 2, message: "Password Too low " },
                })}
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                type="tel"
                autoComplete="current-phone"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                {...register("phone", {
                  required: "This is required",
                  maxLength: { value: 25, message: "Phone number too long" },
                  minLength: { value: 2, message: "Phone number too short" },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors?.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
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

export default UsersForm;
