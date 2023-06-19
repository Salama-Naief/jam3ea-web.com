'use client';

import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { LANGUAGES } from '@/lib/enums';
import { usePathname, useRouter } from 'next/navigation';
import { login } from '@/module/(profile)/services';
import webRoutes from '../utils/webRoutes';
import { IUser } from '@/module/(profile)/types';

const AuthContext = createContext({
  isLoggedIn: false,
  language: 'en',
  changeLanguage: (l: LANGUAGES, r?: boolean) => {},
  translate: (k: string): string => '',
  login: () => {},
  logout: () => {},
  user: null as any,
});

interface AuthProviderProps {
  children: React.ReactNode;
  dictionary: any;
}

const AuthProvider = ({ children, dictionary }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, setCookie] = useCookies([
    'isLoggedIn',
    'language',
    'auth.user',
    'auth.token',
    'addresses',
    'selectedAddress',
    'city',
    'visitor.token',
  ]);
  const [language, setLanguage] = useState<LANGUAGES>(
    cookies.language || LANGUAGES.ENGLISH
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    cookies && cookies.isLoggedIn == 'true'
  );
  const [user, setUser] = useState<IUser | null>(cookies['auth.user']);

  useEffect(() => {
    if (cookies.language) {
      setLanguage(cookies.language);
    } else {
      setLanguage(LANGUAGES.ENGLISH);
    }
  }, [cookies.language]);

  useEffect(() => {
    if (isLoggedIn && cookies['auth.user']) {
      setUser(cookies['auth.user']);
    }
  }, [cookies.isLoggedIn, cookies['auth.user']]);

  const changeLanguage = (language: LANGUAGES, reload = true) => {
    setCookie('language', language, {
      sameSite: 'none',
      secure: true,
      path: '/',
    });
    setLanguage(language);
    /* router.replace(
      pathname.startsWith(LANGUAGES.ENGLISH)
        ? pathname.replace(LANGUAGES.ENGLISH, language)
        : pathname.replace(LANGUAGES.ARABIC, language)
    ); */
    if (reload && window) {
      window.location.reload();
    } else {
      router.replace(
        pathname.startsWith(LANGUAGES.ENGLISH)
          ? pathname.replace(LANGUAGES.ENGLISH, language)
          : pathname.replace(LANGUAGES.ARABIC, language)
      );
    }
  };

  const login = () => {
    setCookie('isLoggedIn', true);
    setIsLoggedIn(true);
    router.replace(webRoutes.home);
  };

  const logout = () => {
    setCookie('isLoggedIn', false);
    setCookie('auth.user', null);
    setCookie('auth.token', null);
    setCookie('visitor.token', null);
    setCookie('addresses', []);
    setCookie('selectedAddress', null);
    setCookie('city', null);
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
        user,
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
