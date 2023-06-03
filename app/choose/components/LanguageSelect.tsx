'use client';

import { CookieContext } from '@/lib/providers/cookieProvider';
import { useContext } from 'react';

export default function LanguageSelect() {
  const { language, changeLanguage } = useContext(CookieContext);

  return (
    <>
      <h2>Selected Lanaguge: {language}</h2>
      <div className="w-full">
        <div className="text-center mb-2">Pick language</div>
        <div
          className={`flex items-center pl-4 ${
            language === 'en' ? 'bg-primary-soft' : 'bg-gray-100'
          } text-center rounded-full`}
        >
          <input
            checked={language === 'en'}
            value="en"
            onChange={() => changeLanguage('en')}
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
        <div className="text-center mb-2">اختر لغة</div>
        <div
          className={`flex items-center pl-4 ${
            language === 'ar' ? 'bg-primary-soft' : 'bg-gray-100'
          } text-center rounded-full`}
        >
          <input
            checked={language === 'ar'}
            value="ar"
            onChange={() => changeLanguage('ar')}
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
    </>
  );
}
