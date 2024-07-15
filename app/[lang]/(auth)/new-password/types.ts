export interface INewPasswordInput {
  new_password: string;
  password_confirmation: string;
  email: string;
  otp_code: string;
}

export interface INewPasswordResponse {
  message: string;
}
