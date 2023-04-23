import React from "react";


const TransportSolutions = ({imageUrl, text1,text2}) => {
  return (
    <div className="relative xs:h-[200px] xs:w-[200px] md:w-full mb--4 ">
      <img src={imageUrl} alt="Logistics" className=" overflow-visible " />
      <div
        className=" absolute inset-x-4 md:bottom-[-80px] grid  text-xl xs:bottom-1
"
      >
        <small className=" primary-200 text-center text-white  ">{text1}.</small>
        <small className=" primary-200 text-center text-primary-100 mt-1 ">
         {text2}
        </small>
      </div>
    </div>
  );
};

export default TransportSolutions;
