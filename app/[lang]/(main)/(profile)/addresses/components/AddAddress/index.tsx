"use client";

import Popup from "@/components/Popup";
import { useContext, useEffect, useState } from "react";
import AddAddressForm from "./AddAddressForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { Modal } from "@mantine/core";
import InteractiveMap from "../Map";
import { IUser } from "../../../types";

interface Props {
  user: IUser;
}
export default function AddAddress({ user }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [allowedCity, setAllowedCity] = useState<boolean>(true);
  const { translate } = useContext(AuthContext);
  return (
    <>
      <button
        className="bg-primary text-white flex gap-2 items-center justify-center w-full p-3 rounded-2xl mb-3 font-medium"
        onClick={() => setIsOpen(true)}
      >
        {translate("add_new_address")}{" "}
      </button>
      {/* <Popup isOpen={isOpen} close={setIsOpen} backBtn>
        <AddAddressForm afterSubmit={() => setIsOpen(false)} />
      </Popup> */}
      <Popup isOpen={isOpen} close={setIsOpen}>
        <div>
          {!allowedCity ? (
            <AddAddressForm
              setAllowedCity={setAllowedCity}
              user={user}
              showMap={true}
              afterSubmit={() => setIsOpen(false)}
            />
          ) : (
            <InteractiveMap
              staticMap={false}
              user={user}
              setIsOpen={setIsOpen}
              setAllowedCity={setAllowedCity}
            />
          )}
        </div>
      </Popup>
    </>
  );
}
