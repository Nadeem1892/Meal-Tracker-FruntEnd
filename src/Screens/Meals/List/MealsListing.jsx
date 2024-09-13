import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import CalendarComponent from "../../../Components/CalendarComponent ";
import { useGetMealByDateMutation } from "../../../Service/FatchApi";
import { format } from 'date-fns'; // Import the format function
function MealsListing() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const [getMealByDate, { data}] = useGetMealByDateMutation();

   console.log(data)
 
  // Handle date change and fetch data
  const handleDateChange = async (date) => {
    setValue(date);
    try {
      await getMealByDate(formatDate(date)).unwrap();
    } catch (error) {
      
    }

  }
      // Function to format the date to DD-MM-YYYY
  const formatDate = (date) => {
    return format(date, 'dd-MM-yyyy');
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="w-full mt-20">
      <div className="w-full mx-auto lg:px-10">
        {/* <!-- Start coding here --> */}
        <div className="flex flex-col items-center justify-center w-full shadow-md lg:w-full sm:rounded-lg">

          <div className="flex flex-col justify-between px-4 md:flex-row ">
            <div className="flex items-center justify-between w-full gap-4">
              {/* Filter */}
              {/* <AtmFilter
                toggleDropdown={toggleDropdown}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
              /> */}

     <button
      onClick={toggleDropdown}
      className="text-white bg-sky-500 hover:bg-primary-800  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
      	Select a Meal
      {
       isDropdownOpen?<MdKeyboardArrowUp className="text-[20px] text-white"/>:<MdKeyboardArrowDown className="text-[20px] text-white"/>
      }
    </button>

              {/* Add meal */}
              <Link
                to={"/user/add-meal"}
                className="flex items-center justify-center w-24 h-10 text-white rounded-md bg-sky-500 "
              >
                Add Meal
              </Link>
            </div>
          </div>

          {/* card */}
          <div className="grid w-full h-full grid-cols-1 gap-3 p-5 lg:grid-cols-1">
        {
          isDropdownOpen && (
            <div class="max-w-full absolute right-0 left-0">
             <CalendarComponent formatDate={formatDate} handleDateChange={handleDateChange} onValue={value}/>
            </div>
          )
        }
            

            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

              <a href="/#">
                <img
                  class="rounded-t-lg object-cover h-28 w-96"
                  src="https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-white">Oatmeal with Berries</h1>

                  
                </div>
              </div>
            </div>
          </div>

          {/* <nav
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
          </nav> */}
        </div>
      </div>
    </section>
  );
}

export default MealsListing;
