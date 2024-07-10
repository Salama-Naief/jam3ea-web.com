"use client";
import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import { LANGUAGES } from "@/lib/enums";
import kuwaitFlag from "../../../../public/assets/Kuwait.svg";
import englishFlag from "../../../../public/assets/englsihFlag.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";

const ImageComp = ({ img }: { img: StaticImageData }) => {
  return (
    <>
      <Image
        src={img}
        alt="flag"
        width={42}
        height={27}
        className="cursor-pointer hidden lg:block"
      />
      <Image
        src={img}
        alt="flag"
        width={30}
        height={20}
        className="cursor-pointer lg:hidden"
      />
    </>
  );
};
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
              <div>
                <ImageComp img={kuwaitFlag} />
              </div>
            ) : (
              <div>
                <ImageComp img={englishFlag} />
              </div>
            )}
          </Menu.Target>
          <Menu.Dropdown classNames={{ dropdown: "bg-white" }}>
            <Menu.Item
              className=""
              onClick={() => changeLanguage(LANGUAGES.ARABIC, true)}
            >
              <div className="flex gap-3 items-center">
                <ImageComp img={kuwaitFlag} />
                <p
                  className={`${
                    language === LANGUAGES.ARABIC
                      ? "text-primary"
                      : "text-black"
                  } font-bold text-sm md:text-base lg:text-lg`}
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
                <ImageComp img={englishFlag} />
                <p
                  className={`${
                    language === LANGUAGES.ENGLISH
                      ? "text-primary"
                      : "text-black"
                  } font-bold text-sm md:text-base lg:text-lg`}
                >
                  English
                </p>
              </div>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <ImageComp img={englishFlag} />
      )}
    </div>
  );
}

export default Lang;
