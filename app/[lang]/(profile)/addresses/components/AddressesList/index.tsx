'use client';

import { AddressContext } from '@/lib/providers/AddressProvider';
import { useCallback, useContext, useEffect, useState } from 'react';
import AddressCard from './AddressCard';
import { IAddress } from '@/module/(profile)/types';
import Popup from '@/components/Popup';
import AddAddressForm from '../AddAddress/AddAddressForm';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { getCities } from '@/module/city/services';
import { ICity } from '@/module/city/types';

export default function AddressesList() {
  const { addresses, changeAddress, selectedAddress, removeAddress } =
    useContext(AddressContext);

  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState<IAddress | null>(null);
  const [cities, setCities] = useState<ICity[]>([]);

  const { sendRequest } = useHttpClient();

  const fetchCities = useCallback(async () => {
    const resData = await getCities();
    console.log(resData);
    if (
      resData.success &&
      resData.results?.data &&
      resData.results?.data.length === 1 &&
      resData.results?.data[0].children &&
      resData.results?.data[0].children.length > 0
    )
      setCities(resData.results?.data[0].children);
  }, []);

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      {addresses.map((address: IAddress, i) => (
        <>
          {address && address.id && (
            <AddressCard
              key={address.id || i}
              address={address}
              city={
                address.city ||
                (cities.find((c) => c._id == address.city_id) as any)
              }
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
