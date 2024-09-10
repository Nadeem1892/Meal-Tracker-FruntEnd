import React from 'react'

function AddChallenge() {
  return (
    <div className="flex items-center justify-center w-full mt-0 lg:mt-32">
    <div className="flex  flex-col items-center w-full max-w-md p-8 space-y-6  bg-white rounded-lg shadow-2xl h-[100vh] lg:h-full ">
      <div className="flex flex-col items-center mt-10 mb-10 lg:mt-0 lg:mb-0">
        <h2 className="text-2xl font-bold text-gray-800">Add New Challenge</h2>
      </div>

      <form
        className="flex flex-col w-full gap-2 mt-5 space-y-2"
        action="#"
        method="POST"
      >
        {/* Meal Name Input */}
        <div>
          <label
            htmlFor="challengeName"
            className="block text-sm font-medium text-gray-700"
          >
            Challenge Name
          </label>
          <input
            id="challengeName"
            name="challengeName"
            type="text"
            required
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Enter your challenge name"
          />
        </div>

        {/* Calories Input */}
        <div>
  <label
    htmlFor="description"
    className="block text-sm font-medium text-gray-700"
  >
    Description
  </label>
  <textarea
    id="description"
    name="description"
    required
    className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    placeholder="Enter your description"
    rows="4" // You can adjust the rows attribute as needed
  ></textarea>
</div>

        {/* other Input */}
        <div className="flex w-full gap-1">
          {/* Protein Input */}
          <div className='w-full'>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              class="mt-1 block lg:w-full w-40 px-3 py-2 h-9  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your start date"
            />
          </div>

          {/* date Input */}
          <div className='w-full'>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              required
              class="mt-1 block lg:w-full w-40 px-3 py-2 h-9  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Enter your end date"
            />
          </div>
        </div>

       

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="block w-full px-3 py-2 mt-1 text-center text-white border rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-700"
          >
            Add Challenge
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddChallenge