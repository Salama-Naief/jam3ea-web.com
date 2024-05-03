"use client";

import { login } from "@/module/(profile)/services";
import { ILogin, ILoginResponseResult } from "@/module/(profile)/types";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useHttpClient from "@/lib/hooks/useHttpClient";
import webRoutes from "@/lib/utils/webRoutes";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import logo from "../../../../../public/assets/logo.svg";
import Image from "next/image";
import { UseLogin } from "@/formik/useLogin";
import Logo from "@/components/Logo";
import { UseNewPassword } from "@/formik/useNewPassword";
import FormTitle from "../../FormTitle";

export default function LoginForm() {
  const router = useRouter();
  const { translate, login: makeLogin } = useContext(AuthContext);
  const [redirecting, setRedirecting] = useState(false);
  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,
    values,
  } = UseNewPassword();

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle title={translate("new_password")} />
      <form onSubmit={handleSubmit}>
        <div className="px-4">
          <Input
            handleChange={handleChange}
            id="password"
            name="password"
            placeholder={translate("password")}
            value={values.password}
            error={errors.password}
            type="password"
          />
          <Input
            handleChange={handleChange}
            id="confirmPassword"
            name="confirmPassword"
            placeholder={translate("confirm_password")}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            type="password"
          />
        </div>
        <div className="px-4 mt-4">
          <Button
            type="submit"
            className="text-xl capitalize"
            loading={isLoading}
          >
            {translate("reset_password")}
          </Button>
        </div>
      </form>
    </div>
  );
}
