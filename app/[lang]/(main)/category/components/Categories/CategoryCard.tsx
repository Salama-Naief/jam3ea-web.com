import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  link: string;
  selectedCategory?: boolean;
}

export default function CategoryCard({
  imageSrc,
  title,
  link,
  selectedCategory = false,
}: CategoryCardProps) {
  return (
    <div className={` bg-transparent mx-auto`}>
      <Link
        href={link}
        className={` flex flex-col items-center justify-center gap-2`}
      >
        <div
          className={`${
            selectedCategory ? "border border-primary rounded-full" : ""
          } bg-[#F1F1F1] shadow-sm py-3 px-1 relative rounded-3xl w-[80px]  h-[80px] lg:w-[130px] lg:h-[130px]  min-h-[74px] flex-grow flex items-center justify-center overflow-hidden`}
        >
          <Image
            className="mx-auto"
            fill
            quality={60}
            sizes="w-32 h-32"
            src={imageSrc}
            alt=""
            loading="lazy"
          />

          {/* <Image
            className="mx-auto md:hidden"
            fill
            quality={40}
            sizes="w-32 h-32"
            src={imageSrc}
            alt=""
            loading="lazy"
          /> */}
        </div>
        <div className="font-semibold text-center text-sm md:text-base">
          {title}
        </div>
      </Link>
    </div>
  );
}
