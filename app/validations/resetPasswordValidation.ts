"use client";
import * as Yup from "yup";

const ResetPasswordSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string().required(t("email_required")),
  });
  return schema;
};

export default ResetPasswordSchema;
