import Container from '@/components/Container';
import { AccountIcon, ChevronRight } from '@/components/Icons';
import Navbar from '@/components/Navbar';
import apiHandler from '@/lib/utils/apiHandler';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';
import { IUser } from '../types';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import { LockClosedIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import DeleteAccount from './components/DeleteAccount';

export default async function Account({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const user: IUser = await apiHandler('/profile');
  const dict = await getDictionary(lang);
  return (
    <div>
      <Navbar title={translate(dict, 'my_account')} />
      <Container>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-28 h-28 rounded-full mx-auto mb-2"
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt=""
          />
          <div className="text-center mb-4">
            <div className="text-xl font-bold text-secondary">
              {user.fullname}
            </div>
            <div className="text-xs text-gray-300">{user.email}</div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <Link
            href={webRoutes.updateProfile}
            className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
          >
            <AccountIcon />
            <span>{translate(dict, 'update_profile')}</span>
            <span className="ms-auto">
              <ChevronRight />
            </span>
          </Link>
          <Link
            href={webRoutes.updatePassword}
            className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
          >
            <LockClosedIcon className="w-6 h-6 text-primary" />
            <span>{translate(dict, 'update_password')}</span>
            <span className="ms-auto">
              <ChevronRight />
            </span>
          </Link>
          <Link
            href={webRoutes.orders}
            className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
          >
            <ShoppingBagIcon className="w-6 h-6 text-primary" />
            <span>{translate(dict, 'orders')}</span>
            <span className="ms-auto">
              <ChevronRight />
            </span>
          </Link>
          <DeleteAccount />
        </div>
      </Container>
    </div>
  );
}
