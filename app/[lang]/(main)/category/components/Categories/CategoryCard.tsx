import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  link: string;
}

export default function CategoryCard({
  imageSrc,
  title,
  link,
}: CategoryCardProps) {
  return (
    <div className="w-[140px] lg:w-[184px] h-[190px] bg-transparent">
      <Link
        href={link}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="bg-[#F1F1F1] shadow-sm py-3 px-1 relative rounded-3xl w-[100px]  h-[110px] lg:w-[130px] lg:h-[130px]  min-h-[74px] flex-grow flex items-center justify-center overflow-hidden">
          <div className="  ">
            <Image className="mx-auto" quality={100} src={imageSrc} alt="" />
          </div>
        </div>
        <div className="font-bold text-center">{title}</div>
      </Link>
    </div>
  );
}
