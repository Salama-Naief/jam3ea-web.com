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
  console.log("massage  verify opt", values.otp_code);

  return (
    <div className="shadow-md rounded-xl px-3 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle
        title={
          isVerified
            ? translate("reset_password")
            : translate("Check your email")
        }
      />
      {isVerified && (
        <div className="text-secondary flex justify-center mb-8 text-center">
          <div className="w-full md:w-1/2  font-semibold">
            Your password has been successfully reset. click confirm to set a
            new password
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
            {/* <Input
            handleChange={handleChange}
            id="otp_code"
            name="otp_code"
            placeholder={translate("email_phone")}
            value={values.otp_code}
            error={errors.otp_code}
            type="text"
          /> */}
          </div>
          <div className="px-8 mt-4">
            <Button type="submit" className="text-xl" loading={isLoading}>
              {translate("Verify Code")}
            </Button>

            <div className="text-[20px] font-[600] text-[#989898] mt-4">
              Haven&acute;t got the email yet?
              <Link
                href={webRoutes.resetPassword}
                className="blcok text-blue-500 underline"
              >
                Resend email
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
          {translate("Confirm")}
        </Button>
      )}
    </div>
  );
}
