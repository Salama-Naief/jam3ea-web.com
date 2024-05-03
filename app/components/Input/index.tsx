"use client";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  id?: string;
  name: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<any>) => void;
  type: string;
  disabled?: boolean;
  error?: string | undefined;
  value: string | number;
  className?: string;
  label?: string;
}

export default function Input({
  disabled = false,
  handleChange,
  id,
  name,
  placeholder,
  type,
  value,
  className = "",
  error = "",
  label = "",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "checkbox")
    return (
      <>
        <input
          type="checkbox"
          required
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary  focus:ring-2"
        />
        <Link href={webRoutes.privacy}>
          <div className="px-3 hover:text-secondary hover:underline">
            {label}
          </div>
        </Link>
      </>
    );

  return (
    <div className="flex items-center mt-5 gap-2">
      <div className="relative w-full  ">
        <input
          disabled={disabled}
          type={showPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`
                  peer
                  w-full
                  p-2.5  
                  relative
                  bg-gray-100 
                  border
                  rounded-md
                  outline-none
                  transition
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  text-start
                  ${
                    error
                      ? "border-danger focus:border-danger text-danger"
                      : "border-gray-100 focus:border-primary"
                  }
                `}
        />
        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className={`
              ${error && "text-danger"}
              end-3 absolute top-2.5 cursor-pointer text-mainColor`}
          >
            {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
          </div>
        )}

        {error && <p className="text-danger  text-start">{error}</p>}
      </div>
    </div>
  );
}
