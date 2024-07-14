"use client";
import * as Yup from "yup";

const VerifyOtpSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    otp_code: Yup.string().required(t("otp_code_required")),
  });
  return schema;
};

export default VerifyOtpSchema;
