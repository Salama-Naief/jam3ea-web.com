"use client";
import React, { useContext } from "react";
import Container from "../Container";
import { footerLinks } from "@/lib/enums/footerLinks";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import Image from "next/image";
import footerImage from "../../../public/assets/footer_contact.png";
import { AuthContext } from "@/lib/providers/AuthProvider";

function Footer() {
  const { translate } = useContext(AuthContext);
  return (
    <footer className="p-4 mt-8 pb-16 pt-10 bg-secondary text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {footerLinks(translate).map((item) => (
            <div key={item.id}>
              <h2 className="text-xl md:text-2xl font-bold py-4">
                {item.title}
              </h2>
              <div className="px-2 ">
                {item.links.map((link) => (
                  <Link key={link.id} href={link.link} className="block my-2">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-xl md:text-2xl  font-bold py-4">
              {translate("connect_with_us")}
            </h2>
            <div className="flex gap-2 mt-4 items-center">
              <BsTelephone />
              <p>22274222</p>
            </div>
            <div className="flex gap-6 my-4 text-xl items-center">
              <BsFacebook />
              <BsInstagram />
            </div>
            <div className="flex justify-center">
              <Image
                src={footerImage}
                width={50}
                height={50}
                alt="footer contact"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
