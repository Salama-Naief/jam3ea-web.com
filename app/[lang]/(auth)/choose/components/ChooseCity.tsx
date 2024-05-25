"use client";
//@ts-expect-error
import { useFormState } from "react-dom";
import { ComboboxItem, Select } from "@mantine/core";
import { ICity } from "@/module/(main)/city/types";
import React, { useContext, useState } from "react";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { IDataLoadedResponse } from "@/lib/types";
import Button from "../../../(main)/(profile)/account/components/Button";
import { clientRequest } from "@/lib/utils/helpers";
import { updateCity } from "@/module/(main)/(profile)/services";
import {
  ILoginResponseResult,
  IUpdateCity,
  IUpdateCityResponseResult,
} from "@/module/(main)/(profile)/types";
import { useRouter } from "next/navigation";
import { SetGuestCityId } from "@/lib/server actions/setGuestCity";
import {
  AddressContext,
  AddressProvider,
} from "@/lib/providers/AddressProvider";

interface Props {
  cities: ICity;
  buttonLabel: string;
}
export default function ChooseCity({ cities, buttonLabel }: Props) {
  const [isGuest, setIsGuest] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<ComboboxItem | null>(null);
  const { changeCity, city } = useContext(AddressContext);
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdateCityResponseResult, IUpdateCity>();
  const router = useRouter();
  const [state, formAction] = useFormState(SetGuestCityId, { city_id: "" });

  const citiesData =
    cities && cities.children && cities.children.length > 0
      ? cities.children.map((c) => ({ label: c.name as string, value: c._id }))
      : [];

  console.log("selectCity======++", selectCity);

  const handleGuest = async () => {
    if (selectCity?.value) {
      changeCity(selectCity.value);
      if (city) {
        router.push("/");
      }
    }
  };
  return (
    <div className="w-full">
      {isGuest ? (
        citiesData && (
          //   <form action={formAction}>
          <form onSubmit={() => handleGuest()}>
            <Select
              data={citiesData}
              value={selectCity?.value || null}
              name="city_id"
              id="city_id"
              onChange={(_value, option) => setSelectCity(option)}
              classNames={{
                root: "w-full",
                dropdown: "bg-white",
                input: "focus:!border-primary px-4",
              }}
            />
            {/* <select
              onChange={(e) => setSelectCity(e.target.value)}
              name="city_id"
              className="w-full"
            >
              {cities &&
                cities.children &&
                cities.children.map((city) => (
                  <option value={city._id} key={city._id}>
                    {city.name as string}
                  </option>
                ))}
            </select> */}
            <Button
              title="Continue"
              className="w-full !bg-primary !text-white my-4"
              type="submit"
            />
          </form>
        )
      ) : (
        <div className="text-center">
          <button
            onClick={() => setIsGuest(true)}
            className="text-lg font-bold text-secondary"
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
