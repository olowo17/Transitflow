import React from "react";
import Label from "../utilities/Label";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p1 from "../assets/Review/p1.png";
import p2 from "../assets/Review/p2.png";
import quote from "../assets/Review/quote.png";
import Star from "../assets/Review/Star.png";

const ReviewsProfile = () => {
  return (
    <div className=" ">
      <section className="w-4/5 mx-auto">
        <Label
          label="Testimonials"
          bgColor="bg-tertiary-200"
          textColor="white"
        />
        <div className="flex justify-between px-1 my-2">
          <h1 className="text-2xl text-tertiary-300 font-bold">
            What Our Customer Say{" "}
          </h1>
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-300 px-2 py-1">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-tertiary-300"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-tertiary-300 px-2 py-1">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary-100 justify-center"
              />
            </div>
          </div>
        </div>
        <div className="flex my-2  text-secondary-200 w-full mx-auto">
          <div className="w-[90%] bg-tertiary-200 p-8">
            <div className="xs:grid md:flex justify-between ">
              <div className="flex">
                <img src={p1} alt="p1" className="rounded-full mr-2 " />
                <span className="flex flex-col my-auto">
                  <small>Kathlene Smith</small>
                  <small>Fuel Company</small>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-200">
                <img src={quote} alt="quote" className="mx-auto my-3" />
              </div>
            </div>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem totam delectus cumque asperiores inventore magni
              modi quibusdam quisquam illo laborum?
            </p>
            <div className="">
              <img src={Star} alt="star" />
            </div>
          </div>

          <div className="w-[90%]  text-white bg-secondary-100 p-8">
            <div className="xs:grid md:flex justify-between  ">
              <div className="flex">
                <img src={p2} alt="p2" className="rounded-full mr-2 " />
                <span className="md:flex md:flex-col  my-auto">
                  <small>Shola Adelaja</small>
                  <small>Construction Company</small>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-200">
                <img src={quote} alt="quote" className="mx-auto my-3" />
              </div>
            </div>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem totam delectus cumque asperiores inventore magni
              modi quibusdam quisquam illo laborum?
            </p>
            <div className="">
              <img src={Star} alt="star" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsProfile;
