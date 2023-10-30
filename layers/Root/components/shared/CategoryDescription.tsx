import React from "react";
import { techDescription } from "../../constants/description";

const CategoryDescription = () => {
  return (
    <div className=" border-y border-t-blurpre/20 border-b-gray-31 py-10 mb-4 px-2 md:pl-10 md:pr-24 lg:pt-2">
      <p className="text-lg md:text-xl lg:text-2xl font-lora">
        {" "}
        {techDescription}
      </p>
    </div>
  );
};

export default CategoryDescription;
