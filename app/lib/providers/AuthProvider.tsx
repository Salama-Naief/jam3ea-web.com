'use client';

import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { LANGUAGES } from '@/lib/enums';
import { usePathname, useRouter } from 'next/navigation';
import { login } from '@/module/(profile)/services';
import webRoutes from '../utils/webRoutes';

const AuthContext = createContext({
  isLoggedIn: false,
  language: 'en',
  changeLanguage: (l: LANGUAGES) => {},
  translate: (k: string): string => '',
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
  dictionary: any;
}

const AuthProvider = ({ children, dictionary }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, setCookie] = useCookies(['isLoggedIn', 'language']);
  const [language, setLanguage] = useState<LANGUAGES>(
    cookies.language || LANGUAGES.ENGLISH
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    cookies && cookies.isLoggedIn == 'true'
  );

  useEffect(() => {
    if (cookies.language) {
      setLanguage(cookies.language);
    } else {
      setLanguage(LANGUAGES.ENGLISH);
    }
  }, [cookies.language]);

  const changeLanguage = (language: LANGUAGES) => {
    setCookie('language', language, {
      sameSite: 'none',
      secure: true,
      path: '/',
    });
    setLanguage(language);
    router.replace(
      pathname.startsWith(LANGUAGES.ENGLISH)
        ? pathname.replace(LANGUAGES.ENGLISH, language)
        : pathname.replace(LANGUAGES.ARABIC, language)
    );
  };

  const login = () => {
    setCookie('isLoggedIn', true);
    setIsLoggedIn(true);
    router.replace(webRoutes.home);
  };

  const logout = () => {
    setCookie('isLoggedIn', false);
    setIsLoggedIn(false);
    router.replace(webRoutes.home);
  };

  const translate = (key: string): string => {
    if (dictionary && dictionary[key]) {
      return dictionary[key];
    }
    return key;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        language,
        changeLanguage,
        translate,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
