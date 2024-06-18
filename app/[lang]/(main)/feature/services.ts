import { IDataLoadedResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import { IFeature } from "./types";
import { IProduct } from "@/module/(main)/product/types";
import Qstr from "querystring";
import { clientRequest } from "@/lib/utils/helpers";

export const getFeaturedProducts = async (
  supplierId?: string,
  skip?: number,
  limit?: number,
  product_limit?: number
): Promise<IFeature[]> => {
  const obj: any = {
    limit,
    supplier_id: supplierId,
    skip,
    product_limit: product_limit || 12,
  };
  const filter = (obj: any) => {
    let str = [];

    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };
  console.log("filter", filter(obj));
  return await apiHandler(`/product/featured?${filter(obj)}`);
};

export const getClientFeaturedProducts = async (
  supplierId?: string,
  skip?: number,
  limit?: number,
  product_limit?: number
): Promise<IFeature[]> => {
  const obj: any = {
    limit,
    supplier_id: supplierId,
    skip,
    product_limit: product_limit || 12,
  };
  const filter = (obj: any) => {
    let str = [];

    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };
  console.log("filter", filter(obj));
  return await clientRequest(
    `${process.env.API_BASE_URL}/product/featured?${filter(obj)}`
  );
};

export const getProductsByFeature = async (
  id: string
): Promise<IDataLoadedResponse<IProduct>> =>
  await apiHandler(
    `/product/${id}/category?featured=true`,
    "GET",
    undefined,
    true,
    false
  );
