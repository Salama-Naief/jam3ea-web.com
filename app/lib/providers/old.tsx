"use client";

import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import { LANGUAGES } from "@/lib/enums";
import { ICity } from "@/module/(main)/city/types";
import {
  IAddAddress,
  IAddAddressResponseResult,
  IAddress,
} from "@/module/(main)/(profile)/types";
import {
  getAddresses,
  addAddress as storeAddress,
  updateCity,
} from "@/module/(main)/(profile)/services";
import { IResponse } from "../types";

const CookieContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  language: "en",
  changeLanguage: (l: LANGUAGES) => {},
  city: null as ICity | null,
  changeCity: (c: string) => {},
  selectedAddress: null as IAddress | null,
  changeAddress: (a: string) => {},
  addresses: [] as IAddress[],
  addAddress: (
    v: IAddAddress,
    sr: (
      request: Promise<IResponse<IAddAddressResponseResult, IAddAddress>>
    ) => Promise<boolean>
  ): Promise<boolean> => Promise.resolve(false),
});

const CookieProvider = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(["data"]);
  const [language, setLanguage] = useState<LANGUAGES>(
    cookies.data && cookies.data.language ? cookies.data.language : "en"
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    cookies.data ? cookies.data.isLoggedIn : false
  );
  const [city, setCity] = useState<ICity | null>(
    cookies.data ? cookies.data.city : null
  );

  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(
    cookies.data ? cookies.data.selectedAddress : null
  );

  const [addresses, setAddresses] = useState<IAddress[]>([]);

  const options: any = {
    sameSite: "none",
    secure: false,
    path: "/",
  };

  useEffect(() => {
    if (addresses.length < 1) {
      if (isLoggedIn) {
        getAddresses().then((res) => {
          if (res.results) {
            setAddresses(res.results);
            setCookie("data", {
              ...(cookies.data || {}),
              addresses: res.results,
            });
          }
        });
      } else {
        if (cookies.data && cookies.data.addresses) {
          setAddresses(cookies.data.addresses);
        }
      }
    }
  }, [isLoggedIn, cookies.data]);

  const login = () => {
    //setCookie('data.isLoggedIn', 'true', options);
    setIsLoggedIn(true);
  };

  const logout = () => {
    //setCookie('data.isLoggedIn', 'false', options);
    //removeCookie('auth.user');
    //removeCookie('auth.token');
    setIsLoggedIn(false);
  };

  const changeCity = (cityId: string) => {
    updateCity({ city_id: cityId }).then((res) => {
      if (res.results?.data.city) {
        setCookie(
          "data",
          { ...cookies.data, city: res.results?.data.city },
          options
        );
        setCity(res.results?.data.city);
      }
    });
  };

  const changeLanguage = (language: LANGUAGES) => {
    setCookie("data", { ...cookies.data, language }, options);
    setLanguage(language);
  };

  const changeAddress = (addressId: string, newAddresses?: IAddress[]) => {
    const mainAddresses = newAddresses || addresses;
    const foundAddress = mainAddresses.find(
      (address: IAddress) => address.id === addressId
    );

    if (foundAddress) {
      cookies.data.selectedAddress = foundAddress;
      setCookie("data", cookies.data, options);
      setSelectedAddress(foundAddress);
      if (selectedAddress?.city_id) {
        changeCity(selectedAddress?.city_id);
      }
    } else {
      console.log("address not found: ", addressId, mainAddresses);
    }
  };

  const addAddress = async (
    values: IAddAddress,
    sendRequest: (
      request: Promise<IResponse<IAddAddressResponseResult, IAddAddress>>
    ) => Promise<boolean>
  ) => {
    if (isLoggedIn) {
      const status = await sendRequest(storeAddress(values));
      if (status) {
        const addressesResponse = await getAddresses();
        const newAddresses = addressesResponse.results;
        if (newAddresses && Array.isArray(newAddresses)) {
          setAddresses(newAddresses);
        }
      }
      return status;
    } else {
      const newAddress = {
        ...values,
        id: `address-${addresses.length}`,
      } as any;
      const newAddresses: IAddress[] = [
        ...(addresses as IAddress[]),
        newAddress,
      ];
      setCookie("data", { ...cookies.data, addresses: newAddresses }, options);
      setAddresses(newAddresses);

      if (!selectedAddress) {
        changeAddress(newAddress.id, newAddresses);
      }

      return true;
    }
  };

  return (
    <CookieContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        language,
        changeLanguage,
        city,
        changeCity,
        selectedAddress,
        changeAddress,
        addresses: addresses,
        addAddress,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

CookieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CookieContext, CookieProvider };
