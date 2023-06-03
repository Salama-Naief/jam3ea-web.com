'use client';

import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Drawer from '@/components/Drawer';
import IconButton from '../IconButton';
import {
  AccountIcon,
  AddressIcon,
  BrandIcon,
  CartIcon,
  HomeIcon,
  MenuIcon,
  WhishListIcon,
} from '@/components/Icons';
import Link from 'next/link';
import { CookieContext } from '@/lib/providers/cookieProvider';
import webRoutes from '@/lib/utils/webRoutes';

const MENU_ITEMS = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '#',
  },
  {
    title: 'My Cart',
    icon: <CartIcon />,
    link: webRoutes.cart,
  },
  {
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
  },
  {
    title: 'Whishlist',
    icon: <WhishListIcon />,
    link: '#',
  },
  {
    title: 'Login',
    icon: <AccountIcon />,
    link: webRoutes.login,
    auth: false,
  },
  {
    title: 'Register',
    icon: <AccountIcon />,
    link: webRoutes.register,
    auth: false,
  },
  {
    title: 'My Account',
    icon: <AccountIcon />,
    link: webRoutes.profile,
    auth: true,
  },
  {
    title: 'Contact us',
    icon: <span>icon</span>,
    link: '#',
  },
  {
    title: 'Privacy policy',
    icon: <span>icon</span>,
    link: '#',
  },
  {
    title: 'Logout',
    icon: <span>icon</span>,
    link: '#',
    auth: true,
  },
];

export default function Menu() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDomReady, setIsDomReady] = useState(false);
  const { isLoggedIn } = useContext(CookieContext);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

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
              ).map(({ title, icon, link }) => (
                <li>
                  <Link
                    href={link}
                    className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
                  >
                    {icon}
                    <span className="ml-5">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>,
          document.getElementById('menu-drawer') as Element
        )}
    </div>
  );
}
