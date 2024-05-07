import "@fortawesome/fontawesome-svg-core/styles.css";
import "./../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/lib/providers/AuthProvider";
import { AddressProvider } from "@/lib/providers/AddressProvider";
import { CartProvider } from "@/module/(main)/cart/CartProvider";
import { getDictionary } from "@/lib/utils/dictionary";
import { LANGUAGES } from "@/lib/enums";
import { Locale } from "../../i18n-config";
import Navbar from "@/components/Navbar/Navbar";

interface IRootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export const metadata = {
  title: "Jm3eia dot com",
  verification: {
    google: "YejFgWHiYkJdIY9hniJYUP1oZAP8PT4ZVZsPkQYBOgc",
  },
};

export default async function RootLayout({
  children,
  params,
}: IRootLayoutProps) {
  const selectedLang = [LANGUAGES.ENGLISH, LANGUAGES.ARABIC].includes(
    params.lang as any
  )
    ? params.lang
    : process.env.DEFAULT_LOCALE_CODE;

  const dictionary = await getDictionary(selectedLang as Locale);
  return (
    <html
      lang={selectedLang}
      dir={selectedLang === LANGUAGES.ARABIC ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <div>
          <div id="root">
            <NextTopLoader color="#F77D0F" />
            <AuthProvider dictionary={dictionary}>
              <AddressProvider>
                <CartProvider>{children}</CartProvider>
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
