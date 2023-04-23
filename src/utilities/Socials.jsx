import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <ul className="flex justify-between space-x-8 text-xl mt-4">
      <li>{<FaInstagram className="hover:text-primary-100" />}</li>
      <li>{<FaFacebook className="hover:text-primary-100" />}</li>
      <li>{<FaTwitter className="hover:text-primary-100" />}</li>
      <li>{<FaLinkedin className="hover:text-primary-100" />}</li>
    </ul>
  );
};

export default Socials;
