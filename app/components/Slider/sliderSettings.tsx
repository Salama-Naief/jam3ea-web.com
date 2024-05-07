import React from "react";

interface Props {
  nextArrow: React.JSX.Element;
  prevArrow: React.JSX.Element;
  xlSize: number;
  lgSize: number;
  mdSize: number;
  smSize: number;
}
export const settings = ({
  nextArrow,
  prevArrow,
  lgSize,
  mdSize,
  smSize,
  xlSize,
}: Props): any => ({
  infinite: true,
  speed: 500,
  initialSlide: 0,
  arrows: true,
  //autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: nextArrow,
  prevArrow: prevArrow,
  slidesToShow: xlSize,
  slidesToScroll: 1,
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
});
