'use client';

import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Drawer from '@/components/Drawer';
import IconButton from '../IconButton';
import {
  AccountIcon,
  CartIcon,
  HomeIcon,
  MenuIcon,
  WhishListIcon,
} from '@/components/Icons';
import Link from 'next/link';
import { AuthContext } from '@/lib/providers/AuthProvider';
import webRoutes from '@/lib/utils/webRoutes';
import { LANGUAGES } from '@/lib/enums';

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
      link: '#',
    },
    {
      title: 'My Cart',
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
    },
    {
      title: 'My orders',
      icon: <span>icon</span>,
      link: '#',
      auth: true,
    }, */
    {
      title: 'whishlist',
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
    /* {
      title: 'Contact us',
      icon: <span>icon</span>,
      link: '#',
    },
    {
      title: 'Privacy policy',
      icon: <span>icon</span>,
      link: '#',
    }, */
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
              <li>
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="flex items-center p-2 text-gray-900 hover:bg-primary-soft w-full"
                >
                  icon
                  <span className="ml-5">{translate('logout')}</span>
                </button>
              </li>
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
                  icon
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
