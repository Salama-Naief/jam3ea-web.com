"use client";
import Image from "next/image";
import React, { useState } from "react";
import avatar from "../../../../public/assets/avatar.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Menu, Button, Text, rem } from "@mantine/core";

function UserAvatar() {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  console.log("path", path);
  const links = [
    {
      label: "Account Info",
      link: "/",
    },
    {
      label: "Saved Addresses",
      link: "/",
    },
    {
      label: "Wallet(My Credit) 22.00KD",
      link: "/",
    },
    {
      label: "Wallet(My Points) 300 Point",
      link: "/",
    },
  ];

  //handle logout
  const handleLogout = () => {};
  return (
    <div className="relative">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Image src={avatar} alt="avatar" className="cursor-pointer" />
        </Menu.Target>

        <Menu.Dropdown p={0} className="bg-white">
          {links.map((item, i) => (
            <Menu.Label p={0} key={i}>
              <Link
                href={item.link}
                className="hover:bg-gray-300 block w-full py-2 px-4 text-base text-gray-800"
              >
                {item.label}
              </Link>
            </Menu.Label>
          ))}
          <Menu.Divider />
          <Menu.Item p={0} onClick={() => handleLogout}>
            <span className="hover:bg-gray-300 block w-full py-2 px-4 text-base text-gray-800">
              Logout
            </span>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
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
