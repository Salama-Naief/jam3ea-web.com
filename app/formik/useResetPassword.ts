import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { login } from "@/module/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(profile)/types";
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
    sendRequest,
  } = useHttpClient<ILoginResponseResult, ILogin>();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetPasswordSchema(translate),
    onSubmit: async (values) => {
      console.log("reset password values", values);
      router.push("/new-password");
      // const status = await sendRequest(login(values));
      // if (status == true) {
      //   setRedirecting(true);
      //   makeLogin();
      // }
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
    massage,
  };
};
