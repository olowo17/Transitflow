import React from "react";
import { faBoxesAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Logo = () => {
  return (
    <div className="logo xs:mb-4 hover:cursor-pointer self-center ">
      <FontAwesomeIcon icon={faBoxesAlt} className="text-primary-100" />
      <span className="text-white text-2xl ml-2 font-bold">Transitflow</span>
    </div>
  );
};

export default Logo;
