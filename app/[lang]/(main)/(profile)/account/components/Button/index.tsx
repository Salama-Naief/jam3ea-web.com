"use client";
import Loader from "@/components/Loader";
import React from "react";
interface Props {
  className?: string;
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  isLoading?: boolean;
}
export default function Button({
  onClick,
  title,
  className,
  type = "button",
  isLoading = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type={type}
      className={` px-8 py-2 text-primary font-bold capitalize bg-slate-100 rounded shadow-lg hover:bg-primary hover:text-white transition duration-100 ${className}`}
    >
      {isLoading ? <Loader color="white" /> : title}
    </button>
  );
}
