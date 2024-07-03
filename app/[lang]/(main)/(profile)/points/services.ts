import { IDataLoadedResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import { IProduct } from "../../product/types";
import { IProductReward } from "./types";

export const getProductReward = async (): Promise<
  IDataLoadedResponse<IProductReward>
> => await apiHandler(`/reward/`, "GET", undefined, true, false);
// {{PROTOCOL}}://{{DOMAIN}}/{{VERSION}}/reward/
