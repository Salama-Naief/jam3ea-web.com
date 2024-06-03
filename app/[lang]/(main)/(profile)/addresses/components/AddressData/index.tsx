"use client";
import React, { useContext, useState } from "react";
import { IUser } from "../../../types";
import Popup from "@/components/Popup";
import AddAddressForm from "../AddAddress/AddAddressForm";
import { object } from "yup";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { ICity } from "@/module/(main)/city/types";
import { CiEdit } from "react-icons/ci";

interface Props {
  user: IUser;
  city: ICity | null;
}
export default function AddressData({ user, city }: Props) {
  const [editAddress, setEditAddress] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language } = useContext(AuthContext);
  console.log("editAddress", editAddress);
  return (
    <div className="my-4 w-full  rounded-lg border border-secondary p-4">
      <div className="flex justify-between">
        {user.fullname}
        <button onClick={() => setIsOpen(true)}>
          <CiEdit className="text-gray-400" />
        </button>
      </div>
      {city && <div className="">{city.name as string}</div>}

      <Popup isOpen={isOpen} close={setIsOpen}>
        <AddAddressForm
          afterSubmit={() => {
            setIsOpen(false);
            setEditAddress(false);
          }}
          user={user}
        />
      </Popup>
    </div>
  );
}
