"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "@/Service/Auth";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setError("");
    try {
      const res = await login(data);
      if (res.status === 200) {
        window.localStorage.setItem("jwt", res.data.access_token);
        toast.success("Connexion réussie");
        push("/Home");
      }
    } catch (e) {
      console.log("error", e);
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-900 text-gray-900">
      <Toaster /> {/* Add this line to render the toaster container */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", { required: "Ce champ est requis" })}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password", { required: "Ce champ est requis" })}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div>
              <a
                href="/Auth/Register"
                className="text-sm text-indigo-600 hover:underline"
              >
                {" "}
                No account yet?
              </a>
            </div>
            <div>
              <a
                href="/Home"
                className="text-sm text-indigo-600 hover:underline"
              >
                Bug Login ?
              </a>
            </div>
          </div>

          {error && <p className="text-red-600 italic">{error}</p>}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
function push(arg0: string) {
  throw new Error("Function not implemented.");
}
