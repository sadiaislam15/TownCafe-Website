import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";

const Shop = () => {
  const data = [
    {
      id: 0,
      img: "/src/assets/img/product1.jpg",
      name: "Cookies",
      price: "150",
    },
    {
      id: 1,
      img: "/src/assets/img/product2.jpg",
      name: "Croissant",
      price: "220",
    },
    {
      id: 2,
      img: "/src/assets/img/product3.jpg",
      name: "Muffins",
      price: "120",
    },
    {
      id: 3,
      img: "/src/assets/img/product4.jpg",
      name: "Donuts",
      price: "190",
    },
    {
      id: 4,
      img: "/src/assets/img/product5.jpg",
      name: "Orange Cake",
      price: "350",
    },
    {
      id: 5,
      img: "/src/assets/img/product6.jpg",
      name: "Peanut Bar",
      price: "170",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
         Quick Bites 
        </h1>
      </div>

      {/* carousel section */}
      <div className=" mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
