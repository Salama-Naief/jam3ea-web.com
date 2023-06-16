import Link from 'next/link';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  link: string;
}

export default function CategoryCard({
  imageSrc,
  title,
  link,
}: CategoryCardProps) {
  return (
    <Link href={link} className="flex items-center flex-col gap-1">
      <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] h-full flex items-center justify-center overflow-hidden">
        <img className="h-auto max-w-full" src={imageSrc} alt="" />
      </div>
      <span className="text-xs text-center">{title}</span>
    </Link>
  );
}
