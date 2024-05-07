"use client";
import * as Yup from "yup";

const RegisterSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    fullname: Yup.string().required(t("fullname_required")),
    mobile: Yup.string().required(t("phone_required")),
    username: Yup.string().required(t("username_required")),
    email: Yup.string()
      .required(t("email_required"))
      .email(t("email_not_valid")),
    password: Yup.string()
      .min(8, t("password_too_short"))
      .required(t("password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        t("password_not_valid")
      ),
    address: Yup.object({
      // city_id: Yup.string().required(),
      widget: Yup.string().required(),
      gada: Yup.string().optional(),
      street: Yup.string().required(),
      house: Yup.string().required(),
      floor: Yup.string().optional(),
      apartment_number: Yup.string().optional(),
    }),
  });
  return schema;
};

export default RegisterSchema;
