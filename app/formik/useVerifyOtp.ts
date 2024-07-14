import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";
import { resetPassword } from "@/module/(auth)/reset-password/servcies";
import {
  IResetPasswordInput,
  IResetPasswordResponse,
} from "@/module/(auth)/reset-password/types";
import { verifyOtp } from "@/module/(auth)/validate-otp/servcies";
import {
  IVerifyOtpInput,
  IVerifyOtpResponse,
} from "@/module/(auth)/validate-otp/types";
import { login } from "@/module/(main)/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(main)/(profile)/types";
import LoginSchema from "@/validations/loginValidation";
import ResetPasswordSchema from "@/validations/resetPasswordValidation";
import VerifyOtpSchema from "@/validations/verifyOtpValidation";
import { useFormik } from "formik";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

export const UseVerifyOtp = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { translate } = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const {
    isLoading,
    errors: validationErrors,
    results,
    sendRequest,
  } = useHttpClient<IVerifyOtpResponse, IVerifyOtpInput>();

  const formik = useFormik({
    initialValues: {
      otp_code: "",
    },
    validationSchema: VerifyOtpSchema(translate),
    onSubmit: async (values) => {
      console.log("reset password values", values);
      const body = {
        email: params.get("email") as string,
        otp_code: values.otp_code,
      };

      console.log("params", body);
      const status = await sendRequest(verifyOtp(body));
      console.log("reset password status", status);
      if (status == true) {
        // router.push(webRoutes.newPassword);
        setIsVerified(true);
      }
    },
  });

  const { touched, setFieldValue, errors, values, handleChange, handleSubmit } =
    formik;
  return {
    touched,
    errors,
    values,
    handleSubmit,
    handleChange,
    isLoading,
    massage: results?.message,
    setFieldValue,
    isVerified,
  };
};
