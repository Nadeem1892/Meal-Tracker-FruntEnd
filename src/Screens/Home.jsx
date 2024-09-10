import React from "react";
import { FaWeightScale } from "react-icons/fa6";
import { MdOutlineFiberNew } from "react-icons/md";

function Home() {
  return (
    <div className="grid grid-cols-1 gap-5 px-2 py-5 mb-10 sm:grid-cols-1 md:grid-cols-2 lg:px-5">
      {/* 1 */}
      <div className=" h-72">
        {/* Heading */}
        <div className="flex items-center justify-between py-2">
          <h1 className="font-semibold text-slate-600 text-[20px]">
            Body Overview
          </h1>
          <h1 className="">Body Overview</h1>
        </div>
        {/* container */}
        <div className="flex flex-col items-center justify-center w-full gap-5 p-5 bg-gray-800 h-72 rounded-xl">
          {/* Details */}
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-slate-400 text-[20px] lg:text-[30px]">
              You've gain 2Kg in a month keep it up!
            </p>
            <span className="text-slate-400">still need to gain</span>
            <h2 className="lg:text-[40px] text-[30px] font-semibold text-slate-400">
              950 kcol
            </h2>
          </div>
          {/* progress bar */}
          <div className="flex items-center justify-around w-full gap-5 lg:gap-16">
            <div className="relative w-20 h-20">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-gray-200 stroke-current dark:text-neutral-700"
                  strokeWidth="2"
                ></circle>
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-green-400 stroke-current"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Percentage Text */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span className="text-lg font-bold text-center text-green-400 lg:text-2xl">
                  35%
                </span>
              </div>
            </div>

            <div className="relative w-20 h-20">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-gray-200 stroke-current dark:text-neutral-700"
                  strokeWidth="2"
                ></circle>
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-yellow-400 stroke-current"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Percentage Text */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span className="text-xl font-bold text-center text-yellow-400 lg:text-2xl">
                  35%
                </span>
              </div>
            </div>

            <div className="relative w-20 h-20">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-gray-200 stroke-current dark:text-neutral-700"
                  strokeWidth="2"
                ></circle>
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-red-400 stroke-current"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Percentage Text */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span className="text-xl font-bold text-center text-red-400 lg:text-2xl">
                  35%
                </span>
              </div>
            </div>

            <div className="relative w-20 h-20">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="text-gray-200 stroke-current dark:text-neutral-700"
                  strokeWidth="2"
                ></circle>
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-sky-400"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Percentage Text */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span className="text-xl font-bold text-center text-sky-400 lg:text-2xl">
                  35%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mt-10 lg:mt-0 h-72">
        {/* Heading */}
        <div className="flex items-center justify-between py-2">
          <h1 className="font-semibold text-slate-600 text-[20px]">Analysis</h1>
          <h1 className="">Body Overview</h1>
        </div>
        {/* container */}
        <div className="flex flex-col justify-center w-full gap-4 px-5 bg-gray-800 h-72 rounded-xl">
          {/* progress bar */}

          <div class="flex justify-between">
            <span class="text-base font-medium text-white">Protein</span>
            <span class="text-sm font-medium text-white">80%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-400 h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>

          <div class="flex justify-between">
            <span class="text-base font-medium text-white">Fat</span>
            <span class="text-sm font-medium text-white">30%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-red-400 h-2.5 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>

          <div class="flex justify-between">
            <span class="text-base font-medium text-white">Carbs</span>
            <span class="text-sm font-medium text-white">60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-sky-400 h-2.5 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>

          <div class="flex justify-between">
            <span class="text-base font-medium text-white">Calories</span>
            <span class="text-sm font-medium text-white">20%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-orange-400 h-2.5 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="mt-10 lg:mt-10 h-72">
        {/* Heading */}
        <div className="flex items-center justify-between py-2">
          <h1 className="font-semibold text-slate-600 text-[20px]">
            My Daily Target
          </h1>
          <h1 className="">Body Overview</h1>
        </div>
        {/* container */}
        <div className="grid items-center grid-cols-2 gap-4 px-5 py-2 bg-gray-800 h-72 rounded-xl">
          {/* progress bar */}
          <div className="flex flex-col gap-5 p-2 bg-green-400 rounded-l-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Weight
              </h1>
              <FaWeightScale className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                62Kg
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 rounded-r-lg bg-sky-400 lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Fat
              </h1>
              <FaWeightScale className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                62Kg
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 bg-orange-400 rounded-l-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Weight
              </h1>
              <FaWeightScale className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                62Kg
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 bg-purple-400 rounded-r-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Weight
              </h1>
              <FaWeightScale className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                62Kg
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="mt-10 lg:mt-10 h-72">
        {/* Heading */}
        <div className="flex items-center justify-between py-2">
          <h1 className="font-semibold text-slate-600 text-[20px]">
            My Meal Plan
          </h1>
          <MdOutlineFiberNew className="text-red-500 text-[30px] " />
        </div>
        {/* container */}
        <div className="grid items-center gap-4 px-5 py-3 bg-gray-800 lg:py-2 md:grid-cols-1 lg:grid-cols-2 lg:h-72 md:h-auto rounded-xl">
          {/* progress bar */}
          <div className="flex flex-col gap-5 p-2 bg-red-500 rounded-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Keto Meal Plan
              </h1>
              <MdOutlineFiberNew className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <button className="lg:text-[15px] text-[12px] px-4 rounded bg-sky-500 font-semibold text-white">
                View
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 bg-green-500 rounded-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Vegan Meal Plan
              </h1>
              <MdOutlineFiberNew className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <button className="lg:text-[15px] text-[12px] px-4 rounded bg-sky-500 font-semibold text-white">
                View
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 rounded-lg bg-sky-500 lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Muscle Gain Meal Plan
              </h1>
              <MdOutlineFiberNew className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[15px] font-semibold text-white">
                My Weight
              </h1>
              <button className="lg:text-[15px] text-[12px] px-4 rounded bg-sky-500 font-semibold text-white">
                View
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-2 bg-purple-500 rounded-lg lg:gap-2">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-[25px] text-[20px] text-white  font-bold">
                Weight Loss Meal Plan
              </h1>
              <MdOutlineFiberNew className="text-white text-[25px] " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="lg:text-[20px] text-[10px] font-semibold text-white">
                My Weight
              </h1>
              <button className="lg:text-[15px] text-[12px] px-4 rounded bg-sky-500 font-semibold text-white">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
