import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import Container from "../Container";

function Product() {
  return (
    <div className="my-10 w-screen">
      <Container>
        <div>
          <Skeleton height={30} width={300} />
          <div className=" md:grid md:grid-cols-2 gap-6">
            <Skeleton height={200} />
            <div className="p-4">
              <Skeleton height={20} />
              <Skeleton height={20} />
              <div className="grid grid-cols-2 my-4 gap-4">
                <Skeleton height={30} />
                <Skeleton height={30} />
              </div>
              <div className="flex items-start justify-center my-4">
                <div className="w-full">
                  <Skeleton height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-2 gap-5 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(5)].map((item, i) => (
            <Skeleton height={120} key={i}></Skeleton>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Product;
