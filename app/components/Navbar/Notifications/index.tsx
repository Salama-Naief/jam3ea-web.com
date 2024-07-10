"use client";
import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { Menu } from "@mantine/core";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { formatDate } from "date-fns";

interface Props {
  notifications?: any;
}
function Notificatoins({ notifications }: Props) {
  const { language } = useContext(AuthContext);
  console.log("notifications", notifications);

  return (
    <div className=" relative">
      {/* <Image src={cartIcon} alt="cart" /> */}
      <Menu>
        <Menu.Target>
          <div className="relative">
            {notifications && (
              <div className="absolute -top-1 -end-0 text-sm bg-danger flex items-center justify-center rounded-full w-3 h-3"></div>
            )}

            <BsBell size={30} className="text-secondary hidden lg:block" />
            <BsBell className="text-secondary w-[22px] h-[22px] block lg:hidden" />
          </div>
        </Menu.Target>
        <Menu.Dropdown className="bg-white !p-0 !w-1/2 ">
          {notifications ? (
            <>
              <Menu.Item className="w-full whitespace-normal !bg-red-50 hover:bg-gray-100 !px-6 !py-4">
                <div className="font-bold">{notifications.title[language]}</div>
                <div className="font-semibold py-2">
                  {notifications.body[language]}
                </div>
                <div className="!text-gary-200">
                  {formatDate(notifications.created, "PPpp")}
                </div>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item>No Notifications Found</Menu.Item>
          )}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default Notificatoins;
