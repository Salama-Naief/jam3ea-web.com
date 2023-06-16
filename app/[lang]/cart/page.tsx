import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import apiHandler from '@/lib/utils/apiHandler';
import { IGetCheckoutResponseResult } from './types';
import Button from '@/components/Button';
import Link from 'next/link';
import webRoutes from '@/lib/utils/webRoutes';
import SingleSupplier from './components/SingleSupplier';
import MultiSuppliers from './components/MultiSuppliers';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';

export default async function Cart({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const cart: IGetCheckoutResponseResult = await apiHandler('/checkout');

  const dict = await getDictionary(lang);

  if (!cart) return <h1>No cart</h1>;
  return (
    <div>
      <Navbar title={translate(dict, 'cart')} />
      <Container>
        {cart.data && cart.data.length === 1 ? (
          <SingleSupplier cart={cart} lang={lang} dict={dict} />
        ) : (
          <MultiSuppliers cart={cart} lang={lang} />
        )}
      </Container>
    </div>
  );
}
