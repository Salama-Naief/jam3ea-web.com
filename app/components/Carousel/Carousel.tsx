"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import CarouselImg1 from "../../../public/assets/carousel/carousel-1.svg";
import CarouselImg2 from "../../../public/assets/carousel/carousel-2.svg";
import CarouselImg3 from "../../../public/assets/carousel/carousel-3.svg";
import CarouselImg4 from "../../../public/assets/carousel/flat-lay.webp";

import { useEffect, useState } from "react";

const Banner = () => {
  const [title, setTitle] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  const img1 =
    "https://women-shop-shopify-t21s-kklm7oc03-engsalamanaief.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0662%2F0371%2F3755%2Fcollections%2Fflat-lay-woman-clothing-accessories-1376871.jpg%3Fv%3D1664959595&w=1920&q=75";
  const img2 =
    "https://women-shop-shopify-t21s-kklm7oc03-engsalamanaief.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0662%2F0371%2F3755%2Fcollections%2Fflat-lay-woman-clothing-accessories-1376871.jpg%3Fv%3D1664959595&w=1920&q=75";
  const imgArray = [img1, img2];
  return (
    <div className="w-[100vw] overflow-hidden">
      <Slider {...settings} className="w-[100vw] overflow-hidden">
        {imgArray.map((item, index) => (
          <div key={index} className=" relative w-full h-96">
            <Image src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Banner), { ssr: false });
