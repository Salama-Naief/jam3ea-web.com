"use client";
import React, { use, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  // children: React.ReactNode;
  count: number;
}
function Counter({ count }: Props) {
  let sliderRef = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);

  const elements = [...Array(10)].map((n, i) => (
    <div key={i} className="w-4 font-bold">
      {i}
    </div>
  ));

  const arrayOfDigits = Array.from(String(count), Number);

  useEffect(() => {
    if (sliderRef.current !== null && arrayOfDigits.length >= 1) {
      if (arrayOfDigits.length - 1 >= 0) {
        //@ts-expect-error
        sliderRef.slickGoTo(arrayOfDigits[arrayOfDigits.length - 1]);
      } else {
        //@ts-expect-error
        sliderRef.slickGoTo(0);
      }
    }
    if (sliderRef2.current !== null) {
      if (arrayOfDigits.length - 2 >= 0) {
        //@ts-expect-error
        sliderRef2.slickGoTo(arrayOfDigits[arrayOfDigits.length - 2]);
      } else {
        //@ts-expect-error
        sliderRef2.slickGoTo(0);
      }
    }
    if (sliderRef3.current !== null) {
      if (arrayOfDigits.length - 3 >= 0) {
        //@ts-expect-error
        sliderRef3.slickGoTo(arrayOfDigits[arrayOfDigits.length - 3]);
      } else {
        //@ts-expect-error
        sliderRef3.slickGoTo(0);
      }
    }
  }, [arrayOfDigits]);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <div className="w-full flex justify-center items-center">
      {arrayOfDigits.length === 3 && (
        <div className="w-4">
          <Slider
            ref={(slider) => {
              //@ts-expect-error
              sliderRef3 = slider;
            }}
            {...settings}
            initialSlide={1}
            className="w-full"
          >
            {elements}
          </Slider>
        </div>
      )}
      <div className="w-4">
        <Slider
          ref={(slider) => {
            //@ts-expect-error
            sliderRef2 = slider;
          }}
          {...settings}
          className="w-full"
        >
          {elements}
        </Slider>
      </div>
      <div className="w-4">
        <Slider
          ref={(slider) => {
            //@ts-expect-error
            sliderRef = slider;
          }}
          {...settings}
          className="w-full"
        >
          {elements}
        </Slider>
      </div>
    </div>
  );
}

export default Counter;
