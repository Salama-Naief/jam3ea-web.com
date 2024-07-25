"use client";
// import { useFormState } from "react-dom";
import { ComboboxItem, Select } from "@mantine/core";
import { ICity } from "@/module/(main)/city/types";
import React, { useContext, useEffect, useState } from "react";
import useHttpClient from "@/lib/hooks/useHttpClient";
import Button from "../../../(main)/(profile)/account/components/Button";
import { updateCity } from "@/module/(main)/(profile)/services";
import {
  IUpdateCity,
  IUpdateCityResponseResult,
} from "@/module/(main)/(profile)/types";
import { useRouter } from "next/navigation";
import { SetGuestCityId } from "@/lib/server actions/setGuestCity";
import { AddressContext } from "@/lib/providers/AddressProvider";
import { useCookies } from "react-cookie";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";

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
    results,
    sendRequest,
  } = useHttpClient<IUpdateCityResponseResult, IUpdateCity>();
  const { translate } = useContext(AuthContext);
  const router = useRouter();
  // const [state, formAction] = useFormState(SetGuestCityId, { city_id: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["city", "city_id"]);

  const citiesData =
    cities && cities.children && cities.children.length > 0
      ? cities.children.map((c) => ({ label: c.name as string, value: c._id }))
      : [];

  const handleGuest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectCity?.value) {
      setLoading(true);
      const res = await updateCity({ city_id: selectCity.value });
      setLoading(false);
      const options = {
        // sameSite: "none",
        secure: true,
        path: "/",
      };
      if (res.success) {
        setCookie(
          "city",
          {
            _id: res.results?.data.city._id,
            name: res.results?.data.city.name,
            store_id: res.results?.data.city.store_id,
            parent_id: res.results?.data.city.parent_id,
          },
          options
        );

        if (window) window.location.href = webRoutes.home;
      }
    }
  };

  return (
    <div className="w-full">
      {isGuest ? (
        citiesData && (
          <form onSubmit={(e) => handleGuest(e)}>
            <Select
              data={citiesData}
              value={selectCity?.value || null}
              name="city_id"
              id="city_id"
              placeholder={translate("choose_city")}
              onChange={(_value, option) => setSelectCity(option)}
              classNames={{
                root: "w-full",
                dropdown: "bg-white",
                input: "focus:!border-primary px-4",
              }}
            />
            <Button
              title="Continue"
              className="w-full !bg-primary !text-white my-4"
              type="submit"
              isLoading={loading}
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
