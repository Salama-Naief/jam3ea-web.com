"use client";
//@ts-expect-error
import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import Image from "next/image";
import { UseLogin } from "@/formik/useLogin";
import Logo from "@/components/Logo";
import FormTitle from "../../FormTitle";
import { Login } from "@/lib/server actions/login";

const initialState = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const router = useRouter();
  const { translate, login: makeLogin } = useContext(AuthContext);
  const [redirecting, setRedirecting] = useState(false);
  const [state, formAction] = useFormState(Login, initialState);
  console.log(state);
  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,
    values,
  } = UseLogin();

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle title={translate("login")} />
      {/* <form onSubmit={handleSubmit}> */}
      <form action={formAction}>
        <div className="px-4">
          <Input
            handleChange={handleChange}
            // id="username"
            name="username"
            placeholder={translate("email_phone")}
            value={values.username}
            error={errors.username}
            type="text"
          />
          <Input
            handleChange={handleChange}
            // id="password"
            name="password"
            placeholder={translate("password")}
            value={values.password}
            error={errors.password}
            type="password"
          />
        </div>
        <div className="px-4">
          <div className="mb-3 px-4 pt-2">
            <Link
              className="text-primary"
              href={webRoutes.resetPassword as string}
            >
              {translate("reset_password")}
            </Link>
          </div>
          <Link
            href={"/"}
            className="w-full py-2 text-center  font-bold mb-3 block text-secondary"
          >
            {translate("shop_as_guest")}
          </Link>
          <Button type="submit" loading={isLoading}>
            {translate("login")}
          </Button>
          <div className="text-sm text-center">
            <span className="text-gray-400">{translate("no_account")} </span>
            <Link className="text-primary" href={webRoutes.register as string}>
              {translate("register")}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
