import { clientRequest } from "@/lib/utils/helpers";
import {
  IAddToCart,
  IAddToCartResponseResult,
  IApplyCoupon,
  IGetCartResponseResult,
  IGetCheckoutResponseResult,
} from "./types";
import { IResponse } from "@/lib/types";

export const addToCart = (
  addToCartInputs: IAddToCart
): Promise<IResponse<IAddToCartResponseResult, IAddToCart>> =>
  clientRequest("/cart", "POST", addToCartInputs);

export const removeFromCart = (
  sku: string
): Promise<IResponse<IAddToCartResponseResult, IAddToCart>> =>
  clientRequest(`/cart/${sku}`, "DELETE");

export const getCart = (): Promise<IResponse<IGetCartResponseResult>> =>
  clientRequest("/cart");
export const getAllCarts = (): Promise<IResponse<IGetCartResponseResult>> =>
  clientRequest("/cart/all");

export const applyCoupon = (applyCouponInputs: IApplyCoupon) =>
  clientRequest("/cart/coupon", "POST", applyCouponInputs);

export const removeCoupon = (removeCouponInputs: IApplyCoupon) =>
  clientRequest(`/coupon?code=${removeCouponInputs.code}`, "DELETE");

export const getcheckout = (
  suppliers?: string[],
  cityId?: string
): Promise<IResponse<IGetCheckoutResponseResult>> => {
  const baseUrl = "/checkout";
  const queryString = suppliers
    ? `&supplier_id=${suppliers.join("&supplier_id=")}`
    : "";

  return clientRequest(
    baseUrl + `?city_id=${cityId ? cityId : ""}` + queryString
  );
};

export const checkout = (values: any, cityId?: string): Promise<any> => {
  return clientRequest(
    `/checkout${cityId ? "?city_id=" + cityId : ""}`,
    "POST",
    values
  );
};

export const clearCart = (supplier_id?: string): Promise<any> =>
  clientRequest(
    `/cart/clear?${supplier_id ? "supplier_id=" + supplier_id : ""}`,
    "POST"
  );
