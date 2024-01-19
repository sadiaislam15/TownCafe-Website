import React from "react";
import img from "../assets/img/collection.png";

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img section */}
      <div className=" flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" />
      </div>

      {/* content section */}
      <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h2 className=" text-4xl font-semibold text-ExtraDarkColor">
        What Makes Our Menu Special?
        </h2>
        <p>
        "Experiment with distinctive flavor pairings for our coffee, cookies, and desserts. Also, allow customers to customize their own orders. This could include choosing different types of coffee beans, toppings for cookies, or building their own dessert creations!"
        </p>
      </div>
    </div>
  );
};

export default Collections;
