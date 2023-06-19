'use client';

import { LANGUAGES } from '@/lib/enums';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function LanguageSelect() {
  const { language, changeLanguage, translate } = useContext(AuthContext);
  const pathName = usePathname();
  const router = useRouter();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return router.replace('/');
    const segments = pathName.split('/');
    segments[1] = locale;
    return router.replace(segments.join('/'));
  };

  return (
    <>
      <div className="text-center mb-8 w-full">
        {translate('pick_language')}
      </div>
      <div className="flex gap-2 mb-16">
        <div className="w-full">
          <div
            className={`flex items-center pl-4 ${
              language === 'en' ? 'bg-primary-soft' : 'bg-gray-100'
            } text-center rounded-full`}
          >
            <input
              checked={language === 'en'}
              value="en"
              onChange={() => {
                changeLanguage(LANGUAGES.ENGLISH, false);
                return redirectedPathName(LANGUAGES.ENGLISH);
              }}
              id="bordered-radio-1"
              type="radio"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 text-sm font-medium text-gray-900"
            >
              English
            </label>
          </div>
        </div>
        <div className="w-full">
          {/* <div className="text-center mb-2">اختر لغة</div> */}
          <div
            className={`flex items-center pl-4 ${
              language === 'ar' ? 'bg-primary-soft' : 'bg-gray-100'
            } text-center rounded-full`}
          >
            <input
              checked={language === 'ar'}
              value="ar"
              onChange={() => {
                changeLanguage(LANGUAGES.ARABIC, false);
                return redirectedPathName(LANGUAGES.ARABIC);
              }}
              id="bordered-radio-2"
              type="radio"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 text-sm font-medium text-gray-900"
            >
              العربية
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
