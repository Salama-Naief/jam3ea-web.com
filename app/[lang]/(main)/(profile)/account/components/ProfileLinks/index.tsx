"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProfileLinks() {
  const path = usePathname();

  const currentPath = path
    .split("/")
    .filter((i) => i)
    .slice(1)
    .join("/");
  const Links = [
    {
      label: "Account Info",
      link: "account",
    },
    {
      label: "Saved Addresses",
      link: "addresses",
    },
    {
      label: "Wallet(My Credit)",
      link: "wallet",
    },
    {
      label: "Wallet(My Points) 300 Point",
      link: "points",
    },
  ];

  return (
    <div>
      {Links.map((item, i) => (
        <div key={i} className="px-4 w-fit py-3">
          <Link
            href={"/" + item.link}
            className={`${
              currentPath.includes(item.link) ? "text-primary" : "text-black"
            } block hover:text-primary transition duration-100 font-bold text-lg`}
          >
            {item.label}
          </Link>
          {currentPath.includes(item.link) && (
            <div className="px-4 mt-1">
              <div className="w-16 h-px bg-primary shadow-lg shadow-primary rounded-2xl"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProfileLinks;
