"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselImg1 from "../../../public/assets/carousel/carousel1.png";
import CarouselImg2 from "../../../public/assets/carousel/carousel2.png";
import CarouselImg3 from "../../../public/assets/carousel/carousel3.png";

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

  const imgArray = [CarouselImg1, CarouselImg2, CarouselImg3];
  return (
    <div className=" w-[100%] relative">
      <Slider {...settings} className="w-[100%] h-fit">
        {imgArray.map((img, index) => (
          <div
            key={index}
            className="relative h-[25rem] md:h-[30rem] lg:h-[36rem] w-[100%]"
          >
            <Image src={img} alt="" fill objectFit="contian" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
