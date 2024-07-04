"use client";
import React, { useContext, useState } from "react";
import LogoSmall from "../Logo/index";
import { AuthContext } from "@/lib/providers/AuthProvider";
import SearchForm from "./searchForm";
import { navlinks } from "@/lib/enums/navLinks";
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
}
export default function Navbar({ categories, notifications }: Props) {
  const { isLoggedIn, translate, changeLanguage, language, logout } =
    useContext(AuthContext);
  const [opened, { open, close }] = useDisclosure(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["isVIP"]);
  const path = usePathname();

  console.log(" path.includes(item.link)", path.includes("category"));
  const handleIsVIP = (link: string) => {
    if (link.includes("/mart")) {
      setCookie("isVIP", true, { path: "/" });
    } else if (link.includes("/prime")) {
      setCookie("isVIP", false, { path: "/" });
    } else {
      setCookie("isVIP", false, { path: "/" });
    }
  };
  return (
    <nav className=" py-4 bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="w-full h-auto flex items-center justify-between lg:justify-start lg:gap-14">
          <div className="flex items-center gap-2">
            <HiBars3CenterLeft size={30} className="lg:hidden" />
            <LogoSmall />
          </div>
          {/* show in large screens */}
          <div className="hidden lg:block flex-grow">
            <SearchForm />
            <div className="flex items-center gap-6 !text-[16px] capitalize font-bold pt-3">
              {navlinks(translate).map((item) => (
                <div key={item.id}>
                  {!item.withSubEments ? (
                    <Link
                      href={item.link}
                      onClick={() => handleIsVIP(item.link)}
                      className={`${
                        path.includes(item.link)
                          ? "text-white bg-primary"
                          : "text-black bg-gray-100"
                      } block rounded-full px-6 py-1  hover:text-white hover:bg-primary transition-all duration-100`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Menu trigger="click-hover" shadow="md">
                      <Menu.Target>
                        <button
                          className={`${
                            path.includes(item.link)
                              ? "text-white bg-primary"
                              : "text-black bg-gray-100"
                          } rounded-full px-6 py-1 hover:text-white !text-[16px] hover:bg-primary transition-all duration-100`}
                        >
                          {item.label}
                        </button>
                      </Menu.Target>
                      <Menu.Dropdown classNames={{ dropdown: "h-[470px]" }}>
                        <ScrollArea h={470}>
                          <div className="bg-white grid grid-cols-4 ">
                            {categories &&
                              categories.map((item) => (
                                <Menu.Item key={item._id}>
                                  <Link
                                    href={`/category?id=${
                                      item.children.length > 0
                                        ? item.children[0]._id
                                        : item._id
                                    }`}
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
                  )}
                </div>
              ))}
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
              {navlinks(translate).map((item) => (
                <div key={item.id}>
                  {!item.withSubEments ? (
                    <Link
                      href={item.link}
                      onClick={() => handleIsVIP(item.link)}
                      className={`${
                        path.includes(item.link)
                          ? "text-primary md:text-white md:bg-primary"
                          : "text-black md:bg-gray-100"
                      } rounded-full md:px-3  py-1 whitespace-nowrap sm:hover:text-primary md:hover:text-white !text-[12px] md:!text-[14px] md:hover:bg-primary transition-all duration-100`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="!ltr">
                      {/* <Menu trigger="click-hover" shadow="md"> */}
                      {/* <Menu.Target> */}
                      <button
                        onClick={open}
                        className={`${
                          path.includes(item.link)
                            ? "text-primary md:text-white md:bg-primary"
                            : "text-black md:bg-gray-100"
                        } rounded-full md:px-3  py-1 whitespace-nowrap hover:text-primary md:hover:text-white !text-[12px] md:!text-[14px] md:hover:bg-primary transition-all duration-100`}
                      >
                        {item.label}
                      </button>
                      {/* </Menu.Target> */}
                      {/* <Menu.Dropdown
                          classNames={{ dropdown: "h-[470px] !rounded-xl" }}
                        >
                          <ScrollArea h={470}>
                            <div className="bg-white grid grid-cols-4 ">
                              {categories &&
                                categories.map((item) => (
                                  <Menu.Item key={item._id}>
                                    <Link
                                      href={`/category?id=${
                                        item.children.length > 0
                                          ? item.children[0]._id
                                          : item._id
                                      }`}
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
                        </Menu.Dropdown> */}
                      {/* </Menu> */}
                      <Drawer
                        opened={opened}
                        onClose={close}
                        title={translate("all_categories")}
                        // position={
                        //   language === LANGUAGES.ARABIC ? "right" : "left"
                        // }
                        transitionProps={{
                          transition:
                            language === LANGUAGES.ARABIC
                              ? "fade-left"
                              : "fade-right",
                          duration: 150,
                          timingFunction: "linear",
                        }}
                      >
                        {/* <Popup isOpen={isOpen} close={() => setIsOpen(false)}> */}

                        <ScrollArea h={"100%"}>
                          {categories &&
                            categories &&
                            Array.isArray(categories) &&
                            categories.map((item) => (
                              <SellectItem
                                close={close}
                                item={item}
                                key={item._id}
                              />
                            ))}
                        </ScrollArea>
                        {/* </Popup> */}
                      </Drawer>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </Container>
    </nav>
  );
}
