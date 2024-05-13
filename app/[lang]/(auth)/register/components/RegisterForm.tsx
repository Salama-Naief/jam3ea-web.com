"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useHttpClient from "@/lib/hooks/useHttpClient";
import webRoutes from "@/lib/utils/webRoutes";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { getCities } from "@/module/(main)/city/services";
import { IDataLoadedResponse } from "@/lib/types";
import { ICity } from "@/module/(main)/city/types";
import Link from "next/link";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { UseRegister } from "@/formik/useRegister";
import FormTitle from "../../FormTitle";
import Logo from "@/components/Logo";
import { ValidationError } from "yup";

export default function RegisterForm() {
  const router = useRouter();

  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();

  const { translate, login: makeLogin } = useContext(AuthContext);
  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    massage,
    touched,
    values,
    validationErrors,
  } = UseRegister();

  useEffect(() => {
    citiesRequest(getCities());
  }, []);

  console.log(
    "JSON.stringify(ValidationError)",
    JSON.stringify(ValidationError)
  );
  return (
    <div className="shadow-md rounded-xl px-4 pt-6 pb-8 bg-white h-full md:h-auto">
      <Logo />
      <FormTitle title={translate("register_account")} />
      <form onSubmit={handleSubmit} className="px-4">
        <div>
          <div className="text-primary mb-3">
            {translate("personal_information")}
          </div>

          <Input
            placeholder={translate("fullname")}
            type="text"
            name="fullname"
            id="fullname"
            value={values.fullname}
            handleChange={handleChange}
            error={errors.fullname}
          />
          <Input
            placeholder={translate("username")}
            type="text"
            name="username"
            id="username"
            value={values.username}
            handleChange={handleChange}
            error={errors.username}
          />
          <Input
            placeholder={translate("password")}
            type="password"
            name="password"
            id="password"
            value={values.password}
            handleChange={handleChange}
            error={errors.password}
          />
          <Input
            handleChange={handleChange}
            id="email"
            name="email"
            placeholder={translate("email")}
            value={values.email}
            type="text"
            error={errors.email}
          />
          <Input
            placeholder={translate("mobile")}
            type="text"
            name="mobile"
            id="mobile"
            value={values.mobile}
            handleChange={handleChange}
            error={errors.mobile}
          />
          <Input
            placeholder={
              translate("mobile") + "(" + translate("optional") + ")"
            }
            type="text"
            name="additional_phone"
            id="additional_phone"
            value={values.additional_phone}
            handleChange={handleChange}
            error={errors.additional_phone}
          />
        </div>
        <div className="my-2">
          <div className="text-primary mb-3">
            {translate("residential_information")}
          </div>
          <Select
            placeholder={translate("choose_city")}
            options={
              cities && cities.data
                ? cities.data.length == 1 && cities.data[0].children
                  ? cities.data[0].children.map(({ _id, name }) => ({
                      label: typeof name === "object" ? name.en : name,
                      value: _id,
                    }))
                  : cities.data.map(({ _id, name }) => ({
                      label: typeof name === "object" ? name.en : name,
                      value: _id,
                    }))
                : []
            }
            name="address.city_id"
            id="address.city_id"
            value={values.address.city_id}
            onChange={handleChange}
            error={
              touched.address?.city_id && errors.address?.city_id
                ? errors.address.city_id
                : ""
            }
          />
          <Input
            placeholder={translate("block")}
            type="text"
            name="address.widget"
            id="address.widget"
            value={values.address.widget}
            error={errors.address?.widget}
            handleChange={handleChange}
          />

          <Input
            placeholder={translate("gada") + "(" + translate("optional") + ")"}
            type="text"
            name="address.gada"
            id="address.gada"
            value={values.address.gada}
            error={errors.address?.gada}
            handleChange={handleChange}
          />

          <Input
            placeholder={translate("street")}
            type="text"
            name="address.street"
            id="address.street"
            value={values.address.street}
            handleChange={handleChange}
            error={errors.address?.street}
          />

          <Input
            placeholder={translate("house")}
            type="text"
            name="address.house"
            id="address.house"
            value={values.address.house}
            handleChange={handleChange}
            error={errors.address?.house}
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder={
                translate("floor") + "(" + translate("optional") + ")"
              }
              type="text"
              name="address.floor"
              id="address.floor"
              value={values.address.floor}
              handleChange={handleChange}
              error={errors.address?.floor}
            />

            <Input
              placeholder={
                translate("apartment") + "(" + translate("optional") + ")"
              }
              type="text"
              name="address.apartment_number"
              id="address.apartment_number"
              value={values.address.apartment_number}
              handleChange={handleChange}
              error={errors.address?.apartment_number}
            />
          </div>
        </div>
        <div className="flex items-center mb-3">
          <Input
            label={translate("privacy_policy_agreement")}
            type="checkbox"
            placeholder={translate("apartment")}
            aria-describedby={translate("apartment")}
            name=""
            id=""
            value={values.address.apartment_number}
            handleChange={handleChange}
          />
        </div>
        {ValidationError && <div>{JSON.stringify(ValidationError)}</div>}
        <Button type="submit" loading={isLoading}>
          {translate("register")}
        </Button>
        <div className="text-sm text-center">
          <span className="text-gray-400">
            {translate("already_have_account")}
          </span>
          <Link className="text-primary" href={webRoutes.login}>
            {translate("login")}
          </Link>
        </div>
      </form>
    </div>
  );
}
