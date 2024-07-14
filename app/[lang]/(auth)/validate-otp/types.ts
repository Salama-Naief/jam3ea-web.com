export interface IVerifyOtpInput {
  email: string;
  otp_code: string;
}

export interface IVerifyOtpResponse {
  message: string;
}
