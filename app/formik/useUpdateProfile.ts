import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { IDataLoadedResponse } from "@/lib/types";
import { register, updateProfile } from "@/module/(main)/(profile)/services";
import {
  IRegister,
  IRegisterResponseResult,
  IUpdateProfile,
  IUpdateProfileResponseResult,
} from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import LoginSchema from "@/validations/loginValidation";
import RegisterSchema from "@/validations/registerValidation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";

interface Props {
  initialValues: IUpdateProfile;
}
export const UseUpdateProfile = ({ initialValues }: Props) => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [massage, setMessage] = useState<{
    type: "error" | "success" | null;
    body: string | null;
  }>({ type: null, body: null });
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdateProfileResponseResult, IUpdateProfile>();

  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();

  const { translate, login: makeLogin } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string().required(translate("email_required")),
    }),
    onSubmit: async (values) => {
      const status = await sendRequest(updateProfile(values));
      if (status == true) {
        router.back();
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
    validationErrors,
  };
};
