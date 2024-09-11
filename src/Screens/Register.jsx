import React from "react";
import logo from "../Assets/meal-treaker-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { useRegisterMutation } from "../Service/FatchApi";

const Register = () => {
const [register] = useRegisterMutation()

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      age:"",
      weight: "",
      height:"",
      password:"",
      confirmPassword:""
    },
    validationSchema: Yup.object({
      name : Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    age: Yup.number()
      .typeError('Age must be a number')
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .required('Age is required'),
    weight: Yup.string()
      .required('Weight is required'),
    height: Yup.string()
      .required('Height is required'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password must be at least 4 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
     
      try {
        const user = await register(values).unwrap();
        const { status, message, data } = user;
        console.log(user)
        if (status === "OK") {
          toast.success(message);
          localStorage.setItem("auth", data.token);
          navigate("/user", { replace: true });
        } else {
          toast.error(message);
        }
      } catch (error) {
        setSubmitting(false);
        if (error.user) {
          setErrors({ api: error.message });
        } else {
          setErrors({ api: "An error occurred. Please try again." });
        }
      }
    }
  })

  return (

    <div className="flex items-center justify-center bg-gray-100 h-[90vh] lg:h-screen">
    <div className="flex flex-col items-center w-full h-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg lg:h-fit ">
      
      {/* Title Section */}
      <div className="mt-1 mb-1 lg:mt-0 lg:mb-0 text-[30px] flex items-center gap-2 font-semibold font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626]">
        Meal Tracker
        <img src={logo} alt="Logo" className="w-12 h-12 " />
      </div>
      
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800">Create an Account</h2>
      </div>
  
      {/* Form */}
      <form className="flex flex-col w-full gap-3 mt-5 space-y-2" onSubmit={formik.handleSubmit}>
        {formik.errors.api && <div className="absolute text-red-600">{formik.errors.api}</div>}
  
        <div className="flex gap-1">
          {/* Username Input */}
          <div className="flex-1">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter your username"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="absolute text-xs text-red-600">{formik.errors.name}</span>
            )}
          </div>
  
          {/* Email Input */}
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            {formik.touched.email && formik.errors.email && (
              <span className="absolute text-xs text-red-600">{formik.errors.email}</span>
            )}
          </div>
        </div>
  
        <div className="flex gap-1">
          {/* Age Input */}
          <div className="flex-1">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.age && formik.errors.age ? 'border-red-500' : ''
              }`}
              placeholder="Enter your Age"
            />
            {formik.touched.age && formik.errors.age && (
              <span className="absolute text-xs text-red-600">{formik.errors.age}</span>
            )}
          </div>
  
          {/* Weight Input */}
          <div className="flex-1">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight
            </label>
            <input
              id="weight"
              name="weight"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.weight}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.weight && formik.errors.weight ? 'border-red-500' : ''
              }`}
              placeholder="Enter your Weight"
            />
            {formik.touched.weight && formik.errors.weight && (
              <span className="absolute text-xs text-red-600">{formik.errors.weight}</span>
            )}
          </div>
        </div>
  
        <div className="flex gap-1">
          {/* Password Input */}
          <div className="flex-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
            {formik.touched.password && formik.errors.password && (
              <span className="absolute text-xs text-red-600">{formik.errors.password}</span>
            )}
          </div>
  
          {/* Confirm Password Input */}
          <div className="flex-1">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''
              }`}
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="absolute text-xs text-red-600">{formik.errors.confirmPassword}</span>
            )}
          </div>
        </div>
  
        {/* Height Input */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Height
          </label>
          <input
            id="height"
            name="height"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.height}
            className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
              formik.touched.height && formik.errors.height ? 'border-red-500' : ''
            }`}
            placeholder="Enter your Height"
          />
          {formik.touched.height && formik.errors.height && (
            <span className="absolute text-xs text-red-600">{formik.errors.height}</span>
          )}
        </div>
  
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
          >
            Sign Up
          </button>
        </div>
      </form>
  
      {/* Register Link */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <Link to={"register"} className="font-medium text-indigo-600 hover:text-indigo-500">
          Sign in here
        </Link>
      </p>
    </div>
  </div>
  

  );
};

export default Register;
