import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Button from "./Button";
import Socials from "./Socials";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
    console.log(showDropDown);
  };

  // const dropDropdown =()=>{

  // }
  return (
    <div className="bg-secondary-100 opacity-80 text-white  font-mono">
      <div className="nav-container flex justify-center md:justify-around">
        <div className="nav-options mt-4 ">
          <ul className="md:flex md:space-x-10 xs:grid text-center font-bold">
            <li className=" text-primary-100 ">Home</li>
            <li className="hover:text-primary-100">About</li>
            <li
              className="justify-center m-auto hover:text-primary-100 "
              onClick={dropDownHandler}
            >
              <div className="grid ">
                {" "}
                <div className="flex">
                  <span>Page</span>{" "}
                  <span>{<FaCaretDown className=" mt-1" />}</span>
                </div>
                {showDropDown && (
                  <>
                    <ul >
                      <li className="hover:bg-green-600 hover:text-white">Homepage</li>
                      <li className="hover:bg-green-600 hover:text-white">Services</li>
                    </ul>
                  </>
                )}
              </div>
            </li>
            <li className="hover:text-primary-100">Project</li>
            <li className="hover:text-primary-100">Contact</li>
          </ul>
        </div>
        <div className="socials-container ">
          <div className="socials md:flex md:space-x-4 text-center xs:hidden ">
            <Socials />
            <div className="request-quotes bg-white text-black hover:text-white hover:bg-primary-100 p-4 ml-4 h-full">
              Request Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
