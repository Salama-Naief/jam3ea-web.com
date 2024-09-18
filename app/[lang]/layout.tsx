import "@fortawesome/fontawesome-svg-core/styles.css";
import "./../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@mantine/core/styles.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/lib/providers/AuthProvider";
import { AddressProvider } from "@/lib/providers/AddressProvider";
import { CartProvider } from "@/module/(main)/cart/CartProvider";
import { getDictionary } from "@/lib/utils/dictionary";
import { LANGUAGES } from "@/lib/enums";
import { Locale } from "../../i18n-config";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import logo from "../../public/assets/logo-sm.png";

interface IRootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export const metadata = {
  title: "Jm3eia dot com",
  verification: {
    google: "YejFgWHiYkJdIY9hniJYUP1oZAP8PT4ZVZsPkQYBOgc",
  },
  icons: {
    icon: logo.src,
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
  // G-35NK1GVQKM
  return (
    <html
      lang={selectedLang}
      dir={selectedLang === LANGUAGES.ARABIC ? "rtl" : "ltr"}
      // suppressHydrationWarning={true}
    >
      {/* <Head><link rel="icon" href="/favicon.png" sizes="any" /></Head> */}
      <GoogleTagManager gtmId="GTM-5HRPQPSW" />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HRPQPSW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div>
          <div id="root">
            <NextTopLoader showSpinner={false} color="#F77D0F" />
            <AuthProvider dictionary={dictionary}>
              <AddressProvider>
                <MantineProvider>
                  <CartProvider>{children}</CartProvider>
                </MantineProvider>
              </AddressProvider>
            </AuthProvider>
          </div>
          {/* <div id="menu-drawer"></div>
          <div id="categories-drawer"></div>
          <div id="popup"></div> */}
        </div>
      </body>
      <GoogleAnalytics gaId="G-35NK1GVQKM" />
    </html>
  );
}
