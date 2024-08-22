"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useContext } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { UseResetPassword } from "@/formik/useResetPassword";
import Logo from "@/components/Logo";
import FormTitle from "../../FormTitle";

export default function LoginForm() {
  const { translate } = useContext(AuthContext);
  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,
    values,
  } = UseResetPassword();

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle title={translate("reset_password")} />
      <form onSubmit={handleSubmit}>
        <div className="px-4">
          <Input
            handleChange={handleChange}
            id="email"
            name="email"
            placeholder={translate("email_phone")}
            value={values.email}
            error={errors.email}
            type="text"
          />
        </div>
        <div className="px-4 mt-4">
          <Button type="submit" className="text-xl" loading={isLoading}>
            {translate("next")}
          </Button>
        </div>
      </form>
    </div>
  );
}
