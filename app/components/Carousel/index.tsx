"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselImg1 from "../../../public/assets/carousel/carousel-1.svg";
import CarouselImg2 from "../../../public/assets/carousel/carousel-2.svg";
import CarouselImg3 from "../../../public/assets/carousel/carousel-3.svg";
import CarouselImg4 from "../../../public/assets/honey-image.png";
import Image from "next/image";

function Carousel() {
  const [currentSellect, setCurrentSellect] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    waitForAnimate: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    // appendDots: (dots: any) => (
    //   <div className="-top-20 bg-cyan-800">
    //     <ul className="-top-20 bg-cyan-800"> {dots} </ul>
    //   </div>
    // ),
    beforeChange: (prev: number, next: number) => {
      setCurrentSellect(next);
    },
    appendDots: (dots: any) => {
      console.log(dots);
      return (
        <div className="">
          <ul> {dots} </ul>
        </div>
      );
    },
    customPaging: (i: number) => {
      return (
        <div
          className={`${
            currentSellect === i ? "bg-primary" : "bg-gray-50"
          } h-4 w-4 rounded-full hover:bg-primary shadow-lg`}
        ></div>
      );
    },
  };
  const img1 =
    "https://women-shop-shopify-t21s-kklm7oc03-engsalamanaief.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0662%2F0371%2F3755%2Fcollections%2Fflat-lay-woman-clothing-accessories-1376871.jpg%3Fv%3D1664959595&w=1920&q=75";
  const img2 =
    "https://women-shop-shopify-t21s-kklm7oc03-engsalamanaief.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0662%2F0371%2F3755%2Fcollections%2Fflat-lay-woman-clothing-accessories-1376871.jpg%3Fv%3D1664959595&w=1920&q=75";
  const imgArray = [img1, img2];
  return (
    <div className=" w-[100%]">
      <Slider {...settings} className="w-[100%] h-96">
        {imgArray.map((img, index) => (
          <div key={index} className="relative h-full w-full">
            <Image
              src={CarouselImg4}
              alt=""
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
