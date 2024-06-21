"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import {
  IUpdatePassword,
  IUpdatePasswordResponseResult,
} from "@/module/(main)/(profile)/types";
import { updatePassword } from "@/module/(main)/(profile)/services";

export default function UpdatePasswordForm() {
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdatePasswordResponseResult, IUpdatePassword>();

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      re_new_password: "",
    },
    onSubmit: async (values) => {
      const status = await sendRequest(updatePassword(values));
      if (status == true) {
        router.refresh();
        router.back();
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-5">Update password</h2>
      <div>
        <Input
          placeholder="Old password"
          aria-describedby="Old password"
          type="password"
          name="old_password"
          id="old_password"
          value={values.old_password}
          handleChange={handleChange}
          error={
            touched.old_password && errors.old_password
              ? errors.old_password
              : validationErrors && validationErrors.old_password
              ? validationErrors.old_password
              : undefined
          }
        />

        <Input
          placeholder="New password"
          aria-describedby="new password"
          type="password"
          name="new_password"
          id="new_password"
          // required
          value={values.new_password}
          // onChange={handleChange}
          handleChange={handleChange}
          error={
            touched.new_password && errors.new_password
              ? errors.new_password
              : validationErrors && validationErrors.new_password
              ? validationErrors.new_password
              : undefined
          }
        />

        <Input
          placeholder="Re New password"
          aria-describedby="re new password"
          type="password"
          name="re_new_password"
          id="re_new_password"
          // required
          value={values.re_new_password}
          // onChange={handleChange}
          handleChange={handleChange}
          error={
            touched.re_new_password && errors.re_new_password
              ? errors.re_new_password
              : validationErrors && validationErrors.re_new_password
              ? validationErrors.re_new_password
              : undefined
          }
        />
      </div>
      <Button type="submit" className="mt-4" loading={isLoading}>
        Update
      </Button>
    </form>
  );
}
