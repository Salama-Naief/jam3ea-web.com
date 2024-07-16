"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { IUser } from "../../../types";
import { AuthContext } from "@/lib/providers/AuthProvider";

interface Props {
  user: IUser;
  dict: any;
}
function ProfileLinks({ user, dict }: Props) {
  const path = usePathname();
  const { translate } = useContext(AuthContext);
  const currentPath = path
    .split("/")
    .filter((i) => i)
    .slice(1)
    .join("/");
  const Links = [
    {
      label: translate("account_info"),
      link: "account",
    },
    {
      label: translate("saved_addresses"),
      link: "addresses",
    },
    {
      label: `${translate("my_wallet")}(${translate("credit")}) ${
        user ? user.wallet : 0
      } ${translate("currency")}`,
      link: "wallet",
    },
    {
      label: `${translate("my_wallet")}(${translate("my_points")}) ${
        user ? user.points : 0
      } ${translate("points")}`,
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
            } block hover:text-primary transition duration-100 font-bold  lg:text-lg`}
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
