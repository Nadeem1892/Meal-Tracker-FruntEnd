import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// import { jwtDecode } from "jwt-decode";

import mealTreackerLogo from "../Assets/meal-treaker-logo.png";
import { Link } from "react-router-dom";
function Header() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Keeps track of the active dropdown
  const sidebarRef = useRef(null); // Ref for the sidebar
  const menuButtonRef = useRef(null); // Ref for the menu toggle button
  const userMenuRef = useRef(null); // Ref for the profile dropdown

  // Toggle specific dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close dropdown if it's already open
    } else {
      setActiveDropdown(dropdown); // Open the clicked dropdown
    }
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    if (isNavbarOpen) {
      setNavbarOpen(false); // Close navbar if it's open
    }
    setUserMenuOpen((prev) => !prev); // Toggle the user dropdown menu
  };

  // Toggle navbar menu
  const toggleNavbar = () => {
    if (isUserMenuOpen) {
      setUserMenuOpen(false); // Close user menu if it's open
    }
    setNavbarOpen(!isNavbarOpen); // Toggle the navbar
  };

  // Close sidebar or user menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setNavbarOpen(false); // Close sidebar when clicked outside
      }

      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false); // Close user menu when clicked outside
      }
    };

    if (isNavbarOpen || isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen, isUserMenuOpen]);

  // Handle overflow on body when the navbar is open
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavbarOpen]);

  // const token = localStorage.getItem("auth");
  // const decodedToken = jwtDecode(token);

  const logOut = () => {
    localStorage.clear("auth");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-3 mx-auto lg:p-0 lg:px-10">
        {/* first section */}
        <div className="flex items-center">
          {/* Mobile menu btn */}
          <button
            ref={menuButtonRef} // Assign the ref for menu toggle button
            className="inline-flex items-center justify-center p-2 text-sm text-white rounded-lg md:hidden"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu3Fill className=" text-[25px]" />
          </button>

          {/* Logo */}
          <a
            href="/#"
            className="flex items-center space-x-1 text-white rtl:space-x-reverse"
          >
            <img
              src={mealTreackerLogo}
              className="w-7 h-7 lg:h-9 lg:w-9"
              alt="Flowbite Logo"
            />
            <span className="self-center lg:text-xl text-[15px] font-semibold whitespace-nowrap dark:text-white">
              Meal Treaker
            </span>
          </a>
        </div>

        {/* section 2 */}
        <div className="flex items-center gap-14">
          {/* Profile Dropdown menu */}
          <div className="flex items-center space-x-5 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {/* Profile Button */}
            <button
              type="button"
              className="flex ml-1 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleUserMenu}
              aria-expanded={isUserMenuOpen}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="rounded-full w-7 h-7 lg:w-8 lg:h-8"
                src="https://toppng.com/uploads/preview/happy-black-person-11531493747ib42obkabb.png"
                alt="Profile"
              />
            </button>

            {/* Profile Dropdown menu */}
            <div
              ref={userMenuRef} // Assign ref for profile dropdown
              className={`absolute top-16 lg:top-[60px] right-3 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                isUserMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                  {/* {decodedToken.username} */}
                  <IoShieldCheckmark className="text-green-500 text-[15px]" />
                </span>
              </div>
              <ul className="py-2">
                <li className="">
                  <a
                    href="/#"
                    className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    View Profile
                  </a>
                </li>

                <li className="hidden lg:block">
                  <button
                    onClick={logOut}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Dropdown menu */}
          <div
            ref={sidebarRef} // Assign the ref for the sidebar
            className={`bg-gray-800 fixed  z-20 md:dark:bg-gray-900 text-white w-72 space-y-5 py-5 lg:py-0 px-2 inset-y-0 left-0 transform md:flex md:w-auto md:order-1 ${
              isNavbarOpen ? "translate-x-0 " : "-translate-x-full"
            } transition-transform duration-300 flex flex-col justify-between ease-in-out md:relative md:translate-x-0 md:w-64`}
          >
            {/* profile side bar */}
            <nav className="lg:items-center lg:flex ">
              {/* name */}
              <div className="flex flex-col items-center gap-5">
                <div className="fixed flex items-center justify-center lg:hidden">
                  <h1 className="text-[30px]">Meal Treaker</h1>
                </div>

                {/* profile */}
                <div className="flex flex-col gap-10 px-4 py-4 mt-10">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center lg:hidden">
                      <div className="flex flex-col items-center w-full gap-2">
                        <FaRegCircleUser className="w-10 h-10 text-[#f6f6f8]" />
                        <h3 className="flex items-center gap-2 font-semibold text-white text-[20px]">
                          {/* {decodedToken.username} */}
                          <IoShieldCheckmark className="text-green-500 text-[15px]" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* list */}
              <ul className="flex flex-col gap-5 py-10 font-medium lg:items-center lg:py-0 md:space-x-7 rtl:space-x-reverse md:flex-row ">
                <li onClick={() => setNavbarOpen(false)}>
                  <Link
                    to={"/user"}
                    className="flex justify-between w-full gap-2 px-3 py-2 text-white rounded md:bg-transparent"
                  >
                    Dashboard
                  </Link>
                </li>

                {/* Meal Dropdown */}
                <li className="">
                  <button
                    onClick={() => toggleDropdown("meals")}
                    className="flex items-center justify-between w-full gap-2 px-3 py-2 text-white md:bg-transparent"
                  >
                    <span>Meals</span>
                    {activeDropdown === "meals" ? (
                      <IoMdArrowDropup className="font-bold text-[20px] text-red-500" />
                    ) : (
                      <IoMdArrowDropdown className="font-bold text-[20px] text-white" />
                    )}
                  </button>

                  {activeDropdown === "meals" && (
                    <ul className="top-0 w-full py-2 mt-2 text-sm text-gray-700 bg-white divide-gray-100 rounded-lg shadow lg:absolute lg:top-[75px] lg:mt-0 lg:w-32 dark:bg-gray-700 dark:text-gray-200">
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link
                          onClick={() => setActiveDropdown(null)}
                          to={"meal-history"}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Meal History
                        </Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link
                          onClick={() => setActiveDropdown(null)}
                          to={"add-meal"}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Add Meal
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Meal Plan Dropdown */}
                <li className="">
                  <button
                    onClick={() => toggleDropdown("mealPlans")}
                    className="flex items-center justify-between w-full gap-2 px-3 py-2 text-white md:bg-transparent"
                  >
                    <span>Plans</span>
                    {activeDropdown === "mealPlans" ? (
                      <IoMdArrowDropup className="font-bold text-[20px] text-red-500" />
                    ) : (
                      <IoMdArrowDropdown className="font-bold text-[20px] text-white" />
                    )}
                  </button>

                  {activeDropdown === "mealPlans" && (
                    <ul className="top-0 w-full py-2 mt-2 text-sm text-gray-700 bg-white divide-gray-100 rounded-lg shadow lg:absolute lg:top-[75px] lg:mt-0 lg:w-32 dark:bg-gray-700 dark:text-gray-200">
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link
                          to={"view-plans"}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          View Plan
                        </Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link
                          onClick={() => setActiveDropdown(null)}
                          to={"add-plan"}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Add Plan
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Challenges Dropdown */}
                <li className="">
                  <button
                    onClick={() => toggleDropdown("challenges")}
                    className="flex items-center justify-between w-full gap-2 px-3 py-2 text-white md:bg-transparent"
                  >
                    <span>Challenges</span>
                    {activeDropdown === "challenges" ? (
                      <IoMdArrowDropup className="font-bold text-[20px] text-red-500" />
                    ) : (
                      <IoMdArrowDropdown className="font-bold text-[20px] text-white" />
                    )}
                  </button>

                  {activeDropdown === "challenges" && (
                    <ul className="top-0 w-full py-2 mt-2 text-sm text-gray-700 bg-white divide-gray-100 rounded-lg shadow lg:absolute lg:top-[75px] lg:mt-0 lg:w-[130px] dark:bg-gray-700 dark:text-gray-200">
                      <li onClick={() => setNavbarOpen(false)}>
                        <Link
                          to={"view-challenges"}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          View Challenge
                        </Link>
                      </li>
                      <li onClick={() => setNavbarOpen(false)}>
                        {/*  */}

                        {/*  */}
                        <Link
                          onClick={() => setActiveDropdown(null)}
                          to={"add-challenge"}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Add Challenge
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
            <div className="flex justify-center w-full lg:hidden">
              <button
                onClick={logOut}
                className="w-full py-2 text-white bg-red-500 rounded-md"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
