"use client";
import Image from "next/image";
import React, { forwardRef, useContext, useEffect, useState } from "react";
import avatar from "../../../../public/assets/avatar.svg";
import logedAvatar from "../../../../public/assets/logedIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Group, Menu, Modal, Text, UnstyledButton } from "@mantine/core";
import webRoutes from "@/lib/utils/webRoutes";
import { BsHeart, BsPerson } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi2";

import orderIcon from "../../../../public/assets/orders.svg";
import walletIcon from "../../../../public/assets/WalletPoints.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { useDisclosure } from "@mantine/hooks";

function UserAvatar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);
  const links = [
    {
      label: "Account Info",
      link: webRoutes.profile,
      icon: <BsPerson size={25} />,
    },
    {
      label: "Saved Addresses",
      link: webRoutes.addresses,
      icon: <MdOutlineLocationOn size={25} />,
    },

    {
      label: "Favourite",
      link: webRoutes.wishlist,
      icon: <BsHeart size={22} />,
    },
    {
      label: "My Orders",
      link: webRoutes.orders,
      icon: <Image src={orderIcon} alt="My Orders" />,
    },
    {
      label: "Wallet(My Credit)",
      link: webRoutes.wallet,
      icon: <HiOutlineCreditCard size={25} />,
    },
    {
      label: "Wallet(My Points)",
      link: webRoutes.points,
      icon: <Image src={walletIcon} alt="Wallet(My Points) " />,
    },
  ];

  //handle logout
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="relative">
      <Modal opened={opened} onClose={close} centered>
        <div>
          <h3 className="text-center text-2xl font-bold ">Logout</h3>
          <h6 className="text-center text-primary mt-2 mb-6">
            Are you sure you want to log out?
          </h6>
          <div className="flex justify-around">
            <button
              onClick={() => handleLogout()}
              className="bg-primary text-white font-bold rounded px-6 py-2"
            >
              Yes
            </button>
            <button
              onClick={close}
              className="bg-gray-300 font-bold rounded px-6 py-2"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      {isDomReady && isLoggedIn ? (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div className="flex flex-col items-center">
              <Image
                src={logedAvatar}
                alt="avatar"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <div className="text-primary font-semibold">My Account</div>
            </div>
          </Menu.Target>

          <Menu.Dropdown p={0} className="bg-white ">
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
            <Menu.Item p={0} onClick={open}>
              <span className="hover:bg-gray-300 block w-full py-2 px-4 text-base text-gray-800">
                Logout
              </span>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Link href={webRoutes.login} className="flex flex-col items-center">
          <Image
            src={avatar}
            width={40}
            height={40}
            alt="avatar"
            className="cursor-pointer"
          />
          <div className="font-semibold text-secondary">Login&Register</div>
        </Link>
      )}
    </div>
  );
}

export default UserAvatar;
