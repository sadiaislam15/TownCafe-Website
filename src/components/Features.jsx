import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 6,
      img: "/src/assets/img/product7.jpg",
      name: "Espresso",
      price: "450",
    },
    {
      id: 7,
      img: "/src/assets/img/product8.jpg",
      name: "Cappuccino",
      price: "650",
    },
    {
      id: 8,
      img: "/src/assets/img/product9.jpg",
      name: "Latte",
      price: "430",
    },
    {
      id: 9,
      img: "/src/assets/img/product10.jpg",
      name: "Americano",
      price: "520",
    },
    {
      id: 10,
      img: "/src/assets/img/product11.jpg",
      name: "Macchiato",
      price: "300",
    },
    {
      id: 11,
      img: "/src/assets/img/product12.jpg",
      name: "Doppio",
      price: "440",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Coffee Menu
      </h1>

      {/* card section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className=" md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
