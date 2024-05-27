import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SliderSkeleton() {
  return (
    <div>
      <div className="my-10 grid grid-cols-2 gap-5 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(5)].map((item, i) => (
          <Skeleton height={120} key={i}></Skeleton>
        ))}
      </div>
      <div className="my-10 grid grid-cols-2 gap-5 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(5)].map((item, i) => (
          <Skeleton height={120} key={i}></Skeleton>
        ))}
      </div>
    </div>
  );
}

export default SliderSkeleton;
