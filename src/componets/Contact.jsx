import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faClose,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Contact.module.css";
import Logo from "../utilities/Logo";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <section className="bg-secondary-100 text-white md:p-6 ">
      <div className="md:flex md:m-auto md:justify-around xs:grid  ">
        <Logo/>
        <div className="md:hidden" onClick={toggleHandle}>
          <FontAwesomeIcon
            icon={toggle ? faBars : faClose}
            className="text-primary-100 h-6 ml-2"
          />
        </div>
        <div
          className={`md:flex  md:space-x-4 xs:grid xs:space-y-2 md:space-y-0 my-4 ${
            toggle ? "xs:hidden md:block" : "md:block"
          }`}
        >
          <div className="flex hover:cursor-pointer xs:hover:bg-primary-100 xs:font-mono font-bolder px-2 py-1 md:border-b-2 md:border-transparent md:hover:border-primary-100 md:hover:bg-transparent">
            <div className=" w-10 h-10 bg-secondary-300 flex justify-center align-middle rounded-full">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-primary-100 icon"
                />
              </div>
            </div>
            <div className="grid text-sm mx-2 ">
              <small>Mon-Sat 9:00-18:00</small>
              <small>Sun closed</small>
            </div>
          </div>
          <div className="flex hover:cursor-pointer xs:hover:bg-primary-100 xs:font-mono font-bolder px-2 py-1 md:border-b-2 md:border-transparent md:hover:border-primary-100 md:hover:bg-transparent">
            <div className="w-10 h-10 bg-secondary-300 flex justify-center align-middle rounded-full">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary-100 icon "
                />
              </div>
            </div>
            <div className="grid text-sm mx-2">
              <small>Email</small>
              <small>contact@tlogistics.com</small>
            </div>
          </div>
          <div className="flex hover:cursor-pointer xs:hover:bg-primary-100 xs:font-mono font-bolder px-2 py-1 md:border-b-2 md:border-transparent md:hover:border-primary-100 md:hover:bg-transparent">
            <div className="w-10 h-10 bg-secondary-300 flex justify-center align-middle rounded-full">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary-100 icon"
                />
              </div>
            </div>
            <div className="grid text-sm mx-2">
              <small>Call us</small>
              <small>+2348100316259</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
