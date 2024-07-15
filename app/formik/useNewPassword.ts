import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";
import { newPassword } from "@/module/(auth)/new-password/servcies";
import {
  INewPasswordInput,
  INewPasswordResponse,
} from "@/module/(auth)/new-password/types";
import { login } from "@/module/(main)/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(main)/(profile)/types";
import LoginSchema from "@/validations/loginValidation";
import NewPasswordSchema from "@/validations/newPasswordValidation";
import { useFormik } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const UseNewPassword = () => {
  const { translate } = useContext(AuthContext);
  const router = useRouter();
  const params = useSearchParams();
  const {
    isLoading,
    errors: validationErrors,
    results,
    sendRequest,
  } = useHttpClient<INewPasswordResponse, INewPasswordInput>();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema(translate),
    onSubmit: async (values) => {
      const body = {
        new_password: values.password,
        password_confirmation: values.confirmPassword,
        email: params.get("email") as string,
        otp_code: params.get("code") as string,
      };
      const status = await sendRequest(newPassword(body));
      console.log("new password values", body);
      console.log("new password status", status);

      if (status == true) {
        router.push(webRoutes.login);
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  return {
    touched,
    errors,
    values,
    handleSubmit,
    handleChange,
    isLoading,
    massage: results,
  };
};
