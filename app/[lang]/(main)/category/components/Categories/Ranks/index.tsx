"use client";
import React from "react";
import { IRank } from "../../../types";
import { IDataLoadedResponse } from "@/lib/types";
import Image from "next/image";
import MainSlider from "@/components/Slider";

interface Props {
  ranks: IDataLoadedResponse<IRank>;
}
function Ranks({ ranks }: Props) {
  // Function to handle scroll with margin
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -230; // Adjust this value as needed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="my-4">
      {ranks && (
        // <MainSlider xlSize={6} lgSize={5} mdSize={4} smSize={3}>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {ranks &&
            ranks.data &&
            ranks.data.map((item) => (
              <a
                // href={"category" + "?id=" + item._id}
                // href={`#${item._id}`}
                key={item._id}
                className="block"
                onClick={(event) => handleScroll(event, item._id)}
              >
                {item.picture && (
                  <div
                    className={`${
                      // item._id === searchParams["id"]
                      // ? "border-primary"
                      // :
                      "border-gray-300"
                    } border-2 p-1 relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full shadow-md mx-auto`}
                  >
                    <Image src={item.picture} fill alt={item.name} />
                  </div>
                )}
                <div className="md:font-semibold text-center">{item.name}</div>
              </a>
            ))}
        </div>
        // </MainSlider>
      )}
    </div>
  );
}

export default Ranks;
