import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import AtmFilter from "../../../Atoms/AtmFilter";

function MealsListing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const userdata = useGetUserTransectionQuery();
  // const [deleteUserTransaction] = useDeleteUserTransactionMutation();

  const userdata = [
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
    {
      _id: "1",
      amount: 1000,
      type: "expence",
      remark: "abc",
    },
  ];

  // if (userdata.isLoading) {
  //   return (
  //     <div className="text-center">
  //       <div role="status">
  //         <svg
  //           aria-hidden="true"
  //           className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
  //           viewBox="0 0 100 101"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
  //             fill="currentFill"
  //           />
  //         </svg>
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="w-full py-0 lg:py-0">
      <div className="w-full mx-auto lg:px-10">
        {/* <!-- Start coding here --> */}
        <div className="bg-gray-800 shadow-md md:w-full lg:w-full sm:rounded-lg">
          <div className="flex flex-col items-center justify-between px-4 md:flex-row ">
            <div className="flex items-center justify-between w-full">
              {/* Filter */}
              <AtmFilter
                toggleDropdown={toggleDropdown}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
              />

              {/* Add meal */}
              <Link
                to={"/user/add-meal"}
                className="flex items-center justify-center w-24 h-10 text-white rounded-md bg-sky-500 "
              >
                Add Meal
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-400 uppercase bg-gray-600">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Meal Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Calories
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Protein
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Carbs
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Fat
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((user) => (
                  <tr key={user._id} className="border-b border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-500 space-nowrap"
                    >
                      {user.amount}
                    </th>
                    <td className="px-4 py-3">{user.type}</td>
                    <td className="px-4 py-3">{user.remark}</td>
                    <td className="px-4 py-3">{user.remark}</td>
                    <td className="px-4 py-3">{user.remark}</td>
                    <td className="px-4 py-3">{user.remark}</td>
                    <td className="flex items-center px-4 py-3 ">
                      <div className="flex gap-3">
                        <Link
                          to={`edit-transaction/${user._id}`}
                          className="p-1 rounded-full cursor-pointer bg-sky-500 ite"
                        >
                          <MdEditNote className="text-white" />
                        </Link>
                        <div
                          //   onClick={() => handleDelete(user._id)}
                          className="p-1 bg-red-500 rounded-full cursor-pointer ite"
                        >
                          <RiDeleteBin5Line className="text-white" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="flex gap-2 text-sm font-normal text-gray-300">
              Showing
              <span className="font-semibold text-gray-500 ">1-10</span>
              of
              <span className="font-semibold text-gray-500 ">1000</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500  rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <MdArrowBackIos />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  aria-current="page"
                  className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight text-white border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500  rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <MdArrowForwardIos />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default MealsListing;
