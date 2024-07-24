"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { ICategory } from "../../types";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { useParams, useSearchParams } from "next/navigation";

interface Props {
  item: ICategory;
  close?: () => void;
}
function SellectItem({ item, close }: Props) {
  const [active, setActive] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<{
    id: string | null;
    subId: string | null;
  }>({ id: null, subId: null });
  const params = useParams();
  useEffect(() => {
    if (Array.isArray(item.children)) {
      const sellectedItem = item.children.find(
        (i) => i._id === params["subId"]
      );
      if (sellectedItem) {
        console.log("sellectedItem", sellectedItem);
        const category = item._id === sellectedItem.parent_id;
        if (category) {
          setCurrentCategory({
            id: item._id,
            subId: sellectedItem._id,
          });
          setActive(true);
        }
      } else {
        setCurrentCategory({
          id: null,
          subId: null,
        });
        setActive(false);
      }
    }
  }, [params, item]);
  return (
    <div className=" h-fit mb-3 relative z-10">
      <div className="flex justify-between gap-4 items-center h-fit">
        <div className="w-10 h-10 rounded-full overflow-hidden relative">
          {item.picture && (
            <Image
              src={item.picture}
              fill
              sizes="(max-width:200px) 160px, 160px"
              alt={item.name}
            />
          )}
        </div>
        <Link
          onClick={close}
          href={
            item.children.length > 0
              ? `/category/${item._id}/${item.children[0]._id}
                                        `
              : `/category/${item._id}`
          }
        >
          <h3
            className={` font-bold capitalize ${
              currentCategory.id === item._id ? "text-primary" : "text-gray-600"
            }`}
          >
            {item.name}
          </h3>
        </Link>
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
        {item.children.map((subItem) => (
          <Link
            onClick={close}
            key={subItem._id}
            href={"/category" + "/" + item._id + "/" + subItem._id}
            className="flex items-center gap-3 my-1 cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              {subItem.picture && (
                <Image
                  src={subItem.picture}
                  fill
                  sizes="(max-width:200px) 160px, 160px"
                  alt={subItem.name}
                />
              )}
            </div>
            <h3
              className={`${
                currentCategory.subId === subItem._id
                  ? "text-primary"
                  : "text-gray-400"
              } text-lg  hover:text-primary`}
            >
              {subItem.name}
            </h3>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default SellectItem;
