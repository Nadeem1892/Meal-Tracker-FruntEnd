import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/meal-treaker-logo.png";

function Login({ formikProps }) {
  const { values, setFieldValue, errors, isSubmitting, touched} = formikProps;

  console.log(formikProps);

  return (
    <div className="flex items-center justify-center bg-gray-100 h-[100vh] lg:h-screen">
      <div className="flex flex-col items-center w-full h-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg lg:h-fit">
        <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 text-[30px] flex items-center gap-2 font-semibold font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626]">
          Meal Tracker
          <img src={logo} alt="" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626] ">
            Login
          </h2>
        </div>

        <div className="flex flex-col w-full gap-8">
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
              onChange={(e) => setFieldValue("email", e.target?.value)}
              value={values.email}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                touched.email && errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {touched.email && errors.email ? (
              <div className="absolute text-sm text-red-600">
                {errors.email}
              </div>
            ) : null}
          </div>

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
              onChange={(e) => setFieldValue("password", e.target.value)}
              value={values.password}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                touched.password && errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
            {touched.password && errors.password ? (
              <div className="absolute text-sm text-red-600">
                {errors.password}
              </div>
            ) : null}
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="remember_me"
              className="block ml-2 text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            disabled={isSubmitting?true:false}
            className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
          >
            {isSubmitting?"Submit...":"Login"}
           
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <Link
            to={"register"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
