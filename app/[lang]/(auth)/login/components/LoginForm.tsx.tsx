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
import facebookIcon from "../../../../../public/assets/socialIcons/logos_facebook.png";
import googleIcon from "../../../../../public/assets/socialIcons/devicon_google.png";
const initialState = {
  username: "",
  password: "",
};

interface Props {
  close?: () => void;
}

export default function LoginForm({ close }: Props) {
  const router = useRouter();
  const { translate, login: makeLogin } = useContext(AuthContext);
  const [redirecting, setRedirecting] = useState(false);
  const [state, formAction] = useFormState(Login, initialState);

  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,
    values,
  } = UseLogin({ close });

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white  md:h-auto">
      <Logo />
      <FormTitle title={translate("login")} />
      <form onSubmit={handleSubmit}>
        {/* <form action={formAction}> */}
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
          <div className="w-1/2 gap-8 justify-center flex mx-auto mb-4">
            <button type="button">
              <Image
                src={googleIcon}
                width={35}
                height={35}
                alt="google icon"
              />
            </button>
            <button type="button">
              <Image
                src={facebookIcon}
                width={35}
                height={35}
                alt="facebook icon"
              />
            </button>
          </div>
          <Button type="submit" loading={isLoading}>
            {translate("login")}
          </Button>
          <div className="text-sm text-center flex gap-2 justify-center">
            <div
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: translate("no_account") }}
            />
            <Link className="text-primary" href={webRoutes.register as string}>
              {translate("register")}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
