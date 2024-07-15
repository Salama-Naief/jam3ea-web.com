import { IResponse } from "@/lib/types";
import { INewPasswordInput, INewPasswordResponse } from "./types";
import { clientRequest } from "@/lib/utils/helpers";

export const newPassword = (
  inputs: INewPasswordInput
): Promise<IResponse<INewPasswordResponse, INewPasswordInput>> =>
  clientRequest("/profile/resetpassword?hash=''", "POST", inputs);
