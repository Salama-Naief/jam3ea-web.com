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
  const { isLoggedIn, logout, translate } = useContext(AuthContext);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);
  const links = [
    {
      label: translate("account_info"),
      link: webRoutes.profile,
      icon: <BsPerson size={25} />,
    },
    {
      label: translate("saved_addresses"),
      link: webRoutes.addresses,
      icon: <MdOutlineLocationOn size={25} />,
    },

    {
      label: translate("favourite"),
      link: webRoutes.wishlist,
      icon: <BsHeart size={22} />,
    },
    {
      label: translate("orders"),
      link: webRoutes.orders,
      icon: <Image src={orderIcon} alt="My Orders" />,
    },
    {
      label: translate("my_wallet") + "(" + translate("credit") + ")",
      link: webRoutes.wallet,
      icon: <HiOutlineCreditCard size={25} />,
    },
    {
      label: translate("my_wallet") + "(" + translate("points") + ")",
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
          <h3 className="text-center text-2xl font-bold ">
            {translate("logout")}
          </h3>
          <h6 className="text-center text-primary mt-2 mb-6">
            {translate("are_you_sure_to_logout")}
          </h6>
          <div className="flex justify-around">
            <button
              onClick={() => handleLogout()}
              className="bg-primary text-white font-bold rounded px-6 py-2"
            >
              {translate("yes")}
            </button>
            <button
              onClick={close}
              className="bg-gray-300 font-bold rounded px-6 py-2"
            >
              {translate("no")}
            </button>
          </div>
        </div>
      </Modal>
      {isDomReady && isLoggedIn ? (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div className="flex flex-col items-center">
              <div className="relative w-[23px] lg:w-[32px] h-[23px] lg:h-[32px]">
                <Image
                  src={logedAvatar}
                  alt="avatar"
                  // width={30}
                  // height={30}
                  fill
                  className="cursor-pointer"
                />
              </div>
              <div className="text-primary text-sm hidden  font-semibold">
                My Account
              </div>
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
                {translate("logout")}
              </span>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Link href={webRoutes.login} className="flex flex-col items-center">
          <div className="relative w-[23px] lg:w-[32px] h-[23px] lg:h-[32px]">
            <Image
              src={avatar}
              // width={30}
              // height={30}
              fill
              alt="avatar"
              className="cursor-pointer"
            />
          </div>
          <div className="font-semibold text-sm text-secondary hidden ">
            Login
          </div>
        </Link>
      )}
    </div>
  );
}

export default UserAvatar;
