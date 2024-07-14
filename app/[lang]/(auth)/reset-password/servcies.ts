import { IResponse } from "@/lib/types";
import { IResetPasswordInput, IResetPasswordResponse } from "./types";
import { clientRequest } from "@/lib/utils/helpers";

export const resetPassword = (
  loginInputs: IResetPasswordInput
): Promise<IResponse<IResetPasswordResponse, IResetPasswordInput>> =>
  clientRequest("/profile/forgotpassword", "POST", loginInputs);
