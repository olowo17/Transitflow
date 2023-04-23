import React from "react";
import image from "../assets/Photo.png";
import Label from "../utilities/Label";
import Button from "../utilities/Button";

const Banner = () => {
  return (
    <div className="image-container  md:relative ">
      <img src={image} alt="banner" className="w-full h-[500px]" />
      <div className="lg:absolute  lg:w-3/5  xl:w-1/2 overflow-hidden  lg:top-40 bottom-1 lg:left-40 text-white lg:text-2xl  flex justify-start items-center lg:p-2 mb-2 ">
        <section className=" xs:w-[100%] xs:p-2 xs:text-md xs:bg-tertiary-200 lg:bg-transparent h-auto">
          <Label
            label="logistics & supply chain solutions"
            textColor="white"
            bgColor="bg-secondary-200"
          />
          <title>Logistics and Supply Chain Solution</title>
          <h1 className="lg:text-5xl md:text-2xl xs:text-[10px] lg:font-bold">
            Your Gateway <br /> to any Destination in <br /> the world
          </h1>
          <p className="text-sm break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aliquid, repellendus earum qui suscipit, quia magnam quam esse
            cumque doloribus ipsum accusantium quisquam! Vel, necessitatibus
            aut. Delectus dolor provident non?
          </p>
          <Button text="Explore more" bgColor="primary-100" bgClip="white" />
        </section>
      </div>
    </div>
  );
};

export default Banner;
