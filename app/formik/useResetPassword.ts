import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";
import { resetPassword } from "@/module/(auth)/reset-password/servcies";
import {
  IResetPasswordInput,
  IResetPasswordResponse,
} from "@/module/(auth)/reset-password/types";
import { login } from "@/module/(main)/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(main)/(profile)/types";
import LoginSchema from "@/validations/loginValidation";
import ResetPasswordSchema from "@/validations/resetPasswordValidation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const UseResetPassword = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const { translate, login: makeLogin } = useContext(AuthContext);
  const [massage, setMessage] = useState<{
    type: "error" | "success" | null;
    body: string | null;
  }>({ type: null, body: null });
  const {
    isLoading,
    errors: validationErrors,
    results,
    sendRequest,
  } = useHttpClient<IResetPasswordResponse, IResetPasswordInput>();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetPasswordSchema(translate),
    onSubmit: async (values) => {
      console.log("reset password values", values);
      const body = {
        email: values.email,
        requestedColumn: "email",
      };
      const status = await sendRequest(resetPassword(body));
      console.log("reset password status", status);
      if (status == true) {
        router.push(`${webRoutes.valiadateOtp}?email=${values.email}`);
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
    massage: results?.message,
  };
};
