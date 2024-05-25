"use client";
import Image from "next/image";
import React, { forwardRef, useContext, useEffect, useState } from "react";
import avatar from "../../../../public/assets/avatar.svg";
import logedAvatar from "../../../../public/assets/logedIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Group, Menu, Text, UnstyledButton } from "@mantine/core";
import webRoutes from "@/lib/utils/webRoutes";
import { BsHeart, BsPerson } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi2";

import orderIcon from "../../../../public/assets/orders.svg";
import walletIcon from "../../../../public/assets/WalletPoints.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";

function UserAvatar() {
  const [open, setOpen] = useState<boolean>(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isDomReady, setIsDomReady] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsDomReady(true);
  }, []);
  const links = [
    {
      label: "Account Info",
      link: "/account",
      icon: <BsPerson size={25} />,
    },
    {
      label: "Saved Addresses",
      link: "/",
      icon: <MdOutlineLocationOn size={25} />,
    },

    {
      label: "Favourite",
      link: "/wishlist",
      icon: <BsHeart size={22} />,
    },
    {
      label: "My Orders",
      link: "/",
      icon: <Image src={orderIcon} alt="My Orders" />,
    },
    {
      label: "Wallet(My Credit)",
      link: "/",
      icon: <HiOutlineCreditCard size={25} />,
    },
    {
      label: "Wallet(My Points)",
      link: "/",
      icon: <Image src={walletIcon} alt="Wallet(My Points) " />,
    },
  ];

  //handle logout
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="relative">
      {isDomReady && isLoggedIn ? (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Image src={logedAvatar} alt="avatar" className="cursor-pointer" />
          </Menu.Target>

          <Menu.Dropdown p={0} className="bg-white">
            {links.map((item, i) => (
              <Menu.Item p={0} key={i} className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-2 hover:bg-gray-300  w-full py-2 text-base text-gray-800 rounded">
                  {item.icon}
                  <Link href={item.link} className="block font-semibold">
                    {item.label}
                  </Link>
                </div>
              </Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item p={0} onClick={() => handleLogout}>
              <span className="hover:bg-gray-300 block w-full py-2 px-4 text-base text-gray-800">
                Logout
              </span>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Link href={webRoutes.login}>
          <Image src={avatar} alt="avatar" className="cursor-pointer" />
        </Link>
      )}

      {/* {
        <motion.div
          initial={{ y: 20, opacity: 0, scaleY: 0 }}
          animate={
            open
              ? { y: 0, opacity: 1, scaleY: 1 }
              : { y: 20, opacity: 0, scaleY: 0 }
          }
          transition={{ duration: 0.1 }}
          className="bg-white origin-top rounded-md shadow  absolute top-10 -left-20 overflow-hidden"
        >
          <motion.ul
            initial={{ x: -10 }}
            animate={open ? { x: 0 } : { x: -10 }}
          >
            <li
              className={`px-6 py-2 hover:bg-gray-300 transition-all duration-100 font-bold whitespace-nowrap mb-1 `}
            >
              <Link href={"/"}>Account Info</Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-300 transition-all duration-100 font-bold whitespace-nowrap mb-1 `}
            >
              <Link href={"/"}>Account Info</Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-300 transition-all duration-100 font-bold whitespace-nowrap mb-1 `}
            >
              <Link href={"/"}>Account Info</Link>
            </li>
          </motion.ul>
        </motion.div>
      } */}
    </div>
  );
}

export default UserAvatar;
