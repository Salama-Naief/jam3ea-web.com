"use client";
import React, { useContext } from "react";
import LogoSmall from "../Logo/LogoSmall";
import { AuthContext } from "@/lib/providers/AuthProvider";
import SearchForm from "./searchForm";
import { navlinks } from "@/lib/enums/navLinks";
import Link from "next/link";
import Cart from "./Cart";
import UserAvatar from "./UserAvatar";
import Container from "../Container";
import Image from "next/image";
import kuwaitImage from "../../../public/assets/Kuwait.svg";

export default function Navbar() {
  const { translate } = useContext(AuthContext);
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
                  <Link href={item.link}>{item.label}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Cart length="12" />
            <Image src={kuwaitImage} alt="" />
            <UserAvatar />
          </div>
        </div>
      </Container>
    </nav>
  );
}
