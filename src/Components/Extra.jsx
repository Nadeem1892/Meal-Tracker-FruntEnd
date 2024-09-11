<div className="flex items-center justify-center bg-gray-100 h-[90vh] lg:h-screen">
<div className="flex flex-col items-center w-full h-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg ">
  <div className="mt-1 mb-1 lg:mt-0 lg:mb-0 text-[30px] flex items-center gap-2 font-semibold font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#ea580c] to-[#dc2626]">
    Meal Tracker
    <img src={logo} alt="" className="w-12 h-12 " />
  </div>
  <div className="flex flex-col items-center">
    <h2 className="text-xl font-bold text-gray-800">
      Create an Account
    </h2>
  </div>

  <form
    className="flex flex-col w-full gap-2 mt-5 space-y-2"
    onSubmit={formik.handleSubmit}
  >
    {formik.errors.api && (
      <div className="text-red-600">{formik.errors.api}</div>
    )}
     {/* other Input */}
     <div className="flex gap-1">

      {/* username Input */}
    <div>
      <label
        htmlFor="userName"
        className="block text-sm font-medium text-gray-700"
      >
        User Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        placeholder="Enter your username"
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-sm text-red-600">{formik.errors.name}</div>
      ) : null}
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        placeholder="Enter your email"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-sm text-red-600">{formik.errors.email}</div>
      ) : null}
    </div>

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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Enter your Age"
        />
        {formik.touched.age && formik.errors.age ? (
        <div className="text-sm text-red-600">{formik.errors.age}</div>
      ) : null}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.weight}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Enter your Weight"
        />
        {formik.touched.weight && formik.errors.weight ? (
        <div className="text-sm text-red-600">{formik.errors.weight}</div>
      ) : null}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password ? (
        <div className="text-sm text-red-600">{formik.errors.password}</div>
      ) : null}
      </div>

      {/* Confirm Password Input */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
         Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Enter your password"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="text-sm text-red-600">{formik.errors.confirmPassword}</div>
      ) : null}
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.height}
        className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        placeholder="Enter your Height"
      />
      {formik.touched.height && formik.errors.height ? (
        <div className="text-sm text-red-600">{formik.errors.height}</div>
      ) : null}
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
    <Link
      to={"register"}
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Sign in here
    </Link>
  </p>
</div>
</div>