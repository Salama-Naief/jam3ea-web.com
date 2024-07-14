import { IResponse } from "@/lib/types";
import { IVerifyOtpInput, IVerifyOtpResponse } from "./types";
import { clientRequest } from "@/lib/utils/helpers";

export const verifyOtp = (
  otpInputs: IVerifyOtpInput
): Promise<IResponse<IVerifyOtpResponse, IVerifyOtpInput>> =>
  clientRequest("/profile/verify-otp", "POST", otpInputs);
