"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useContext, useState } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { UseResetPassword } from "@/formik/useResetPassword";
import Logo from "@/components/Logo";
import FormTitle from "../../FormTitle";
import { useValidatedState } from "@mantine/hooks";
import { UseVerifyOtp } from "@/formik/useVerifyOtp";
import { PinInput } from "@mantine/core";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOtp() {
  const { translate } = useContext(AuthContext);
  const params = useSearchParams();
  const router = useRouter();

  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    isVerified,
    massage,
    touched,
    values,
    setFieldValue,
  } = UseVerifyOtp();

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle
        title={
          isVerified ? translate("reset_password") : translate("check_email")
        }
      />
      {isVerified && (
        <div className="text-secondary flex justify-center mb-8 text-center">
          <div className="w-full md:w-1/2  font-semibold">
            {translate("password_successfully_confirmed")}
          </div>
        </div>
      )}
      {!isVerified && (
        <form onSubmit={handleSubmit}>
          <div className="px-4  mb-8 flex justify-center text-center">
            <PinInput
              id="otp_code"
              name="otp_code"
              type={/^[0-9]*$/}
              inputType="tel"
              size="xl"
              inputMode="numeric"
              value={values.otp_code}
              onChange={(v) => setFieldValue("otp_code", v)}
              radius={"md"}
              color="orange"
              classNames={{
                input:
                  "focus:!border-primary focus:!outline-primary  focus:!ring-primary",
              }}
              // error={errors.otp_code}
            />
          </div>
          <div className="px-8 mt-4">
            <Button type="submit" className="text-xl" loading={isLoading}>
              {translate("verify_code")}
            </Button>

            <div className="text-[20px] font-[600] text-[#989898] mt-4">
              {translate("not_got_email")}
              <Link
                href={webRoutes.resetPassword}
                className="blcok text-blue-500 underline"
              >
                {translate("resend_email")}
              </Link>
            </div>
          </div>
        </form>
      )}
      {isVerified && (
        <Button
          type="button"
          onClick={() =>
            router.replace(
              webRoutes.newPassword +
                "?email=" +
                params.get("email") +
                "&code=" +
                values.otp_code
            )
          }
          className="text-xl"
          loading={isLoading}
        >
          {translate("confirm")}
        </Button>
      )}
    </div>
  );
}
