import React from "react";
import { useAddMaelMutation } from "../../../Service/FatchApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Addmeal() {
  const [addMeal, { isLoading }] = useAddMaelMutation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      meal_name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      type: "",
    },

    validationSchema: Yup.object({
      meal_name: Yup.string().required("Meal name is required").trim(),

      calories: Yup.string().trim().required("Calories are required"),

      protein: Yup.string().trim().required("Protein is required"),

      carbs: Yup.string().trim().required("Carbs are required"),

      fat: Yup.string().trim().required("Fat is required"),

      type: Yup.string()
        .trim()
        .required("Meal type is required")
        .oneOf(["Breakfast", "Lunch", "Dinner"], "Invalid type"),
    }),

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const addMealDate = await addMeal(values).unwrap();
        const { status, message } = addMealDate;
        console.log(addMealDate);
        if (status === "OK") {
          toast.success(message);

          navigate("/user/meal-history", { replace: true });
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
    },
  });

  return (
    <div className="flex items-center justify-center w-full mt-0 lg:mt-32">
      <div className="flex  flex-col items-center w-full max-w-md p-8 space-y-6  bg-white rounded-lg shadow-2xl h-[100vh] lg:h-full ">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">Add New Meal</h2>
        </div>

        <form
          className="flex flex-col w-full gap-2 mt-5 space-y-2"
          onSubmit={formik.handleSubmit}
        >
          {formik.errors.api && (
            <div className="absolute text-red-600">{formik.errors.api}</div>
          )}
          {/* Meal Name Input */}
          <div>
            <label
              htmlFor="mealName"
              className="block text-sm font-medium text-gray-700"
            >
              Meal Name
            </label>

            <input
              id="mealName"
              name="meal_name"
              type="text"
              value={formik.values.meal_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.meal_name && formik.errors.meal_name
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter your meal name"
            />
            {formik.touched.meal_name && formik.errors.meal_name && (
              <span className="absolute text-xs text-red-600">
                {formik.errors.meal_name}
              </span>
            )}
          </div>

          {/* Calories Input */}
          <div>
            <label
              htmlFor="calories"
              className="block text-sm font-medium text-gray-700"
            >
              Calories
            </label>
            <input
              id="calories"
              name="calories"
              type="text"
              value={formik.values.calories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.calories && formik.errors.calories
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter your calories"
            />
            {formik.touched.calories && formik.errors.calories && (
              <span className="absolute text-xs text-red-600">
                {formik.errors.calories}
              </span>
            )}
          </div>

          {/* other Input */}
          <div className="flex gap-1">
            {/* Protein Input */}
            <div>
              <label
                htmlFor="protein"
                className="block text-sm font-medium text-gray-700"
              >
                Protein
              </label>
              <input
                id="protein"
                name="protein"
                type="text"
                value={formik.values.protein}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                  formik.touched.protein && formik.errors.protein
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your protein"
              />
              {formik.touched.protein && formik.errors.protein && (
                <span className="absolute text-xs text-red-600">
                  {formik.errors.protein}
                </span>
              )}
            </div>

            {/* Carbs Input */}
            <div>
              <label
                htmlFor="carbs"
                className="block text-sm font-medium text-gray-700"
              >
                Carbs
              </label>
              <input
                id="carbs"
                name="carbs"
                type="text"
                value={formik.values.carbs}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                  formik.touched.carbs && formik.errors.carbs
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your carbs"
              />
              {formik.touched.carbs && formik.errors.carbs && (
                <span className="absolute text-xs text-red-600">
                  {formik.errors.carbs}
                </span>
              )}
            </div>
          </div>

          {/* Fat Input */}
          <div>
            <label
              htmlFor="fat"
              className="block text-sm font-medium text-gray-700"
            >
              Fat
            </label>
            <input
              id="fat"
              name="fat"
              type="text"
              value={formik.values.fat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.fat && formik.errors.fat ? "border-red-500" : ""
              }`}
              placeholder="Enter your fat"
            />
            {formik.touched.fat && formik.errors.fat && (
              <span className="absolute text-xs text-red-600">
                {formik.errors.fat}
              </span>
            )}
          </div>

          {/* type Input */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              type
            </label>
            <select
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                formik.touched.type && formik.errors.type
                  ? "border-red-500"
                  : ""
              }`}
            >
              <option value="" disabled>
                Choose a type
              </option>{" "}
              {/* Placeholder */}
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            {formik.touched.type && formik.errors.type && (
              <span className="absolute text-xs text-red-600">
                {formik.errors.type}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
            >
              {isLoading ? "Adding..." : "Add Meal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addmeal;
