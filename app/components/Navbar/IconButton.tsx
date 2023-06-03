import Link from "next/link";

interface IconButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
  icon: any;
  title?: String;
  className?: String;
}

export default function IconButton({
  onClick,
  href,
  icon,
  title,
  className = '',
}: IconButtonProps) {
  if (href && href != '')
    return (
      <Link
        href={href}
        className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
      >
        {title && <span className="sr-only">{title}</span>}
        {icon}
      </Link>
    );

  return (
    <button
      type="button"
      className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
      onClick={onClick}
    >
      {title && <span className="sr-only">{title}</span>}
      {icon}
    </button>
  );
}
