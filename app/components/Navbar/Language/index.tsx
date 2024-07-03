"use client";
import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@mantine/core";
import Image from "next/image";
import { LANGUAGES } from "@/lib/enums";
import kuwaitFlag from "../../../../public/assets/Kuwait.svg";
import englishFlag from "../../../../public/assets/englsihFlag.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";

function Lang() {
  const { translate, changeLanguage, language } = useContext(AuthContext);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);
  return (
    <div>
      {isDomReady ? (
        <Menu>
          <Menu.Target>
            {language === LANGUAGES.ARABIC ? (
              <Image
                src={kuwaitFlag}
                alt="flag"
                width={40}
                height={30}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src={englishFlag}
                alt="flag"
                width={50}
                height={30}
                className="cursor-pointer"
              />
            )}
          </Menu.Target>
          <Menu.Dropdown classNames={{ dropdown: "bg-white" }}>
            <Menu.Item
              className=""
              onClick={() => changeLanguage(LANGUAGES.ARABIC, true)}
            >
              <div className="flex gap-3 items-center">
                <Image src={kuwaitFlag} alt="flag" width={40} height={30} />
                <p
                  className={`${
                    language === LANGUAGES.ARABIC
                      ? "text-primary"
                      : "text-black"
                  } font-bold text-lg`}
                >
                  Kuwait
                </p>
              </div>
            </Menu.Item>
            <Menu.Item
              className=""
              onClick={() => changeLanguage(LANGUAGES.ENGLISH, true)}
            >
              <div className="flex items-center gap-3">
                <Image src={englishFlag} alt="flag" width={40} height={30} />
                <p
                  className={`${
                    language === LANGUAGES.ENGLISH
                      ? "text-primary"
                      : "text-black"
                  } font-bold text-lg`}
                >
                  English
                </p>
              </div>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Image
          src={englishFlag}
          alt="flag"
          width={50}
          height={30}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export default Lang;
