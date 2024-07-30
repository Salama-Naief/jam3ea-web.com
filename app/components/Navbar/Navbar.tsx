"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import LogoSmall from "../Logo/index";
import { AuthContext } from "@/lib/providers/AuthProvider";
import SearchForm from "./searchForm";
import { Navlinks } from "@/lib/enums/navLinks";
import Link from "next/link";
import Cart from "./Cart";
import UserAvatar from "./UserAvatar";
import Container from "../Container";
import Image from "next/image";
import { Drawer, Menu, Modal, ScrollArea } from "@mantine/core";
import { ICategory } from "@/module/(main)/category/types";
import Lang from "./Language";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";
import Notificatoins from "./Notifications";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import SubCategoriesList from "@/module/(main)/category/components/Categories/SubCategoriesList";
import SellectItem from "@/module/(main)/category/components/Categories/SellectItem";
import { LANGUAGES } from "@/lib/enums";
import Popup from "../Popup";

interface Props {
  categories: ICategory[];
  notifications?: any;
  isVip: string | undefined;
}
export default function Navbar({
  categories,
  notifications,
  isVip: isVIP,
}: Props) {
  const { isLoggedIn, translate, changeLanguage, language, logout } =
    useContext(AuthContext);
  const [opened, { open, close }] = useDisclosure(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["isVIP"]);
  console.log("cookies", cookies.isVIP);
  const [isVip, setIVip] = useState(cookies.isVIP);
  const path = usePathname();
  useEffect(() => {
    setIVip(cookies.isVIP);
  }, [cookies.isVIP, path]);

  const handleIsVIP = (link: string) => {
    if (link.includes("/mart")) {
      setCookie("isVIP", false, { path: "/" });
      setIVip("false");
    } else if (link.includes("/prime")) {
      setCookie("isVIP", true, { path: "/" });
      setIVip("true");
    } else {
      setCookie("isVIP", isVip, { path: "/" });
      setIVip(isVip);
    }
  };

  return (
    <nav className=" py-4 bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="w-full h-auto flex items-center justify-between lg:justify-start lg:gap-14">
          <div className="flex items-center gap-2">
            <HiBars3CenterLeft size={30} className="hidden" />
            <LogoSmall setIVip={setIVip} />
          </div>
          {/* show in large screens */}
          <div className="hidden lg:block flex-grow">
            <SearchForm />
            <div className="flex items-center gap-6 !text-[16px] capitalize font-bold pt-3">
              <Menu trigger="click-hover" shadow="md">
                <Menu.Target>
                  <button
                    className={`${
                      path.includes("/category")
                        ? "text-white bg-primary"
                        : "text-black bg-gray-100"
                    } rounded-full px-6 py-1 hover:text-white !text-[16px] hover:bg-primary transition-all duration-100`}
                  >
                    {translate("all_categories")}
                  </button>
                </Menu.Target>
                <Menu.Dropdown classNames={{ dropdown: "h-[470px]" }}>
                  <ScrollArea h={470}>
                    <div className="bg-white grid grid-cols-4 ">
                      {categories &&
                        categories.map((item) => (
                          <Menu.Item key={item._id}>
                            <Link
                              href={
                                item.children.length > 0
                                  ? `/category/${item._id}/${item.children[0]._id}
                                        `
                                  : `/category/${item._id}`
                              }
                              className="flex max-w-20 items-center gap-2 p-1 bg-gray-200 rounded hover:bg-primary hover:text-white transition-all duration-150"
                            >
                              <Image
                                src={item.picture}
                                width={40}
                                height={40}
                                className="rounded"
                                alt={item.name}
                              />
                              <p className="font-bold">{item.name}</p>
                            </Link>
                          </Menu.Item>
                        ))}
                    </div>
                  </ScrollArea>
                </Menu.Dropdown>
              </Menu>
              <Link
                href={"/mart"}
                onClick={() => handleIsVIP("/mart")}
                className={`${
                  !isVip || isVip === "false"
                    ? "text-white bg-primary hidden"
                    : "text-black bg-gray-100 block"
                }
                       block rounded-full px-6 py-1  hover:text-white hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_mart")}
              </Link>
              <Link
                href={"/prime"}
                onClick={() => handleIsVIP("/prime")}
                className={`${
                  isVip && isVip === "true"
                    ? "text-white bg-primary hidden"
                    : "text-black bg-gray-100 block"
                }
                       block rounded-full px-6 py-1  hover:text-white hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_prime")}
              </Link>
              <Link
                href={"/stores"}
                onClick={() => handleIsVIP("/stores")}
                className={`${
                  path.includes("/stores")
                    ? "text-white bg-primary"
                    : "text-black bg-gray-100"
                }
                       block rounded-full px-6 py-1  hover:text-white hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_stores")}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-center gap-3 lg:gap-6">
            <Cart />
            {/* change lang */}
            <Notificatoins notifications={notifications} />
            <Lang />
            <UserAvatar />
          </div>
        </div>

        {/* show in small screens */}
        <div className="block lg:hidden flex-grow mt-3">
          <SearchForm />
          <ScrollArea w={"100%"}>
            <div className="flex items-center justify-between md:justify-start md:gap-4 !text-[12px] md:!text-[14px] capitalize font-bold pt-3">
              <div className="">
                {/* <Menu trigger="click-hover" shadow="md"> */}
                {/* <Menu.Target> */}
                <button
                  onClick={open}
                  className={`${
                    path.includes("/category")
                      ? "text-primary md:text-white md:bg-primary"
                      : "text-black md:bg-gray-100"
                  } rounded-full md:px-3  py-1 whitespace-nowrap hover:text-primary md:hover:text-white !text-[12px] md:!text-[14px] md:hover:bg-primary transition-all duration-100`}
                >
                  {translate("all_categories")}
                </button>
                {/* </Menu> */}
                <Drawer
                  opened={opened}
                  onClose={close}
                  title={translate("all_categories")}
                  transitionProps={{
                    transition:
                      language === LANGUAGES.ARABIC
                        ? "fade-left"
                        : "fade-right",
                    duration: 0,
                    timingFunction: "linear",
                  }}
                >
                  {/* <Popup isOpen={isOpen} close={() => setIsOpen(false)}> */}

                  <ScrollArea h={"100%"}>
                    {categories &&
                      categories &&
                      Array.isArray(categories) &&
                      categories.map((item) => (
                        <SellectItem close={close} item={item} key={item._id} />
                      ))}
                  </ScrollArea>
                  {/* </Popup> */}
                </Drawer>
              </div>
              <Link
                href={"/mart"}
                onClick={() => handleIsVIP("/mart")}
                className={`${
                  !isVip || isVip === "false"
                    ? "text-primary md:text-white md:bg-primary hidden"
                    : "text-black md:bg-gray-100 block"
                } rounded-full md:px-3  py-1 whitespace-nowrap sm:hover:text-primary md:hover:text-white !text-[14px] md:!text-[16px] md:hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_mart")}
              </Link>
              <Link
                href={"/prime"}
                onClick={() => handleIsVIP("/prime")}
                className={`${
                  isVip && isVip === "true"
                    ? "text-primary md:text-white md:bg-primary hidden"
                    : "text-black md:bg-gray-100 block"
                } rounded-full md:px-3  py-1 whitespace-nowrap sm:hover:text-primary md:hover:text-white !text-[14px] md:!text-[16px] md:hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_prime")}
              </Link>
              <Link
                href={"/stores"}
                onClick={() => handleIsVIP("/stores")}
                className={`${
                  path.includes("/stores")
                    ? "text-primary md:text-white md:bg-primary"
                    : "text-black md:bg-gray-100"
                } rounded-full md:px-3  py-1 whitespace-nowrap sm:hover:text-primary md:hover:text-white !text-[14px] md:!text-[16px] md:hover:bg-primary transition-all duration-100`}
              >
                {translate("jameia_stores")}
              </Link>
            </div>
          </ScrollArea>
        </div>
      </Container>
    </nav>
  );
}
