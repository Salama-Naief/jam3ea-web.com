import 'server-only';

import { cookies } from 'next/headers';
import { LANGUAGES } from '../enums';
import { i18n } from '../../../i18n-config';

export const translate = (dictionary: any, key: string): string => {
  if (dictionary && dictionary[key]) {
    return dictionary[key];
  }
  return key;
};

export const getLanguage = (pathname?: string): LANGUAGES => {
  const cookieStore = cookies();
  const language = cookieStore.get('language')?.value;

  if (
    language &&
    [LANGUAGES.ENGLISH, LANGUAGES.ARABIC].includes(language as LANGUAGES)
  )
    return language as LANGUAGES;

  if (pathname) {
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      return (
        (process.env.DEFAULT_LOCALE_CODE as LANGUAGES) || LANGUAGES.ENGLISH
      );
    }
  }

  return LANGUAGES.ENGLISH;
};

export const isLoggedIn = () => {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('isLoggedIn')?.value;
  return isLoggedIn == 'true';
};
