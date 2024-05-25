"use client";
import React from "react";
interface Props {
  className?: string;
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
export default function Button({
  onClick,
  title,
  className,
  type = "button",
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` px-8 py-2 text-primary font-bold capitalize bg-slate-100 rounded shadow-lg hover:bg-primary hover:text-white transition duration-100 ${className}`}
    >
      {title}
    </button>
  );
}
