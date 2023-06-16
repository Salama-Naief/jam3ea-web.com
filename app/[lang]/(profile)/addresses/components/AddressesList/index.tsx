'use client';

import { AddressContext } from '@/lib/providers/AddressProvider';
import { useContext, useEffect, useState } from 'react';
import AddressCard from './AddressCard';
import { IAddress } from '@/module/(profile)/types';
import Popup from '@/components/Popup';
import AddAddressForm from '../AddAddress/AddAddressForm';
import useHttpClient from '@/lib/hooks/useHttpClient';

export default function AddressesList() {
  const { addresses, changeAddress, selectedAddress, city, removeAddress } =
    useContext(AddressContext);

  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState<IAddress | null>(null);

  const { sendRequest } = useHttpClient();

  return (
    <>
      {addresses.map((address: IAddress, i) => (
        <>
          {address && address.id && (
            <AddressCard
              key={address.id || i}
              address={address}
              city={city as any}
              isSelected={selectedAddress?.id == address.id}
              onSelect={() => changeAddress(address.id || '')}
              onEdit={() => {
                setIsOpen(true);
                setAddress(address);
              }}
              onDelete={() => {
                removeAddress(address.id || '', sendRequest);
              }}
            />
          )}
        </>
      ))}
      {address && (
        <Popup isOpen={isOpen} close={setIsOpen} backBtn>
          <AddAddressForm
            afterSubmit={() => setIsOpen(false)}
            address={address}
          />
        </Popup>
      )}
    </>
  );
}
