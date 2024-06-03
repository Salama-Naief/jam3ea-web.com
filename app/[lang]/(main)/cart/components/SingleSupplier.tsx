"use client";

import Link from "next/link";
import { IGetCheckoutResponseResult } from "../types";
import Button from "@/components/Button";
import webRoutes from "@/lib/utils/webRoutes";
import {
  getPriceWithCurrency,
  getProductQuantityPrice,
} from "@/module/(main)/product/utils";
import { Locale } from "../../../../../i18n-config";
//import { translate } from '@/lib/utils/serverHelpers';
import DeliveryTimePicker from "./DeliveryTimePicker";
import AddToCartButton from "./AddToCartButton";
import ApplyCoupon from "./ApplyCoupon";
import PaymentMethods from "./PaymentMethods";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { AddressContext } from "@/lib/providers/AddressProvider";
import { useFormik } from "formik";
import { checkout } from "../services";
import { IResponse } from "@/lib/types";
import { showErrorAlert } from "@/lib/utils/helpers";
import Visa from "./Visa";
import CartProductCard from "./CartProductCard";
import { Modal } from "@mantine/core";
import LoginForm from "@/module/(auth)/login/components/LoginForm.tsx";
import { useDisclosure } from "@mantine/hooks";
import { IUser } from "../../(profile)/types";
import { useRouter } from "next/navigation";

interface SingleSupplierProps {
  cart: IGetCheckoutResponseResult;
  lang: Locale;
  dict: any;
  user: IUser;
}

