import React from "react";
import logo from "../Assets/meal-treaker-logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 h-[90vh] lg:h-screen">
      <div className="flex flex-col items-center w-full h-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg lg:h-fit">
        <div className="mt-1 mb-1 lg:mt-0 lg:mb-0 text-[30px] flex items-center gap-2 font-semibold font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626]">
          Meal Tracker
          <img src={logo} alt="" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
        </div>

        <form
          className="flex flex-col w-full gap-2 mt-5 space-y-2"
          action="#"
          method="POST"
        >
          {/* username Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your email"
            />
          </div>

          {/* other Input */}
          <div className="flex gap-1">
            {/* Age Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your Age"
              />
            </div>

             {/* Weight Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Weight
              </label>
              <input
                id="weight"
                name="weight"
                type="text"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your Weight"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex gap-1">
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* hight Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Height
            </label>
            <input
              id="height"
              name="height"
              type="height"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your Height"
            />
          </div>

          {/* Submit Button */}
          <div>
            <Link
              to={"register"}
              type="submit"
              className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
            >
              Sign Up
            </Link>
          </div>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <Link
            to={"register"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
