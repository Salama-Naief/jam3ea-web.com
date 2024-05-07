import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

interface Props {
  items: {
    label: string;
    link: string;
  }[];
}
function Breadcrumbs({ items }: Props) {
  return (
    <div className="flex items-center gap-2 font-semibold my-4 text-lg">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 ${
            items.length === i + 1 && "text-gray-400"
          }`}
        >
          {items.length !== i + 1 ? (
            <Link href={item.link} className="block">
              {item.label}
            </Link>
          ) : (
            <div>{item.label}</div>
          )}
          {items.length !== i + 1 && <BsChevronRight />}
        </div>
      ))}
    </div>
  );
}

export default Breadcrumbs;
