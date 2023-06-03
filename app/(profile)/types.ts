import { ICity } from '@/city/types';
import { LANGUAGES } from '@/lib/enums';

export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  mobile: string;
  address: IAddress;
  wallet: number;
  points: number;
  convertedPoints: number;
  status: boolean;
  language: LANGUAGES;
  addresses?: IAddress[];
  created: string;
}

export interface IRegister {
  fullname: string;
  username: string;
  password: string;
  email: string;
  mobile: string;
  address: IAddress;
}

export interface IRegisterResponseResult {
  message: string;
  insertedId: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponseResult {
  token: string;
  user: IUser;
}

export interface IAddress {
  id?: string;
  name?: string;
  city_id: string;
  widget: string;
  gada?: string;
  street: string;
  house: string;
  floor?: string;
  apartment_number?: string;
  mobile?: string;
  email?: string;
  city?: ICity;
}

export interface IAddAddress {
  id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  city_id: string;
  city?: ICity;
  widget: string;
  gada?: string;
  street: string;
  house: string;
  floor?: string;
  apartment_number?: string;
}

export interface IAddAddressResponseResult {
  message: string;
}

export interface IUpdateCity {
  city_id: string;
}

export interface IUpdateCityResponseResult {
  message: string;
  data: {
    city_id: string;
    city: ICity;
    country_id: string;
    currency: { ar: string; en: string };
    member_id?: string;
  };
}

export interface IUpdateProfile {
  fullname: string;
  username: string;
  email: string;
  mobile: string;
  address: IAddress;
}

export interface IUpdateProfileResponseResult {
  message: string;
}

export interface IUpdatePassword {
  old_password: string;
  new_password: string;
  re_new_password: string;
}

export interface IUpdatePasswordResponseResult {
  message: string;
}
