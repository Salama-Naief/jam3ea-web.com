"use client";
import AddToWishlist from "@/module/(main)/wishlist/components/AddToWishlist";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  product: any;
}
function SingleProductSlider({ product }: Props) {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [activeImg, setActiveImg] = useState<number>(0);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container relative">
      <div className="absolute top-5 end-5 z-10">
        <AddToWishlist
          isLarge
          isInWhishlist={product.isInWhishlist}
          sku={product.sku}
        />
      </div>
      <Slider
        asNavFor={nav2}
        slidesToShow={1}
        ref={(slider) => setNav1(slider)}
        arrows={false}
        fade={true}
        className="bg-gray-100 rounded-xl p-4 shadow-md "
      >
        {product.images.map((img: any, i: number) => (
          <div key={i} className="flex  flex-col ">
            <div className="flex justify-end w-full"></div>
            <div className="w-full flex justify-center items-center">
              <Image src={img} alt={product.name} />
            </div>
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => setNav2(slider)}
        slidesToShow={product.images.length}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        className="mt-4 shadow-md"
      >
        {product.images.map((img: any, i: number) => (
          <div
            key={i}
            className={`cursor-pointer flex justify-center items-center flex-col bg-gray-100 rounded-md p-1
              
            `}
            onClick={() => setActiveImg(i)}
          >
            <Image
              src={img}
              width={100}
              height={100}
              alt={product.name}
              className={`${
                activeImg === i ? "border-primary" : "border-gray-100"
              } border p-1 rounded`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SingleProductSlider;
