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

import { LANGUAGES } from "@/lib/enums";
import { ICart } from "@/module/(main)/cart/types";
import { Menu, ScrollArea } from "@mantine/core";
import { ICategory } from "@/module/(main)/category/types";
import Lang from "./Language";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Notificatoins from "./Notifications";

interface Props {
  categories: ICategory[];
  notifications?: any;
}
export default function Navbar({ categories, notifications }: Props) {
  const { isLoggedIn, translate, changeLanguage, language, logout } =
    useContext(AuthContext);
  const [isLanguageChangind, setIsLanguageChanging] = useState(false);
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
        <div className="w-full h-auto flex items-center gap-14">
          <div className="">
            <LogoSmall />
          </div>
          <div className="flex-grow">
            <SearchForm />
            <div className="flex justify-between text-[16px] capitalize font-bold pt-3">
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
                      } rounded px-4 py-1 hover:text-white hover:bg-primary transition-all duration-100`}
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
                              : "text-black bg-gray-200"
                          } rounded px-4 py-1 hover:text-white hover:bg-primary transition-all duration-100`}
                        >
                          {item.label}
                        </button>
                      </Menu.Target>
                      <Menu.Dropdown classNames={{ dropdown: "h-64" }}>
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
          <div className="flex items-center justify-center gap-6">
            <Cart />
            {/* change lang */}
            <Notificatoins notifications={notifications} />
            <Lang />
            <UserAvatar />
          </div>
        </div>
      </Container>
    </nav>
  );
}
