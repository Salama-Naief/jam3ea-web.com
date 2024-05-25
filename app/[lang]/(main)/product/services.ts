import apiHandler from "@/lib/utils/apiHandler";
import { IProduct } from "./types";

export const getProductBySku = async (sku: string): Promise<IProduct> =>
  await apiHandler(`/product/${sku}`);
export const getProductCategoryRank = async (
  categoryId: string,
  rankId: string
): Promise<IProduct[]> =>
  await apiHandler(
    `/product/${categoryId}/category/${rankId}/rank?skip=1&limit=15`,
    "GET",
    undefined,
    true
  );
