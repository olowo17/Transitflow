import React from "react";
import airplane from "../assets/airplane.jpg";
import delivery from "../assets/delivery.png";
import optimized from "../assets/optimized.png";
import unbox from "../assets/unbox.png";
import container from "../assets/containers.png";
import Label from "../utilities/Label";
import Statistics from "../componets/Statistics";
import Transporting from "./Transporting";

// how to center a div
const WhyUs = () => {
  return (
    <>
      <div className="relative ">
        <div className="overflow-hidden">
          <img src={container} alt="containers" />
        </div>
        <section className="why-us p-8 w-3/5  mx-auto space-y-2 text-sm bg-white  border-white absolute inset-x-2 top-[70%] ">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Label
                label="Why Us "
                textColor="white"
                bgColor="bg-tertiary-200"
              />
              <h3 className="text-2xl text-secondary-200 font-bold">
                We provide full range global logistic solution
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                assumenda delectus aut, maiores dolores accusamus.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quam nemo.
              </p>
              <br />
              <div className="flex m-2  text-start ">
                <img src={delivery} alt="delivery" />{" "}
                <span className="text-secondary-200 my-auto mx-1 font-semibold text-lg">
                  Delivery on time
                </span>
              </div>
              <div className="flex m-2 text-center ">
                <img src={optimized} alt="optimized" />
                <span className="text-secondary-200 my-auto mx-1 font-semibold text-lg">
                  Optimized Travel Cost{" "}
                </span>
              </div>
            </div>
            <div className="relative ">
              <div>
                <img
                  src={airplane}
                  alt="airplane"
                  className="  hover:scale-110"
                />
              </div>
              <div>
                <img
                  src={unbox}
                  alt="unbox"
                  className=" w-[250px] absolute left-[-50px] bottom-1 border-[12px] border-white  hover:-translate-y-1 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <Statistics/>
        </section>
      </div>
    </>
  );
};

export default WhyUs;
