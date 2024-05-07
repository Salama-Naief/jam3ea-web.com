"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IconType } from "react-icons";

// arrows
function NextArrow(props: any) {
  const { className, style, onClick, icon: Icon } = props;
  return (
    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -right-4 md:-right-10 cursor-pointer  text-2xl md:text-4xl">
      <Icon
        className={""}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    </div>
  );
}
//arrows
function PrevArrow(props: any) {
  const { className, style, onClick, icon: Icon } = props;
  return (
    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -left-4 md:-left-10 cursor-pointer  text-2xl md:text-4xl">
      <Icon
        className={``}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  xlSize: number;
  mdSize: number;
  lgSize: number;
  smSize: number;
  rtl?: boolean;
  nextIcon?: IconType;
  prevIcon?: IconType;
}
function MainSlider({
  children,
  lgSize,
  mdSize,
  smSize,
  xlSize,
  rtl = false,
  nextIcon = BsArrowRight,
  prevIcon = BsArrowLeft,
}: Props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: xlSize,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    rtl: rtl,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow icon={nextIcon} />,
    prevArrow: <PrevArrow icon={prevIcon} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lgSize,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: mdSize,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: smSize,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full mx-auto px-4 md:px-5 lg:px-10 bg-transparent">
      <Slider {...settings} className="w-full">
        {children}
      </Slider>
    </div>
  );
}

export default MainSlider;
