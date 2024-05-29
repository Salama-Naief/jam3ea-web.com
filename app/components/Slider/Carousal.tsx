"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IFeature } from "@/module/(main)/feature/types";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";

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
  type?: "normal" | "bestSeller";
  autoPlay?: boolean;
  xlSize?: number;
  lgSize?: number;
  mdSize?: number;
  smSize?: number;
  // children: React.ReactNode;
  data: IProduct[];
}
function Slider({
  type = "bestSeller",
  autoPlay = false,
  lgSize = 5,
  mdSize = 3,
  smSize = 2,
  xlSize = 5,
  data,
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
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={autoPlay}
        beforeChange={() => setIsMoving(true)}
        afterChange={() => setIsMoving(false)}
        containerClass="first-carousel-container container"
        //   deviceType={this.props.deviceType}
        customRightArrow={autoPlay ? <div></div> : <PrevArrow />}
        customLeftArrow={autoPlay ? <div></div> : <NextArrow />}
      >
        {data.map((product) => (
          <ProductCard
            key={product.sku}
            sku={product.sku}
            name={product.name}
            price={product.price}
            oldPrice={product.old_price}
            picture={product.picture}
            isInWhishlist={product.wishlist_status.is_exists}
            cartStatus={product.cart_status}
            isAvailable={product.availability}
            maxQuantityCart={product.max_quantity_cart}
            hasVariants={product.has_variants}
            currency={"kwd"}
            type={type}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
