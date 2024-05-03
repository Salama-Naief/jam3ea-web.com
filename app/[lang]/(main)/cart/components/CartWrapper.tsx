'use client';

import useHttpClient from '@/lib/hooks/useHttpClient';
import { Locale } from '../../../../i18n-config';
import { IGetCheckoutResponseResult } from '../types';
import { getcheckout } from '../services';
import { useContext, useEffect, useState } from 'react';
import SingleSupplier from './SingleSupplier';
import MultiSuppliers from './MultiSuppliers';
import { AuthContext } from '@/lib/providers/AuthProvider';
import Loader from '@/components/Loader';
import { AddressContext } from '@/lib/providers/AddressProvider';

interface CartWrapperProps {
  lang: Locale;
  dict: any;
}

export default function CartWrapper({ dict, lang }: CartWrapperProps) {
  const {
    results: cart,
    sendRequest,
    isLoading,
  } = useHttpClient<IGetCheckoutResponseResult>();
  const { translate } = useContext(AuthContext);
  const { selectedAddress } = useContext(AddressContext);

  useEffect(() => {
    const fetchCart = async () => {
      const status = await sendRequest(
        getcheckout(undefined, selectedAddress?.city_id)
      );
      if (status) {
        console.log('this is results: ', cart);
      }
    };

    fetchCart();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {cart && cart.data ? (
        cart.data.length === 1 ? (
          <SingleSupplier cart={cart} lang={lang} dict={dict} />
        ) : (
          <MultiSuppliers cart={cart} lang={lang} dict={dict} />
        )
      ) : (
        <div className="flex flex-col mt-20 justify-center items-center">
          <div>{translate('no_data')}</div>
        </div>
      )}
    </>
  );
}
