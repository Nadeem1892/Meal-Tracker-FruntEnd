import React from "react";
import { Link } from "react-router-dom";

function Addmeal() {
  return (
    <div className="flex items-center justify-center w-full mt-0 lg:mt-32">
      <div className="flex  flex-col items-center w-full max-w-md p-8 space-y-6  bg-white rounded-lg shadow-2xl h-[100vh] lg:h-full ">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">Add New Meal</h2>
        </div>

        <form
          className="flex flex-col w-full gap-2 mt-5 space-y-2"
          action="#"
          method="POST"
        >
          {/* Meal Name Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Meal Name
            </label>
            <input
              id="mealName"
              name="mealName"
              type="text"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your meal name"
            />
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
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your calories"
            />
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
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your protein"
              />
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
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Enter your carbs"
              />
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
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your fat"
            />
          </div>

          {/* hight Input */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              type
            </label>
            <select
              id="small"
              class="mt-1 block w-full h-10 bg-white border border-slate-300 rounded-md text-md shadow-sm text-slate-500
                  focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option selected>Choose a type</option>
              <option value="US">Breakfast</option>
              <option value="CA">Lunch</option>
              <option value="FR">Dinner</option>
            </select>
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
      </div>
    </div>
  );
}

export default Addmeal;
