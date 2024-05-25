import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { login } from "@/module/(main)/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(main)/(profile)/types";
import LoginSchema from "@/validations/loginValidation";
import NewPasswordSchema from "@/validations/newPasswordValidation";
import { useFormik } from "formik";
import { useContext, useState } from "react";

export const UseNewPassword = () => {
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
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema(translate),
    onSubmit: async (values) => {
      console.log("new password values", values);
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
