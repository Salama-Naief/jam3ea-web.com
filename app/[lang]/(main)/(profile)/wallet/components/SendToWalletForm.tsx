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
import { useRouter } from "next/navigation";

export default function SendToWalletForm() {
  const { translate } = useContext(AuthContext);
  const router = useRouter();
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
      if (status) {
        router.refresh();
        closeModal();
      }
    },
  });

  const closeModal = () => setIsOpen(false);

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="lg:flex border items-end gap-4 pb-4 rounded-2xl p-4 shadow-md"
      >
        <div className="flex flex-col w-full">
          <h6 className="text-gray-4 md:text-lg mt-2">
            Enter the amount to be sent from the wallet
          </h6>
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
        <div className="text-end">
          <button
            type="button"
            className="bg-secondary  px-6 py-3 mt-6 lg:mt-0 rounded-md h-fit text-white"
            onClick={() => setIsOpen(true)}
          >
            {translate("send")}
          </button>
        </div>
        <Popup isOpen={isOpen} close={closeModal}>
          <div className="text-lg p-4">
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
              className="py-1.5 mb-3 rounded-lg text-black w-full border border-primary"
              onClick={closeModal}
            >
              {translate("cancel")}
            </button>
          </div>
        </Popup>
      </form>
    </>
  );
}
