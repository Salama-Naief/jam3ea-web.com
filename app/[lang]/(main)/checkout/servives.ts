import { IResponse } from "@/lib/types";
import { clientRequest } from "@/lib/utils/helpers";

export const checkout = (registerInputs: any): Promise<IResponse<any, any>> =>
  clientRequest("/profile/register", "POST", registerInputs, true);
