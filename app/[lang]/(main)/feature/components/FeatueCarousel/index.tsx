"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IFeature } from "@/module/(main)/feature/types";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";
import { ISlide } from "@/module/(main)/slide/types";
import Link from "next/link";
import Image from "next/image";
import { getSlideUrl } from "../../utils";

//arrows
function PrevArrow({ onClick, ...rest }: any) {
  //   const { className, style, onClick, icon: Icon } = props;
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100  z-20 absolute top-1/2 start-0 md:start-0  shadow-md  cursor-pointer  text-2xl md:text-4xl">
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
    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-100  z-20 absolute top-1/2 end-0 md:end-0 shadow-md  cursor-pointer  text-2xl md:text-4xl">
      <BsChevronRight
        className={``}
        style={{ display: "block" }}
        onClick={onClick}
      />
    </div>
  );
}

interface Props {
  data: ISlide[];
  supplierId?: string;
}
function FeatureCarousel({ data, supplierId }: Props) {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={data.length > 1 ? true : false}
        beforeChange={() => setIsMoving(true)}
        afterChange={() => setIsMoving(false)}
        containerClass="first-carousel-container container"
        //   deviceType={this.props.deviceType}
        customRightArrow={<div></div>}
        customLeftArrow={<div></div>}
      >
        {data.map(({ _id, picture, url, name }) => (
          <Link key={_id} href={getSlideUrl(url, supplierId)}>
            {picture && (
              <div className="relative w-full h-96">
                <Image
                  src={picture}
                  quality={60}
                  fill
                  loading="lazy"
                  alt={name}
                />
              </div>
            )}
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default FeatureCarousel;
