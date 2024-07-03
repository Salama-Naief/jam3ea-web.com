"use client";
import React from "react";
import MainSlider from ".";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import Container from "../Container";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IProduct } from "@/module/(main)/product/types";

interface Props {
  items: IProduct[];
  type: "bestSeller" | "normal";
  size?: "small" | "large";
  lgSize?: number;
  xlSize?: number;
  mdSize?: number;
  smSize?: number;
  autoAnimation?: boolean;
}

// arrows
// function NextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -right-4 md:-right-10 cursor-pointer  text-2xl md:text-4xl">
//       <BsChevronRight
//         className={""}
//         style={{ ...style, display: "block" }}
//         onClick={onClick}
//       />
//     </div>
//   );
// }
// //arrows
// function PrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -left-4 md:-left-10 cursor-pointer  text-2xl md:text-4xl">
//       <BsChevronLeft
//         className={``}
//         style={{ ...style, display: "block" }}
//         onClick={onClick}
//       />
//     </div>
//   );
// }

function ProductSlider({
  items,
  type,
  size = "large",
  lgSize = 4,
  mdSize = 3,
  smSize = 2,
  xlSize = 5,
  autoAnimation = true,
}: Props) {
  // var settings = {
  //   infinite: true,
  //   speed: 500,
  //   initialSlide: 0,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div>
      <div className="w-full mx-auto px-4 md:px-0 lg:px-0 bg-transparent">
        {/* <Slider {...settings} className="w-full"> */}
        <MainSlider
          lgSize={items.length > lgSize ? lgSize : items.length}
          xlSize={items.length > xlSize ? xlSize : items.length}
          mdSize={items.length > mdSize ? mdSize : items.length}
          smSize={items.length > smSize ? smSize : items.length}
          nextIcon={BsChevronRight}
          prevIcon={BsChevronLeft}
          autoAnimation={autoAnimation}
        >
          {items.map((item) => (
            <ProductCard
              key={item.sku}
              product={item}
              type={type}
              size={size}
            />
          ))}
        </MainSlider>
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default ProductSlider;
