import { clientRequest } from "@/lib/utils/helpers";
import {
  IAddAddress,
  IAddAddressResponseResult,
  IAddress,
  IConvertPoints,
  IConvertPointsResponseResult,
  ILogin,
  ILoginResponseResult,
  IOrder,
  IRegister,
  IRegisterResponseResult,
  ISendToWallet,
  ISendToWalletResponseResult,
  IUpdateCity,
  IUpdateCityResponseResult,
  IUpdatePassword,
  IUpdatePasswordResponseResult,
  IUpdateProfile,
  IUpdateProfileResponseResult,
} from "./types";
import { IDataLoadedResponse, IResponse } from "@/lib/types";
import { cookies } from "next/headers";

export const register = (
  registerInputs: IRegister
): Promise<IResponse<IRegisterResponseResult, IRegister>> =>
  clientRequest("/profile/register", "POST", registerInputs);

export const login = (
  loginInputs: ILogin
): Promise<IResponse<ILoginResponseResult, ILogin>> =>
  clientRequest("/profile/login", "POST", loginInputs);

export const addAddress = (
  addAddressInputs: IAddAddress
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest("/address", "POST", addAddressInputs);

export const getAddresses = (): Promise<IResponse<IAddress[]>> =>
  clientRequest("/address");

export const modifyAddresses = (
  addressId: string,
  updateAddressInputs: IAddAddress
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest(`/address/${addressId}`, "PUT", updateAddressInputs);

export const deleteAddresses = (
  addressId: string
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest(`/address/${addressId}`, "DELETE");

export const updateCity = async (
  updateCityInputs: IUpdateCity
): Promise<IResponse<IUpdateCityResponseResult, IUpdateCity>> => {
  const data = await clientRequest(
    "/profile/updatecity",
    "PUT",
    updateCityInputs
  );

  // const cookie = cookies();
  // const options = {
  //   sameSite: "none",
  //   secure: true,
  //   path: "/",
  // } as any;
  // cookie.set(
  //   "city",
  //   JSON.stringify({
  //     _id: data.results?.data.city._id,
  //     name: data.results?.data.city.name,
  //     store_id: data.results?.data.city.store_id,
  //     parent_id: data.results?.data.city.parent_id,
  //   }),
  //   { sameSite: "none", secure: true, path: "/" }
  // );
  // cookie.set(
  //   "city",
  //   {
  //     _id: data.results?.data.city._id,
  //     name: data.results?.data.city.name,
  //     store_id: data.results?.data.city.store_id,
  //     parent_id: data.results?.data.city.parent_id,
  //   },
  //   options
  // );
  return data;
};

export const updateProfile = (
  updateProfileInputs: IUpdateProfile
): Promise<IResponse<IUpdateProfileResponseResult, IUpdateProfile>> =>
  clientRequest("/profile/update", "PUT", updateProfileInputs);

export const updatePassword = (
  updatePasswordInputs: IUpdatePassword
): Promise<IResponse<IUpdatePasswordResponseResult, IUpdatePassword>> =>
  clientRequest("/profile/updatepassword", "PUT", updatePasswordInputs);

export const deleteAccount = (): Promise<IResponse<{ message: string }>> =>
  clientRequest("/profile/update", "DELETE");

export const repeatOrder = (
  id: string
): Promise<IResponse<{ message: string }>> =>
  clientRequest(`/order/${id}/repeat`, "POST");

export const convertPointsToWallet = (
  inputs: IConvertPoints
): Promise<IResponse<IConvertPointsResponseResult, IConvertPoints>> =>
  clientRequest("/profile/wallet", "PUT", inputs);

export const sendToWallet = (
  inputs: ISendToWallet
): Promise<IResponse<ISendToWalletResponseResult, ISendToWallet>> =>
  clientRequest("/profile/wallet/send", "PUT", inputs);
