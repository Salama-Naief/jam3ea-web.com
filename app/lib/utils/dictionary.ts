import "server-only";
import type { Locale } from "./../../../i18n-config";
import { getLanguage } from "./serverHelpers";
import { LANGUAGES } from "../enums";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("./../../../dictionaries/en.json").then((module) => module.default),
  ar: () =>
    import("./../../../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!locale) {
    locale = getLanguage();
  }

  if (!locale) {
    locale = LANGUAGES.ARABIC || "ar";
  }

  const selectedLocale = [LANGUAGES.ENGLISH, LANGUAGES.ARABIC].includes(
    locale as any
  )
    ? locale
    : process.env.DEFAULT_LOCALE_CODE;

  return dictionaries[selectedLocale as Locale]();
};
