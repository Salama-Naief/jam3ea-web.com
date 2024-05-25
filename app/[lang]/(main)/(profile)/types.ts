import { ICity } from "@/module/(main)/city/types";
import { LANGUAGES } from "@/lib/enums";
import {
  ICheckoutProduct,
  ICoupon,
  IDeliveryTime,
  IPaymentMethod,
} from "../cart/types";
import { ISupplier } from "../stores/types";

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
  city_name?: string;
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

export interface IOrder {
  _id: string;
  order_id: string;
  payment_method: IPaymentMethod;
  subtotal: number;
  total: number;
  created: string;
  status: string;
  status_number: number;
  shipping_cost: number;
  cart_subtotal: number;
  coupon: ICoupon;
  cart_total: number;
  user_data: IUser;
  notes: string | null;
  isVIP?: boolean;
  store_id: string;
  hash: string;
  delivery_time: string;
  discount_by_wallet: boolean;
  discount_by_wallet_value: number;
  data: {
    supplier: ISupplier;
    products: ICheckoutProduct[];
    isSelected: boolean;
    subtotal: number;
    purchase_possibility: boolean;
    earliest_date_of_delivery: number;
    delivery_times: IDeliveryTime[];
    shipping_cost: number;
    total: string;
    gift_note: boolean;
    payment_methods: IPaymentMethod[];
  }[];
  products: ICheckoutProduct[];
}

export interface IConvertPoints {
  points: number;
}

export interface IConvertPointsResponseResult {
  message: string;
  points: number;
  wallet: number;
}

export interface IWalletHistory {
  _id: string;
  old_wallet: string;
  new_wallet: string;
  notes: string;
  created: string;
}

export interface ISendToWallet {
  mobile: string;
  amount: string;
}

export interface ISendToWalletResponseResult {
  member_id: string;
  old_wallet: string;
  new_wallet: string;
  type: string;
  notes: string;
  created: string;
}
