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
import kuwaitImage from "../../../public/assets/Kuwait.svg";
import { LANGUAGES } from "@/lib/enums";
import { ICart } from "@/module/(main)/cart/types";
import { Menu, ScrollArea } from "@mantine/core";
import { ICategory } from "@/module/(main)/category/types";

interface Props {
  categories: ICategory[];
}
export default function Navbar({ categories }: Props) {
  const { isLoggedIn, translate, changeLanguage, language, logout } =
    useContext(AuthContext);
  const [isLanguageChangind, setIsLanguageChanging] = useState(false);
  return (
    <nav className=" py-4 bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="w-full h-auto flex items-center gap-14">
          <div className="">
            <LogoSmall />
          </div>
          <div className="flex-grow">
            <SearchForm />
            <div className="flex justify-between text-xl capitalize font-bold pt-2">
              {navlinks(translate).map((item) => (
                <div key={item.id}>
                  {!item.withSubEments ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    <Menu trigger="click-hover" shadow="md">
                      <Menu.Target>
                        <button>{item.label}</button>
                      </Menu.Target>
                      <Menu.Dropdown h={100} classNames={{ dropdown: "h-64" }}>
                        <ScrollArea h={470}>
                          <div className="bg-white grid grid-cols-5 ">
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
            <button
              onClick={() => {
                setIsLanguageChanging(true);
                changeLanguage(
                  language === LANGUAGES.ENGLISH
                    ? LANGUAGES.ARABIC
                    : LANGUAGES.ENGLISH,
                  true
                );
              }}
            >
              <Image src={kuwaitImage} alt="" />
            </button>
            <UserAvatar />
          </div>
        </div>
      </Container>
    </nav>
  );
}
