import React from "react";
import img from "../assets/img/hero.png";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
      {/* content section  */}
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
        Start your day with a steaming cup of coffee
        </h1>
        <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
        Boost your productivity and build your mood with a glass of coffee in
        the morning
        </p>
      </div>

      {/* img section */}
      <div className="">
        <img className=" -ml-5 -mb-5" width={680} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
