'use client';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import webRoutes from '@/lib/utils/webRoutes';
import { AddressContext } from '@/lib/providers/AddressProvider';
import { AuthContext } from '@/lib/providers/AuthProvider';

export default function AddressSelector() {
  const { selectedAddress, city } = useContext(AddressContext);
  const { translate, isLoggedIn, user, language } = useContext(AuthContext);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return null;

  return (
    <Link href={webRoutes.addresses}>
      <div className="text-gray-500 text-sm">{translate('delivering_to')}</div>
      <div className="text-sm">
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className="text-primary"
        />{' '}
        {isLoggedIn && user && user.fullname
          ? user.fullname
          : selectedAddress &&
            (selectedAddress.name || selectedAddress.id)}{' '}
        (
        {city &&
          (typeof city.name == 'object'
            ? (city.name as any)[language]
            : city.name)}
        )
      </div>
    </Link>
  );
}
