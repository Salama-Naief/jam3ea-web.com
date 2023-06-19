import { Locale } from '../../../i18n-config';
import { LANGUAGES } from '../enums';

export const getCurrency = (lang: Locale) => {
  if (lang === LANGUAGES.ENGLISH) return 'KD';
  if (lang === LANGUAGES.ARABIC) return 'د.ك';

  return 'KWD';
};
