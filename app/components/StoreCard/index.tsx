import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string | StaticImageData;
  label: string;
  link: string;
  name: string;
}
function StoreCard({ image, label, link, name }: Props) {
  return (
    <Link href={link}>
      <div className="bg-gray-100  shadow-md p-3 w-full h-full rounded-xl">
        <div className="relative w-full h-64">
          <Image
            src={image}
            fill
            alt={name}
            quality={100}
            objectFit="contian"
            priority
          />
        </div>
        <div className="text-center text-3xl text-secondary font-bold">
          {name}
        </div>
      </div>
      <div
        className="text-center text-lg py-2"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </Link>
  );
}

export default StoreCard;
