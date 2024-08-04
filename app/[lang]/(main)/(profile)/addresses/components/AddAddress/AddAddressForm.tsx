"use client";

import {
  IAddAddress,
  IAddAddressResponseResult,
  IAddress,
  IUpdateProfile,
  IUpdateProfileResponseResult,
  IUser,
} from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { getCities } from "@/module/(main)/city/services";
import { IDataLoadedResponse } from "@/lib/types";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "@/lib/providers/AddressProvider";
import { AuthContext } from "@/lib/providers/AuthProvider";
import * as Yup from "yup";
import { updateProfile } from "../../../services";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

interface AddAddressProps {
  afterSubmit: () => void;
  user: IUser;
  setAllowedCity?: (v: boolean) => void;
  showMap?: boolean;
}

const AddressSchema = Yup.object().shape({
  fullname: Yup.string().required(),
  mobile: Yup.string().required().length(8),
  address: Yup.object({
    street: Yup.string().required(),
    city_id: Yup.string().required(),
  }),
});

export default function AddAddressForm({
  afterSubmit,
  user,
  setAllowedCity,
  showMap = false,
}: AddAddressProps) {
  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdateProfileResponseResult, IUpdateProfile>();

  const [loading, setLoading] = useState(false);
  const { translate } = useContext(AuthContext);

  useEffect(() => {
    citiesRequest(getCities());
  }, []);

  const formik = useFormik({
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
        latitude: user.address.latitude || 0,
        longitude: user.address.longitude || 0,
      },
    },
    validationSchema: AddressSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const status = await sendRequest(updateProfile(values));
      if (status) {
        resetForm();
        router.refresh();
      }
      afterSubmit();
      setLoading(false);
    },
  });

  const { touched, errors, values, handleChange, handleSubmit, resetForm } =
    formik;

  console.log("errrorr", errors);
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">
        {user.address
          ? translate("modify_address")
          : translate("add_new_address")}
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <div className="text-primary mb-3">
              {translate("personal_information")}
            </div>
            <Input
              placeholder={translate("fullname")}
              aria-describedby={translate("fullname")}
              type="text"
              name="fullname"
              id="fullname"
              value={values.fullname || ""}
              handleChange={handleChange}
              error={
                touched.fullname && errors.fullname
                  ? errors.fullname
                  : validationErrors && validationErrors.fullname
                  ? validationErrors.fullname
                  : undefined
              }
            />
            <Input
              placeholder={translate("email")}
              aria-describedby={translate("email")}
              type="email"
              name="email"
              id="email"
              value={values.email || ""}
              handleChange={handleChange}
              error={
                touched.email && errors.email
                  ? errors.email
                  : validationErrors && validationErrors.email
                  ? validationErrors.email
                  : undefined
              }
            />
            <Input
              placeholder={translate("mobile")}
              aria-describedby={translate("mobile")}
              type="text"
              name="mobile"
              id="mobile"
              value={values.mobile || ""}
              handleChange={handleChange}
              error={
                touched.mobile && errors.mobile
                  ? errors.mobile
                  : validationErrors && validationErrors.mobile
                  ? validationErrors.mobile
                  : undefined
              }
            />
          </div>
          <div className="mb-2">
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
              required
              value={values.address.city_id}
              onChange={handleChange}
              error={
                touched.address?.city_id && errors.address?.city_id
                  ? errors.address.city_id
                  : // : validationErrors && validationErrors.address.city_id
                    // ? validationErrors.address.city_id
                    undefined
              }
            />

            <Input
              placeholder={translate("block")}
              aria-describedby={translate("block")}
              type="text"
              name="address.widget"
              id="address.widget"
              value={values.address.widget}
              handleChange={handleChange}
              error={
                touched.address?.widget && errors.address?.widget
                  ? errors.address.widget
                  : // : validationErrors && validationErrors.address.widget
                    // ? validationErrors.address.widget
                    undefined
              }
            />

            <Input
              placeholder={translate("gada")}
              aria-describedby={translate("gada")}
              type="text"
              name="address.gada"
              id="address.gada"
              value={values.address.gada || ""}
              handleChange={handleChange}
              error={
                touched.address?.gada && errors.address?.gada
                  ? errors.address.gada
                  : // : validationErrors && validationErrors.address.gada
                    // ? validationErrors.address.gada
                    undefined
              }
            />

            <Input
              placeholder={translate("street")}
              aria-describedby={translate("street")}
              type="text"
              name="address.street"
              id="address.street"
              value={values.address.street}
              handleChange={handleChange}
              error={
                touched.address?.street && errors.address?.street
                  ? errors.address.street
                  : // : validationErrors && validationErrors.address.street
                    // ? validationErrors.address.street
                    undefined
              }
            />

            <Input
              placeholder={translate("house")}
              aria-describedby={translate("house")}
              type="text"
              name="address.house"
              id="address.house"
              value={values.address.house}
              handleChange={handleChange}
              error={
                touched.address?.house && errors.address?.house
                  ? errors.address.house
                  : // : validationErrors && validationErrors.address.house
                    // ? validationErrors.address.house
                    undefined
              }
            />

            <div className="flex gap-2">
              <Input
                placeholder={translate("floor")}
                aria-describedby={translate("floor")}
                type="text"
                name="address.floor"
                id="address.floor"
                value={values.address.floor || ""}
                handleChange={handleChange}
                error={
                  touched.address?.floor && errors.address?.floor
                    ? errors.address.floor
                    : // : validationErrors && validationErrors.address.floor
                      // ? validationErrors.address.floor
                      undefined
                }
              />
              <Input
                placeholder={translate("apartment")}
                aria-describedby={translate("apartment")}
                type="text"
                name="address.apartment_number"
                id="address.apartment_number"
                value={values.address.apartment_number || ""}
                handleChange={handleChange}
                error={
                  touched.address?.apartment_number &&
                  errors.address?.apartment_number
                    ? errors.address.apartment_number
                    : // : validationErrors &&
                      //   validationErrors.address.apartment_number
                      // ? validationErrors.address.apartment_number
                      undefined
                }
              />
            </div>
          </div>
        </div>
        <div
          className={`${showMap ? "justify-between" : "justify-end"} flex mt-4`}
        >
          {showMap && (
            <button
              onClick={() => setAllowedCity && setAllowedCity(true)}
              className="px-6 cursor-pointer py-2 text-primary border border-primary rounded-lg"
            >
              View map
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white bg-primary rounded-lg"
          >
            {loading ? (
              <Loader size={"sm"} color="white" />
            ) : user.address ? (
              translate("update")
            ) : (
              translate("add_address")
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
