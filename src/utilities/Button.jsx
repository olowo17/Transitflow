import React from "react";

const Button = ({ text, bgColor, bgClip }) => {
  return (
    <button
      className={`bg-${bgColor}  overflow-hidden w-[164px] h-[40px] p-1 mt-2 text-black font-semibold text-lg relative group rounded-sm  mx-auto`}
    >
      <p className="overflow-visible ">{text}</p>
      <div
        className={`bg-${bgClip} w-6 h-10 rounded-l-full  absolute
        right-0 bottom-0 group-hover:w-8 group-hover:h-14`}
      ></div>
    </button>
  );
};

export default Button;


