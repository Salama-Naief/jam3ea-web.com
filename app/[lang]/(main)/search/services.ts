import { clientRequest } from "@/lib/utils/helpers";
import { IDataLoadedResponse, IResponse } from "@/lib/types";
import { IProduct } from "../product/types";
import apiHandler from "@/lib/utils/apiHandler";

export const searchProduct = async (
  q = "",
  supplierId?: string
): Promise<any> =>
  //   {
  //   try {
  //     const res=await fetch(`/api/product?q=${q}${supplierId ? "&supplier_id=" + supplierId : ""}`)
  //     const data=await res.json()
  //     console.log("ddddddd",data)
  //     return data
  //   } catch (error) {
  //     console.log('errror',erro)
  //   }
  // }
  await clientRequest(
    `/product?q=${q}${supplierId ? "&supplier_id=" + supplierId : ""}`
  );
