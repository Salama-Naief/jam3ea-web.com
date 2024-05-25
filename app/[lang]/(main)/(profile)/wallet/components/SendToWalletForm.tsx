"use client";

import { AuthContext } from "@/lib/providers/AuthProvider";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { ISendToWallet, ISendToWalletResponseResult } from "../../types";
import { sendToWallet } from "../../services";
import useHttpClient from "@/lib/hooks/useHttpClient";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { getPriceWithCurrency } from "@/module/(main)/product/utils";
import Popup from "@/components/Popup";

export default function SendToWalletForm() {
  const { translate } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<ISendToWalletResponseResult, ISendToWallet>();

  const formik = useFormik({
    initialValues: {
      mobile: "",
      amount: "",
    },
    onSubmit: async (values) => {
      console.log("values: ", values);
      const status = await sendRequest(sendToWallet(values));
      closeModal();
    },
  });

  const closeModal = () => setIsOpen(false);

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border mb-3 justify-center rounded-2xl align-center p-1"
      >
        <div className="flex flex-col w-full">
          <Input
            placeholder={translate("mobile")}
            className="w-full border-0  !border-b-gray-300"
            type="text"
            name="mobile"
            id="mobile"
            value={values.mobile}
            handleChange={handleChange}
            error={
              touched.mobile && errors.mobile
                ? errors.mobile
                : validationErrors && validationErrors.mobile
                ? validationErrors.mobile
                : undefined
            }
          />
          <Input
            placeholder={translate("amount")}
            className="w-full border-0  !border-b-gray-300"
            type="text"
            name="amount"
            id="amount"
            value={values.amount}
            handleChange={handleChange}
            error={
              touched.amount && errors.amount
                ? errors.amount
                : validationErrors && validationErrors.amount
                ? validationErrors.amount
                : undefined
            }
          />
        </div>
        <button
          type="button"
          className="bg-primary my-auto p-1 rounded-2xl h-fit text-white"
          onClick={() => setIsOpen(true)}
        >
          {translate("send")}
        </button>
        <Popup isOpen={isOpen} close={close}>
          <div className="text-md">
            {translate("do_you_want_to_transfer")}{" "}
            {getPriceWithCurrency(values.amount, translate("currency"))}{" "}
            {translate("to")} {values.mobile}
          </div>

          <div className="mt-4 flex gap-4">
            <Button
              type="submit"
              loading={isLoading}
              //className="bg-primary p-3 rounded-full text-white w-full"
            >
              {translate("ok")}
            </Button>
            <button
              type="button"
              className="p-3 text-black w-full"
              onClick={close}
            >
              {translate("cancel")}
            </button>
          </div>
        </Popup>
      </form>
    </>
  );
}
