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

export default function UpdateProfileForm({ user }: UpdateProfileFormProps) {
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
      <h2 className="md:text-lg font-bold mb-2">
        {translate("update_profile")}
      </h2>
      <div>
        {/* <div className="text-primary mb-3">
          {translate("personal_information")}
        </div> */}
        <Input
          placeholder={translate("fullname")}
          aria-describedby={translate("fullname")}
          type="text"
          name="fullname"
          id="fullname"
          // required
          value={values.fullname}
          handleChange={handleChange}
          error={(touched.fullname && errors.fullname) || ""}
        />
        <Input
          placeholder={translate("username")}
          aria-describedby={translate("username")}
          type="text"
          name="username"
          id="username"
          // required
          value={values.username}
          handleChange={handleChange}
          error={(touched.username && errors.username) || ""}
        />
        <Input
          placeholder={translate("mobile")}
          aria-describedby={translate("mobile")}
          type="text"
          name="mobile"
          id="mobile"
          // required
          value={values.mobile}
          handleChange={handleChange}
          error={(touched.mobile && errors.mobile) || ""}
        />
      </div>

      <Button type="submit" className="mt-4" loading={isLoading}>
        {translate("update")}
      </Button>
    </form>
  );
}
