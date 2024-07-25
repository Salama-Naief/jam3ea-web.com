"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IconType } from "react-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IFeature } from "@/module/(main)/feature/types";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";
// // arrows
// function NextArrow(props: any) {
//   const { className, style, onClick, icon: Icon } = props;
//   return (
//     <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -end-4 md:-end-10 cursor-pointer  text-2xl md:text-4xl">
//       <Icon
//         className={""}
//         style={{ ...style, display: "block" }}
//         onClick={onClick}
//       />
//     </div>
//   );
// }
// //arrows
// function PrevArrow(props: any) {
//   const { className, style, onClick, icon: Icon } = props;
//   return (
//     <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100 shadow z-10 absolute top-1/2 -start-4 md:-start-10 cursor-pointer  text-2xl md:text-4xl">
//       <Icon
//         className={``}
//         style={{ ...style, display: "block" }}
//         onClick={onClick}
//       />
//     </div>
//   );
// }

//arrows
function PrevArrow({ onClick, ...rest }: any) {
  //   const { className, style, onClick, icon: Icon } = props;
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div className="w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 flex items-center justify-center rounded-full bg-gray-200 opacity-90  z-10 absolute top-1/2  md:start-0  shadow-md  cursor-pointer  text-2xl md:text-4xl">
      <BsChevronLeft
        className={``}
        style={{ display: "block" }}
        onClick={onClick}
      />
    </div>
  );
}
//arrows
function NextArrow({ onClick, ...rest }: any) {
  //   const { className, style, onClick, icon: Icon } = props;
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div className="w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 flex items-center justify-center rounded-full bg-gray-200 opacity-90  z-10 absolute top-1/2 end-0 md:end-0 shadow-md  cursor-pointer  text-2xl md:text-4xl">
      <BsChevronRight
        className={``}
        style={{ display: "block" }}
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
  autoAnimation?: boolean;
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
  autoAnimation = true,
}: Props) {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: lgSize,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: mdSize,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: smSize,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full mx-auto bg-transparent">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        beforeChange={() => setIsMoving(true)}
        afterChange={() => setIsMoving(false)}
        containerClass="first-carousel-container container"
        className="py-2"
        //   deviceType={this.props.deviceType}
        customRightArrow={false ? <div></div> : <PrevArrow />}
        customLeftArrow={false ? <div></div> : <NextArrow />}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default MainSlider;
