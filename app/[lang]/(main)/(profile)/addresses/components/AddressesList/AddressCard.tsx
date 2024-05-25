"use client";

import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IAddress } from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import { AuthContext } from "@/lib/providers/AuthProvider";

interface AddressCardProps {
  address: IAddress;
  city: ICity;
  isSelected?: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function AddressCard({
  address,
  city,
  isSelected = false,
  onSelect,
  onEdit,
  onDelete,
}: AddressCardProps) {
  const { name, widget, street, gada, house } = address;
  const { translate } = useContext(AuthContext);

  return (
    <button
      className={`flex flex-col rounded-2xl p-3 gap-1 mb-3 w-full text-left ${
        isSelected ? "bg-primary text-white" : "bg-white"
      }`}
      onClick={onSelect}
    >
      <div className="flex gap-2">
        <div className=" text-sm">{name}</div>
        {isSelected && (
          <span className="ml-auto">
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <div className=" text-sm">
          {city != undefined
            ? city.name && typeof city.name === "object"
              ? city.name.en
              : city.name
            : ""}
        </div>
        <button
          className="ml-auto"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <FontAwesomeIcon icon={faPen} className="text-[#ccc]" />
        </button>
      </div>
      <div className="flex gap-2">
        <div className=" text-sm">
          {`${translate("block")} ${widget}, ${translate(
            "street"
          )} ${street}, ${translate("gada")} ${gada}, ${translate(
            "house"
          )}. ${house}`}
        </div>
        <button
          className="ml-auto"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="text-[#ccc]" />
        </button>
      </div>
    </button>
  );
}
