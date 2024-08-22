import { IDataLoadedResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import {
  IInventory,
  ISupp,
  ISupplier,
  ISupplierResponse,
  ISupplierResults,
  ISupplierStore,
} from "./types";

export const getInventories = async (): Promise<
  IDataLoadedResponse<IInventory>
> => await apiHandler("/inventory");
export const getSupplierFeature = async (): Promise<ISupplierResults[]> =>
  await apiHandler("/supplier/featured");

export const getSupplierById = async (id: string): Promise<any> =>
  await apiHandler(`/supplier/${id}`);
export const getSuppliers = async (): Promise<ISupplierStore[]> =>
  await apiHandler(`/supplier`);
