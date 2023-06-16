import '@fortawesome/fontawesome-svg-core/styles.css';
import './../globals.css';
import NextTopLoader from 'nextjs-toploader';
import { AuthProvider } from '@/lib/providers/AuthProvider';
import { AddressProvider } from '@/lib/providers/AddressProvider';
import { CartProvider } from '@/module/cart/CartProvider';
import { getDictionary } from '@/lib/utils/dictionary';
import { LANGUAGES } from '@/lib/enums';
import { Locale } from '../../i18n-config';

interface IRootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export const metadata = {
  title: 'Jm3eia dot com',
};

export default async function RootLayout({
  children,
  params,
}: IRootLayoutProps) {
  const dictionary = await getDictionary(params.lang || LANGUAGES.ENGLISH);
  return (
    <html lang={params.lang}>
      <body suppressHydrationWarning={true}>
        <div>
          <div id="root">
            <NextTopLoader color='#F77D0F' />
            <AuthProvider dictionary={dictionary}>
              <AddressProvider>
                <CartProvider>
                  <>{children}</>
                </CartProvider>
              </AddressProvider>
            </AuthProvider>
          </div>
          <div id="menu-drawer"></div>
          <div id="categories-drawer"></div>
          <div id="popup"></div>
        </div>
      </body>
    </html>
  );
}
