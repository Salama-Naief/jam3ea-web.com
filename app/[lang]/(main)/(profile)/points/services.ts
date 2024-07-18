import { IDataLoadedResponse, IResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import { IProduct } from "../../product/types";
import { IProductReward } from "./types";
import { clientRequest } from "@/lib/utils/helpers";

export const getProductReward = async (): Promise<
  IDataLoadedResponse<IProductReward>
> => await apiHandler(`/reward/`, "GET", undefined, true, false);
// {{PROTOCOL}}://{{DOMAIN}}/{{VERSION}}/reward/

// export const sendReward = async (
//   id: string
// ): Promise<IDataLoadedResponse<IProductReward>> =>
//   await clientRequest(`/reward/`, "POST", { reward_id: id });

export const sendReward = (inputs: {
  reward_id: string;
}): Promise<IResponse<any, any>> => clientRequest("/reward", "POST", inputs);
