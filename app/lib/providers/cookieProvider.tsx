'use client';

import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { LANGUAGES } from '@/lib/enums';

const CookieContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  language: 'en',
  changeLanguage: (l: LANGUAGES) => {},
});

const CookieProvider = ({ children }: any) => {
  const [cookies, setCookie] = useCookies(['isLoggedIn', 'language']);
  const [language, setLanguage] = useState<LANGUAGES>(
    cookies && cookies.language ? cookies.language : 'en'
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    cookies && cookies.isLoggedIn == 'true'
  );

  useEffect(() => {
    console.log('ISLOGGEDIN: ', isLoggedIn);
  }, [cookies.isLoggedIn]);

  const options: any = {
    sameSite: 'none',
    secure: false,
    path: '/',
  };

  const login = () => {
    //setCookie('data.isLoggedIn', 'true', options);
    setIsLoggedIn(true);
  };

  const logout = () => {
    //setCookie('data.isLoggedIn', 'false', options);
    //removeCookie('auth.user');
    //removeCookie('auth.token');
    setIsLoggedIn(false);
  };

  const changeLanguage = (language: LANGUAGES) => {
    setCookie('language', language);
    setLanguage(language);
  };

  return (
    <CookieContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        language,
        changeLanguage,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

CookieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CookieContext, CookieProvider };
