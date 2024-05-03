"use client";
import * as Yup from "yup";

const NewPasswordSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(8, t("password_too_short"))
      .required(t("password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        t("password_not_valid")
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), "null"],
      t("confirm_password_not_match")
    ),
  });
  return schema;
};

export default NewPasswordSchema;
