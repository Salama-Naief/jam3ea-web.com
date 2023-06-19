'use client';

import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Drawer from '@/components/Drawer';
import IconButton from '../IconButton';
import {
  AccountIcon,
  CartIcon,
  ContactIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  PrivacyIcon,
  WhishListIcon,
} from '@/components/Icons';
import Link from 'next/link';
import { AuthContext } from '@/lib/providers/AuthProvider';
import webRoutes from '@/lib/utils/webRoutes';
import { LANGUAGES } from '@/lib/enums';
import { LanguageIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Menu() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDomReady, setIsDomReady] = useState(false);
  const { isLoggedIn, translate, changeLanguage, language, logout } =
    useContext(AuthContext);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  const MENU_ITEMS = [
    {
      title: 'home',
      icon: <HomeIcon />,
      link: webRoutes.home,
    },
    {
      title: 'cart',
      icon: <CartIcon />,
      link: webRoutes.cart,
    },
    /* {
      title: 'Wallet (My credit) 0.000 Kwd',
      icon: <span>icon</span>,
      link: '#',
      auth: true,
    },
    {
      title: 'Wallet (My points) 50 Points',
      icon: <span>icon</span>,
      link: '#',
      auth: true,
    },
    {
      title: 'Customer support (chat)',
      icon: <span>icon</span>,
      link: '#',
    }, */
    {
      title: 'orders',
      icon: <ShoppingCartIcon className="w-6 h-6 text-primary" />,
      link: webRoutes.orders,
      auth: true,
    },
    {
      title: 'wishlist',
      icon: <WhishListIcon />,
      link: webRoutes.wishlist,
    },
    {
      title: 'login',
      icon: <AccountIcon />,
      link: webRoutes.login,
      auth: false,
    },
    {
      title: 'register',
      icon: <AccountIcon />,
      link: webRoutes.register,
      auth: false,
    },
    {
      title: 'my_account',
      icon: <AccountIcon />,
      link: webRoutes.profile,
      auth: true,
    },
    {
      title: 'contact',
      icon: <ContactIcon />,
      link: webRoutes.contact,
    },
    {
      title: 'privacy_policy',
      icon: <PrivacyIcon />,
      link: webRoutes.privacy,
    },
    /* {
      title: 'logout',
      icon: <span>icon</span>,
      link: '#',
      onClick: () => {
        logout();
      },
      auth: true,
    }, */
  ];

  return (
    <div>
      <IconButton
        onClick={() => setShowDrawer(!showDrawer)}
        icon={<MenuIcon />}
        title="Opan Menu"
      />
      {isDomReady &&
        ReactDOM.createPortal(
          <Drawer isOpen={showDrawer} close={setShowDrawer}>
            <ul className="space-y-2 font-medium">
              {MENU_ITEMS.filter((item) =>
                isLoggedIn ? item.auth !== false : item.auth !== true
              ).map(({ title, icon, link }, i) => (
                <li key={i}>
                  <Link
                    href={link}
                    className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
                  >
                    {icon}
                    <span className="ml-5">{translate(title)}</span>
                  </Link>
                </li>
              ))}
              {isLoggedIn && (
                <li>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="flex items-center p-2 text-gray-900 hover:bg-primary-soft w-full"
                  >
                    <LogoutIcon />
                    <span className="ml-5">{translate('logout')}</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() =>
                    changeLanguage(
                      language === LANGUAGES.ENGLISH
                        ? LANGUAGES.ARABIC
                        : LANGUAGES.ENGLISH
                    )
                  }
                  className="flex items-center p-2 text-gray-900 hover:bg-primary-soft w-full"
                >
                  <LanguageIcon className="w-6 h-6 text-primary" />
                  <span className="ml-5">
                    {language === LANGUAGES.ENGLISH ? 'العربية' : 'English'}
                  </span>
                </button>
              </li>
            </ul>
          </Drawer>,
          document.getElementById('menu-drawer') as Element
        )}
    </div>
  );
}
