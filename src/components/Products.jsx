import React from "react";
import ProductCard from "../layouts/ProductCard";

const Products = () => {
  const data = [
    {
      id: 12,
      img: "/src/assets/img/product13.jpg",
      name: "Special Cake",
      price: "1150",
    },
    {
      id: 13,
      img: "/src/assets/img/product14.jpg",
      name: "Macaron",
      price: "250"
    },
    {
      id: 14,
      img: "/src/assets/img/product15.jpg",
      name: "The Patoleos",
      price: "1850",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>

      {/* Cards section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
