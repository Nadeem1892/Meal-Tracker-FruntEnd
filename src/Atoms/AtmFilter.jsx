import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function AtmFilter({toggleDropdown, isDropdownOpen, setIsDropdownOpen}) {
  return (
    <div className="relative flex items-center justify-center p-4">
    <button
      onClick={toggleDropdown}
      className="text-white bg-sky-500 hover:bg-primary-800  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      	Meal Type
   {
    isDropdownOpen?<MdKeyboardArrowUp className="text-[20px] text-white"/>:<MdKeyboardArrowDown className="text-[20px] text-white"/>
   }
    </button>

    {isDropdownOpen && (
      <div
        id="dropdown"
        className="absolute z-10 w-56 p-3 text-white bg-gray-700 rounded-lg shadow left-4 top-16"
      >
        <h6 className="mb-3 text-sm font-medium text-white">
        Type
        </h6>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-100"
            >
              Breakfast (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-100"
            >
              Lunch (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-100"
            >
              Dinner (56)
            </label>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    )}
  </div>

  )
}

export default AtmFilter