import { IDataLoadedResponse, IResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import { ICategory, IRank } from "./types";
import { IProduct } from "@/module/(main)/product/types";

export const getCategories = async (
  supplierId?: string
): Promise<IDataLoadedResponse<ICategory>> =>
  await apiHandler(
    `/category${supplierId ? "?supplier_id=" + supplierId : ""}`
  );

export const getCategoriesList = async (): Promise<
  IDataLoadedResponse<ICategory>
> => await apiHandler(`/category`);

export const getCategoryById = async (id: string): Promise<ICategory> =>
  await apiHandler(`/category/${id}`);

export const getRanksByCategoryId = async (
  id: string
): Promise<IDataLoadedResponse<IRank>> =>
  await apiHandler(`/category/${id}/ranks`);

export const getCategoryProducts = async (
  id: string,
  limit: number = 10,
  skip: number = 1
): Promise<IDataLoadedResponse<IProduct>> =>
  await apiHandler(`/product/${id}/category?skip=${skip}&limit=${limit}`);

export const getCategoryProductsStore = async (
  storeId: string,
  categoryId: string
): Promise<IDataLoadedResponse<IProduct>> =>
  await apiHandler(
    `/product/${categoryId}/category?supplier_id=${storeId}`,
    "GET",
    undefined,
    true,
    false
  );
