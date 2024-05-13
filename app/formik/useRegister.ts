import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { IDataLoadedResponse } from "@/lib/types";
import { register } from "@/module/(main)/(profile)/services";
import {
  IRegister,
  IRegisterResponseResult,
} from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import LoginSchema from "@/validations/loginValidation";
import RegisterSchema from "@/validations/registerValidation";
import { useFormik } from "formik";
import { useContext, useState } from "react";

export const UseRegister = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [massage, setMessage] = useState<{
    type: "error" | "success" | null;
    body: string | null;
  }>({ type: null, body: null });
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IRegisterResponseResult, IRegister>();

  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();

  const { translate, login: makeLogin } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      mobile: "",
      additional_phone: "",
      address: {
        city_id: "",
        widget: "",
        gada: "",
        street: "",
        house: "",
        floor: "",
        apartment_number: "",
      },
    },
    validationSchema: RegisterSchema(translate),
    onSubmit: async (values) => {
      console.log("register values", values);
      const status = await sendRequest(register(values));
      console.log("validationErrors", JSON.stringify(validationErrors));
      console.log("register status", status);
      // try {
      //   const res = await fetch(
      //     "https://jm3eia.com/api?route=/profile/register",
      //     {
      //       method: "POST",
      //       body: JSON.stringify(values),
      //     }
      //   );
      //   const data = await res.json();
      //   console.log("data", data);
      // } catch (error) {
      //   console.log("error", error);
      // }

      // if (status) {
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
    validationErrors,
  };
};
