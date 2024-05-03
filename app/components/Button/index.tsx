import { ButtonHTMLAttributes, FC } from "react";
import { LoadingIcon } from "../Icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string;
  loading?: boolean;
}

export default function Button({
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full py-2 rounded-lg mb-3 ${
        disabled
          ? "focus:outline-none text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
          : "bg-primary text-white"
      } ${className}`}
      disabled={loading || disabled}
      type={props.type || "button"}
      {...props}
    >
      {loading ? <LoadingIcon /> : children}
    </button>
  );
}
