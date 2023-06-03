'use client';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext } from 'react';
import webRoutes from '@/lib/utils/webRoutes';
import { AddressContext } from '@/lib/providers/AddressProvider';

export default function AddressSelector() {
  const { selectedAddress, city } = useContext(AddressContext);
  return (
    <Link href={webRoutes.addresses}>
      <div className="text-gray-500 text-sm">Delivering To</div>
      <div className="text-sm">
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className="text-primary"
        />{' '}
        {selectedAddress && (selectedAddress.name || selectedAddress.id)} (
        {city && (typeof city.name == 'object' ? city.name.en : city.name)})
      </div>
    </Link>
  );
}
