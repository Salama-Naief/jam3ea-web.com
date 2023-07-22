'use client';

import { useContext, useState } from 'react';
import { IGetCheckoutResponseResult } from '../types';
import { Locale } from '../../../../i18n-config';
import {
  getPriceWithCurrency,
  getProductQuantityPrice,
} from '@/module/product/utils';
import AddToCartButton from './AddToCartButton';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { CODIcon, ChevronRight, KnetIcon } from '@/components/Icons';
import DeliveryTimePicker from './DeliveryTimePicker';
import PaymentMethods from './PaymentMethods';
import Link from 'next/link';
import Button from '@/components/Button';
import webRoutes from '@/lib/utils/webRoutes';
import ApplyCoupon from './ApplyCoupon';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { checkout, getcheckout } from '../services';
import { useFormik } from 'formik';
import { showErrorAlert } from '@/lib/utils/helpers';
import { AddressContext } from '@/lib/providers/AddressProvider';
import { IResponse } from '@/lib/types';

interface MultiSuppliersProps {
  cart: IGetCheckoutResponseResult;
  lang: Locale;
  dict: any;
}

export default function MultiSuppliers({
  cart,
  lang,
  dict,
}: MultiSuppliersProps) {
  const { translate, language, isLoggedIn } = useContext(AuthContext);
  const { selectedAddress } = useContext(AddressContext);
  const [isLoading, setIsLoading] = useState(false);
  const suppliersData = cart.data.map((d) => ({
    supplier_id: d.supplier._id,
    delivery_time: '',
    requires_delivery_time: !d.supplier.delivery_time_text,
  }));

  const formik = useFormik({
    initialValues: {
      payment_method: '',
      suppliers: suppliersData,
    },
    onSubmit: async (values) => {
      if (!values.payment_method) {
        showErrorAlert(translate('select_payment_method'), translate('ok'));
        return;
      }

      if (
        values.suppliers.find(
          (s: any) =>
            s && s.supplier_id && s.requires_delivery_time && !s.delivery_time
        )
      ) {
        showErrorAlert(translate('select_delivery_time'), translate('ok'));
        return;
      }

      const body: any = {
        payment_method: values.payment_method,
        suppliers: values.suppliers
          .filter((s) => s && s.supplier_id)
          .map((s) => ({
            supplier_id: s.supplier_id,
            delivery_time: s.delivery_time,
          })),
      };

      console.log('BODY: ', body);
      return;

      if (isLoggedIn) {
        body.address_id = selectedAddress?.id;
      } else {
        body.user_data = {
          fullname: selectedAddress?.name,
          mobile: selectedAddress?.mobile,
          email: selectedAddress?.email,
          address: { ...selectedAddress },
        };
      }
      setIsLoading(true);
      const response: IResponse<{ url: string }> = await checkout(
        body,
        selectedAddress?.city_id
      );
      if (response.success && response.results?.url) {
        window.location.href = response.results.url;
      } else {
        setIsLoading(false);
      }
    },
  });

  const { touched, errors, values, handleChange, handleSubmit, setFieldValue } =
    formik;

  console.log('before values: ', values);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {cart.data.map((data, i) => (
          <div
            key={data.supplier._id}
            className="border-primary border mb-4 rounded-xl p-2"
          >
            <div className="mb-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value={data.supplier._id}
                checked
                disabled
                name="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary-soft dark:focus:ring-primary focus:ring-2 "
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {typeof data.supplier.name === 'object' &&
                (data.supplier.name as any)[language]
                  ? (data.supplier.name as any)[language]
                  : data.supplier.name}
              </label>
            </div>

            {/* Single seller */}
            {data.products.map((product) => (
              <div
                key={product.sku}
                className="flex p-3 rounded-xl bg-white gap-3 items-center mb-3"
              >
                <img
                  className="max-w-full min-h-[74px] max-h-[74px] h-full"
                  src={product.picture}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="text-md">{product.name}</span>
                  <span className="text-sm">
                    {translate('price')}: {product.price}
                  </span>
                  <span className="text-sm text-primary">
                    {translate('total')}:{' '}
                    {getProductQuantityPrice(
                      parseFloat(product.price),
                      product.quantity
                    )}
                  </span>
                </div>
                <AddToCartButton
                  cartsStatus={product.cart_status}
                  isAvailable={product.availability}
                  maxQantity={product.max_quantity_cart}
                  sku={product.sku}
                />
              </div>
            ))}
            {data.supplier.delivery_time_text ? (
              <div className="py-5 rounded-xl bg-white">
                <div className="text-center">
                  {typeof data.supplier.delivery_time_text === 'object'
                    ? data.supplier.delivery_time_text[lang]
                    : data.supplier.delivery_time_text}
                </div>
              </div>
            ) : (
              <DeliveryTimePicker
                deliveryTimes={data.delivery_times}
                dictionary={{
                  delivery_time: dict.delivery_time,
                  pick_delivery_time: dict.pick_delivery_time,
                }}
                onSelect={(v) => {
                  setFieldValue(
                    `suppliers.${i}.supplier_id`,
                    data.supplier._id
                  );
                  setFieldValue(`suppliers.${i}.delivery_time`, v.full_date);
                  console.log('Selected time: ', v.full_date);
                }}
                selectedDeliveryTime={values.suppliers[i]?.delivery_time}
              />
            )}
            <div className="flex flex-col  py-2">
              <div className="flex items-center justify-between border-y py-2">
                <div className="text-sm">
                  {translate('available_payment_methods')}
                </div>
                <div className="flex">
                  {data.payment_methods.map((pm) => (
                    <div key={pm.id} className="ms-auto bg-white p-2 rounded-xl border">
                      {pm.id === 'cod' && <CODIcon />}
                      {pm.id === 'knet' && <KnetIcon />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center py-1">
                <div className="text-sm">{translate('subtotal')}</div>
                <div className="ms-auto text-sm">
                  {getPriceWithCurrency(data.subtotal, translate('currency'))}
                </div>
              </div>
              <div className="flex items-center border-b py-1">
                <div className="text-sm">{translate('shipping_cost')}</div>
                <div className="ms-auto text-sm">
                  {getPriceWithCurrency(
                    data.shipping_cost,
                    translate('currency')
                  )}
                </div>
              </div>
              {data.coupon && (
                <div className="flex items-center border-b py-1">
                  <div className="text-sm">{translate('discount')}</div>
                  <div className="ms-auto text-sm">{data.coupon.value}</div>
                </div>
              )}
              <div className="flex items-center py-1">
                <div className="text-sm">{translate('total')}</div>
                <div className="ms-auto text-sm">
                  {getPriceWithCurrency(data.total, translate('currency'))}
                </div>
              </div>
            </div>
          </div>
        ))}

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
            console.log('payment method selected: ', pm);
            setFieldValue('payment_method', pm.id);
          }}
          selectedPaymentMethod={values.payment_method}
        />

        {/* <div className="flex flex-col bg-white rounded-2xl gap-2 p-4 mb-2">
          <div className="flex items-center">
            <div className="text-sm">{translate('order_summary')}</div>
            <div className="bg-primary-soft text-primary py-2 px-4 text-sm rounded-2xl ms-auto">
              {cart.products.length} {translate('product')}
            </div>
          </div>
          <div className="flex flex-col border-l-0 border-r-0 border py-2">
            <div className="flex items-center">
              <div className="text-sm">Total price</div>
              <div className="ms-auto flex">
                <div className="text-sm mx-2">test</div>
                <div className="text-sm">
                  {getPriceWithCurrency(cart.subtotal, translate('currency'))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm">Delivery fee</div>
              <div className="ms-auto text-sm">
                {getPriceWithCurrency(
                  cart.shipping_cost,
                  translate('currency')
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-md">Total Receipt</div>
            <div className="ms-auto text-md font-semibold">
              {getPriceWithCurrency(cart.total, translate('currency'))}
            </div>
          </div>
        </div> */}
        <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center">
            <span className="text-lg">{translate('order_summary')}</span>
            <div className="ml-auto bg-primary-soft text-primary p-2 rounded-full">
              {cart.products.length} {translate('products')}
            </div>
          </div>

          <table className="min-w-full border-collapse border ">
            <thead>
              <tr>
                <th className="py-2 text-start px-4 border-b"></th>
                <th className="py-2 text-start px-4  border-b">
                  {translate('number_of_items')}
                </th>
                <th className="py-2 text-start px-4  border-b">
                  {translate('amount')}
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.data.map((data) => (
                <tr key={data.supplier._id}>
                  <td className="py-2 px-4 border-b">
                    {typeof data.supplier.name === 'object' &&
                    (data.supplier.name as any)[language]
                      ? (data.supplier.name as any)[language]
                      : data.supplier.name}
                  </td>
                  <td className="py-2 px-4 border-b">{data.products.length}</td>
                  <td className="py-2 px-4 border-b">{data.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cart.message && cart.purchase_possibility === false && (
          <div className="text-danger text-center mb-2">{cart.message}</div>
        )}
        <Button
          disabled={cart.purchase_possibility === false}
          loading={isLoading}
          type="submit"
        >
          {translate('checkout')}
        </Button>
        <div className="text-center">
          <Link
            href={webRoutes.home}
            className="text-primary text-lg text-center flex items-center w-full"
          >
            <div className="ms-auto">{translate('back_to_home')}</div>

            <div className="ms-auto">
              <ChevronRight color="#f77d0f" />
            </div>
          </Link>
        </div>
      </form>
    </>
  );
}
