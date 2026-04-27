import React from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {nanoid} from "nanoid";
const RegisterUser = () => {
const navigate = useNavigate();
  let { setRegisterUser } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setRegisterUser((prev) => [...prev, { ...data, id: nanoid() }]);
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-8 space-y-6 bg-white py-8 px-6 shadow-xl ring-1 ring-gray-900/5 rounded-2xl"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              id="name"
              type="text"
              className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 hover:shadow-md"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              type="email"
              className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 hover:shadow-md"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Name is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters is required",
                },
              })}
              id="password"
              type="password"
              className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 hover:shadow-md"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign in
            </button>
          </div>
          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                onClick={() => navigate("/")}
                className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
