import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import apiHandler from '@/lib/utils/apiHandler';
import { IGetCheckoutResponseResult } from './types';
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
  console.log('cart: ', cart);

  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar title={translate(dict, 'cart')} />
      <Container>
        {cart && cart.data ? (
          cart.data.length === 1 ? (
            <SingleSupplier cart={cart} lang={lang} dict={dict} />
          ) : (
            <MultiSuppliers cart={cart} lang={lang} dict={dict} />
          )
        ) : (
          <div className="flex flex-col mt-20 justify-center items-center">
            <div>{translate(dict, 'no_data')}</div>
          </div>
        )}
      </Container>
    </div>
  );
}
