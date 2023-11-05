import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import NavbarLogo from "./csdv2Logonavbar.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <section class=" sticky top-0 z-50 bg-black drop-shadow-lg  ">
      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-white ">
        <Link to="/">
        <img
  class="pl-2 h-auto w-44 lg:w-52"
  src={NavbarLogo}
  alt="csd_logo"
  width="52"
  height="auto"
/>
        </Link>
        <div class=" justify-end ">
          <ul className="flex items-center">
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-white hover:bg-yellow-500  focus:outline-none">
              <Link to="/telugu-movies">Telugu</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-white hover:bg-yellow-500  focus:outline-none">
              <Link to="/hindi-movies">Hindi</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-white hover:bg-yellow-500  focus:outline-none">
              <Link to="/webseries">Web Series</Link>
            </li>
           
            <li className="p-4">
              <Menu as="div" className="relative inline-block text-left  ">
                <div>
                  <Menu.Button className=" text-3xl">
                  ☰
                  
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                   
                    

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/telugu-movies" className=" lg:hidden ">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-white",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Telugu
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/hindi-movies" className=" lg:hidden ">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-white",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Hindi 
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/webseries" className=" lg:hidden ">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-white",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Web Series
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
              
                  
                    

                    <div className="py-1 lg:py-0">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/login">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-white",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Login
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/aboutus">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-white",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              About us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/contactus">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-white",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Contact us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};




export default Navbar;