export default function SingleSupplier({
  cart,
  lang,
  dict,
  user,
}: SingleSupplierProps) {
  const data = cart.data[0];
  const { translate, isLoggedIn } = useContext(AuthContext);
  const { selectedAddress, addresses } = useContext(AddressContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      payment_method: "",
      delivery_time: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      if (!isLoggedIn) {
        open();
        return;
      }
      if (!user.mobile) {
        showErrorAlert(
          translate("please sellect mobile number"),
          translate("ok")
        );
        router.push("/account");
      }
      if (!values.payment_method) {
        showErrorAlert(translate("select_payment_method"), translate("ok"));
        return;
      }

      if (!values.delivery_time) {
        showErrorAlert(translate("select_delivery_time"), translate("ok"));
        return;
      }
      const body: any = {
        payment_method: values.payment_method,
        delivery_time: values.delivery_time,
        suppliers: [
          {
            supplier_id: data.supplier._id,
            delivery_time: values.delivery_time,
          },
        ],
      };

      //   if (isLoggedIn) {
      //  //   body.address_id = selectedAddress?.id;
      //   } else {
      body.user_data = {
        fullname: user.fullname,
        mobile: user.mobile,
        email: user.email,
        address: user.address,
      };
      //}
      setIsLoading(true);
      const response: IResponse<{ url: string }> = await checkout(
        body,
        selectedAddress?.city_id
      );
      console.log("response checkout", response);
      console.log("body checkout", body);
      if (response.success && response.results?.url) {
        window.location.href = response.results.url;
      } else {
        setIsLoading(false);
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit, setFieldValue } =
    formik;

  return (
    <div>
      <h3 className="text-lg font-bold text-secondary mp-4 mt-4 ">
        {typeof data.supplier.name === "object"
          ? data.supplier.name[lang]
          : data.supplier.name}
      </h3>
      {/* <form
        onSubmit={handleSubmit}
        className="md:grid md:grid-cols-5 gap-8 items-start"
      >  */}
      <div className="md:grid md:grid-cols-5 gap-8 items-start">
        <div className="col-span-3 h-fit">
          {cart.data[0].products?.map((product, i) => (
            <CartProductCard key={i} product={product} />
            // <div
            //   key={product.sku}
            //   className="flex p-3 rounded-xl bg-white gap-3 items-center mb-3"
            // >
            //   <img
            //     className="max-w-full min-h-[74px] max-h-[74px] h-full"
            //     src={product.picture}
            //     alt=""
            //   />
            //   <div className="flex flex-col gap-1">
            //     <span className="text-md">{product.name}</span>
            //     <span className="text-sm">
            //       {translate("price")}: {product.price}
            //     </span>
            //     <span className="text-sm text-primary">
            //       {translate("total")}:{" "}
            //       {getProductQuantityPrice(
            //         parseFloat(product.price),
            //         product.quantity
            //       )}
            //     </span>
            //   </div>
            //   <AddToCartButton
            //     cartsStatus={product.cart_status}
            //     isAvailable={product.availability}
            //     maxQantity={product.max_quantity_cart}
            //     sku={product.sku}
            //   />
            // </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="col-span-2">
          <div className="col-span-2 bg-[#F1F1F1] p-6 rounded-xl flex flex-col items-center justify-center gap-4">
            <DeliveryTimePicker
              deliveryTimes={cart.delivery_times}
              dictionary={{
                delivery_time: dict.delivery_time,
                pick_delivery_time: dict.pick_delivery_time,
              }}
              onSelect={(v) => {
                console.log("Selected time: ", v.full_date);
                setFieldValue("delivery_time", v.full_date);
              }}
              selectedDeliveryTime={values.delivery_time}
            />

            <ApplyCoupon
              coupon={cart.coupon}
              dictionary={{ apply: dict.apply, have_coupon: dict.have_coupon }}
            />

            <PaymentMethods
              payment_methods={cart.payment_methods}
              dictionary={{
                payment_methods: dict.payment_methods,
                cod: dict.cod,
                knet: dict.knet,
              }}
              onSelect={(pm) => {
                console.log("payment method selected: ", pm);
                setFieldValue("payment_method", pm.id);
              }}
              selectedPaymentMethod={values.payment_method}
            />

            {/* <Visa /> */}

            <div className="flex flex-col bg-transparent rounded-2xl gap-2 p-4 mb-2 w-full">
              <div className="flex items-center text-lg font-bold text-secondary">
                <div className="">{translate("order_summary")}</div>
                <div className="text-black py-2 px-4 rounded-2xl ms-auto">
                  {cart.data[0].products?.length} {translate("products")}
                </div>
              </div>
              <div className="flex flex-col border-l-0 font-semibold border-r-0 border border-black px-3 py-2">
                <div className="flex items-center ">
                  <div className="mb-2">{translate("subtotal")}</div>
                  <div className="ms-auto mb-2">
                    {getPriceWithCurrency(data.subtotal, translate("currency"))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">{translate("shipping_cost")}</div>
                  <div className="ms-auto text-sm">
                    {getPriceWithCurrency(
                      data.shipping_cost,
                      translate("currency")
                    )}
                  </div>
                </div>
              </div>
              {cart.coupon && parseFloat(cart.coupon.value) > 0 && (
                <div className="flex items-center">
                  <div className="text-sm">{translate("discount")}</div>
                  <div className="ms-auto text-md font-semibold">
                    {cart.coupon.value}
                  </div>
                </div>
              )}
              <div className="flex items-center my-2 font-semibold">
                <div className="text-md">{translate("total")}</div>
                <div className="ms-auto text-md font-semibold">
                  {getPriceWithCurrency(data.total, translate("currency"))}
                </div>
              </div>
            </div>
            {cart.message && cart.purchase_possibility === false && (
              <div className="text-danger text-center mb-2">{cart.message}</div>
            )}
            <Button
              disabled={cart.purchase_possibility === false}
              loading={isLoading}
              type={"submit"}
              className="shadow-md"
            >
              {translate("checkout")}
            </Button>
            <Modal opened={opened} onClose={close} title="Login">
              <LoginForm close={close} />
            </Modal>
            {/* <div className="text-center">
            <Link
              href={webRoutes.home}
              className="text-primary text-lg text-center flex items-center w-full"
            >
              <div className="ms-auto">{translate("back_to_home")}</div>

              <div className="ms-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                >
                  <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(28 73) rotate(180)"
                  >
                    <rect
                      id="Rectangle_4"
                      data-name="Rectangle 4"
                      width="12"
                      height="24"
                      transform="translate(16 49)"
                      fill="none"
                    />
                    <g
                      id="Group_9"
                      data-name="Group 9"
                      transform="translate(18.511 53.427)"
                    >
                      <path
                        id="Path_333"
                        data-name="Path 333"
                        d="M23.462,53.181l-7.631,7.631,7.631,7.631"
                        transform="translate(-15.831 -53.181)"
                        fill="none"
                        stroke="#f77d0f"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
          </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
