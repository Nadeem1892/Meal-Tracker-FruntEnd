import React, { useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import logo from "../Assets/meal-treaker-logo.png";
import * as Yup from "yup"
import { useLoginMutation } from "../Service/FatchApi";
import {useFormik} from "formik"
import { toast } from "react-toastify";

function Login() {

  const [login,{isLoading}] = useLoginMutation();
  const navigate = useNavigate();

 useEffect(()=>{
  const token = localStorage.getItem("auth")
  if (token) {
    navigate("/user",{replace:true})
  }
 },[navigate])


  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",

    },
validationSchema: Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(4, "Password must be at least 4 characters").required("Required"),
}),
onSubmit: async (values, { setSubmitting, setErrors }) => {
  try {
    const user = await login(values).unwrap()
   
    const { status, message, data } = user;
    if (status === "OK") {
      toast.success(message)
      localStorage.setItem("auth", data.token)
      navigate("/user",{replace:true})
    } else {
      // Invalid login details
      toast.error(message);
    }
   
  } catch (error) {
    setSubmitting(false);
    if (error.user) {
      // Server responded with a status other than 200 range
      setErrors({ api: error.message });
    } else {
      // Network error or other issues
      setErrors({ api: "An error occurred. Please try again." });
    }

  }
}
  })


  return (
    <div className="flex items-center justify-center bg-gray-100 h-[90vh] lg:h-screen">
      <div className="flex flex-col items-center w-full h-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg lg:h-fit">
        <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 text-[30px] flex items-center gap-2 font-semibold font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626]">
          Meal Tracker
          <img src={logo} alt="" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>

        <form
          className="flex flex-col gap-3 space-y-4 mt-9"
          onSubmit={formik.handleSubmit}
        >
          {formik.errors.api && (
            <div className="text-red-600">{formik.errors.api}</div>
          )}

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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="absolute text-sm text-red-600">{formik.errors.email}</div>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
            />
             {formik.touched.password && formik.errors.password ? (
              <div className="absolute text-sm text-red-600">{formik.errors.password}</div>
            ) : null}

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
          <div>
            <button
              type="submit"
              disabled={isLoading?true:false}
              className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
            >
              {isLoading?"Login...":"Login"}
            </button>
          </div>
        </form>

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
