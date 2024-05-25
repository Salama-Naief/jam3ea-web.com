import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { login } from "@/module/(main)/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(main)/(profile)/types";
import LoginSchema from "@/validations/loginValidation";
import { useFormik } from "formik";
import { useContext, useState } from "react";

interface Props {
  close?: () => void;
}
export const UseLogin = ({ close }: Props) => {
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
      username: "",
      password: "",
    },
    validationSchema: LoginSchema(translate),
    onSubmit: async (values) => {
      console.log("login values", values);
      const status = await sendRequest(login(values));
      console.log("status", status);
      if (status == true) {
        setRedirecting(true);
        makeLogin();
        close && close();
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
    massage,
  };
};
