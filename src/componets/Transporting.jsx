import React from "react";
import TransportSolutions from "../utilities/TransportSolutions";
import Button from "../utilities/Button";
import Distribution from "../assets/Transport/Distribution.png";
import LiquidTransport from "../assets/Transport/LiquidTransport.png";
import Logistics from "../assets/Transport/Logistics.png";
import PackagingSolutions from "../assets/Transport/PackagingSolutions.png";
import SpecializedTransport from "../assets/Transport/SpecializedTransport.png";
const Transporting = () => {
  return (
    <div className="overflow-hidden justify-center ">
      <div className=" xs:mt-[60rem] md:mt-[30rem] xs:mx-auto md:mx-20 ">
        <h1 className="my-8 text-center text-secondary-300 text-2xl font-bold">
          Transporting Around The World
        </h1>
        <div className="image-container  md:flex xs:grid gap-2  justify-center">
          <TransportSolutions imageUrl ={LiquidTransport} text1="Liquid Transportation" text2="Petroleum tankers" />
          <TransportSolutions imageUrl ={PackagingSolutions} text1="PackagingSolutions" text2="Warehouse Management" />
          <TransportSolutions imageUrl ={Logistics} text1="Contract Logistics" text2="Road Transportation" />
          <TransportSolutions imageUrl ={Distribution} text1="Warehousing & Distribution" text2="Large Warehousing" />
          <TransportSolutions imageUrl ={SpecializedTransport} text1="Specialized Transport" text2="Ocen Transport" />

        </div>
      </div>
      <div className="h-[150px] bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 relative  p-40  flex  -z-[999]">
        <Button
          text="More Work"
          bgColor="secondary-300"
          bgClip="secondary-100"
        />
      </div>
    </div>
  );
};

export default Transporting;
