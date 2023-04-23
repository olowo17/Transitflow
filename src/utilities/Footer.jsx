import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "../componets/Contact.module.css";
import { FaCaretDown } from "react-icons/fa";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="bg-secondary-100">
        <nav className="  text-center bg-secondary-300 px-40 align-middle">
          <ul className="text-xl font-semibold md:grid md:grid-cols-4 xs:grid gap-6 ">
            <li className="bg-secondary-100">
              <Logo />
            </li>
            <li>Pages</li>
            <li>Utility</li>
            <li>Subscribe</li>
          </ul>
        </nav>
        <section className=" px-40 bg-secondary-100 py-4">
          <div className=" md:grid md:grid-cols-4 ">
            <div className="contact">
              <p className="text-sm mb-2">
                leverage agile framework to provide a robust synopsis for
                strategy Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ratione, iusto!
              </p>
              <div className="flex hover:cursor-pointer xs:hover:bg-primary-100 xs:font-mono font-bolder px-2 py-1  hover:bg-primary-100">
                <div className="w-10 h-10 bg-secondary-300 flex justify-center align-middle  text-center rounded-full">
                  <div className={classes.icon}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary-100 icon "
                    />
                  </div>
                </div>
                <div className="grid text-sm mx-2 ">
                  <small>Email</small>
                  <small>contact@tlogistics.com</small>
                </div>
              </div>
              <div className="flex hover:cursor-pointer xs:hover:bg-primary-100 xs:font-mono font-bolder px-2 py-1  hover:bg-primary-100 ">
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
            <div className="pages">
              <ul className=" text-center font-bold">
                <li className=" hover:text-primary-100">Home</li>
                <li className="hover:text-primary-100">About</li>
                <li className="flex justify-center m-auto hover:text-primary-100">
                  Page <span>{<FaCaretDown className=" mt-1" />}</span>
                </li>
                <li className="hover:text-primary-100">Project</li>
                <li className="hover:text-primary-100">Contact</li>
              </ul>
            </div>
            <div className="utility text-center">
              <ul>
                <li className="hover:text-primary-100">style guide</li>
                <li className="hover:text-primary-100">charging</li>
                <li className="hover:text-primary-100">Licensing</li>
                <li className="hover:text-primary-100">Protected</li>
                <li className="hover:text-primary-100">Not Found</li>
              </ul>
            </div>
            <div className="subscribe text-center md:p-2 ">
              <div>
                <input
                  type="text"
                  placeholder="Email here"
                  className="  w-full p-2 border-white border-[1px] bg-transparent text-primary-200 text-center mb-2"
                />
              </div>
              <div className="grid ">
                <div className="p-1 bg-primary-100 rounded-md  ">Send</div>
                <Socials />
              </div>
            </div>
          </div>
        </section>
        <hr className="h-[1px] " />
        <div className="flex py-4 justify-center ">
          <section className="">
            <small> Copyright&copy;{new Date().getFullYear()}</small>
            <small className="mx-2">Transitflow</small>
          </section>
          <ul className="md:flex space-x-8 md:ml-8 text-tertiary-200 ">
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>Change Password</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
