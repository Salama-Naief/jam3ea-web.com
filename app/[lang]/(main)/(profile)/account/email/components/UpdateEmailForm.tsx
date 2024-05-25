"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useContext } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { UseUpdateProfile } from "@/formik/useUpdateProfile";
import { IUser } from "../../../types";

interface UpdateProfileFormProps {
  user: IUser;
}

export default function UpdateEmailForm({ user }: UpdateProfileFormProps) {
  const { translate } = useContext(AuthContext);
  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,

    values,
  } = UseUpdateProfile({
    initialValues: {
      fullname: user.fullname || "",
      username: user.username || "",
      email: user.email || "",
      mobile: user.mobile || "",
      address: {
        city_id: user.address.city_id || "",
        widget: user.address.widget || "",
        gada: user.address.gada || "",
        street: user.address.street || "",
        house: user.address.house || "",
        floor: user.address.floor || "",
        apartment_number: user.address.apartment_number || "",
      },
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-2">{translate("update_profile")}</h2>
      <div className="mb-4">
        {/* <div className="text-primary mb-3">
          {translate("personal_information")}
        </div> */}
        <Input
          placeholder={translate("email")}
          aria-describedby={translate("email")}
          type="email"
          name="email"
          id="email"
          // required
          value={values.email}
          handleChange={handleChange}
          error={(touched.email && errors.email) || ""}
        />
      </div>

      <Button type="submit" loading={isLoading}>
        {translate("update")}
      </Button>
    </form>
  );
}
