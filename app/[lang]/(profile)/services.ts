import { clientRequest } from '@/lib/utils/helpers';
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
  IUpdateCity,
  IUpdateCityResponseResult,
  IUpdatePassword,
  IUpdatePasswordResponseResult,
  IUpdateProfile,
  IUpdateProfileResponseResult,
} from './types';
import { IDataLoadedResponse, IResponse } from '@/lib/types';

export const register = (
  registerInputs: IRegister
): Promise<IResponse<IRegisterResponseResult, IRegister>> =>
  clientRequest('/profile/register', 'POST', registerInputs);

export const login = (
  loginInputs: ILogin
): Promise<IResponse<ILoginResponseResult, ILogin>> =>
  clientRequest('/profile/login', 'POST', loginInputs);

export const addAddress = (
  addAddressInputs: IAddAddress
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest('/address', 'POST', addAddressInputs);

export const getAddresses = (): Promise<IResponse<IAddress[]>> =>
  clientRequest('/address');

export const modifyAddresses = (
  addressId: string,
  updateAddressInputs: IAddAddress
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest(`/address/${addressId}`, 'PUT', updateAddressInputs);

export const deleteAddresses = (
  addressId: string
): Promise<IResponse<IAddAddressResponseResult, IAddAddress>> =>
  clientRequest(`/address/${addressId}`, 'DELETE');

export const updateCity = (
  updateCityInputs: IUpdateCity
): Promise<IResponse<IUpdateCityResponseResult, IUpdateCity>> =>
  clientRequest('/profile/updatecity', 'PUT', updateCityInputs);

export const updateProfile = (
  updateProfileInputs: IUpdateProfile
): Promise<IResponse<IUpdateProfileResponseResult, IUpdateProfile>> =>
  clientRequest('/profile/update', 'PUT', updateProfileInputs);

export const updatePassword = (
  updatePasswordInputs: IUpdatePassword
): Promise<IResponse<IUpdatePasswordResponseResult, IUpdatePassword>> =>
  clientRequest('/profile/updatepassword', 'PUT', updatePasswordInputs);

export const deleteAccount = (): Promise<IResponse<{ message: string }>> =>
  clientRequest('/profile/update', 'DELETE');

export const repeatOrder = (
  id: string
): Promise<IResponse<{ message: string }>> =>
  clientRequest(`/order/${id}/repeat`, 'POST');

export const convertPoints = (
  inputs: IConvertPoints
): Promise<IResponse<IConvertPointsResponseResult, IConvertPoints>> =>
  clientRequest('/profile/wallet', 'POST', inputs);
