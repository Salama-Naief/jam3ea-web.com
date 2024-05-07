"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  item: {
    id: number | string;
    name: string;
    image: string | StaticImageData;
    sub: [
      {
        id: number | string;
        name: string;
        image: string | StaticImageData;
      }
    ];
  };
}
function SellectItem({ item }: Props) {
  const [active, setActive] = useState<boolean>(false);
  console.log("active", active);
  return (
    <div className="h-fit mb-3 relative z-10">
      <div className="flex justify-between items-center h-fit">
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image src={item.image} fill alt={item.name} />
        </div>
        <h3 className="text-xl font-bold capitalize text-primary">
          {item.name}
        </h3>
        <div className="cursor-pointer p-1 rounded-full shadow">
          <BsChevronDown size={21} onClick={() => setActive(!active)} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          active ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.1 }}
        className={`px-2  origin-top`}
      >
        {item.sub.map((subItem) => (
          <div
            key={subItem.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={subItem.image} fill alt={subItem.name} />
            </div>
            <h3 className="text-xl text-gray-400">{subItem.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SellectItem;
