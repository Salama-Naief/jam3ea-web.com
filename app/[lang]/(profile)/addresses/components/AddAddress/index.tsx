'use client';

import Popup from '@/components/Popup';
import { useContext, useState } from 'react';
import AddAddressForm from './AddAddressForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '@/lib/providers/AuthProvider';

export default function AddAddress() {
  const [isOpen, setIsOpen] = useState(false);
  const { translate } = useContext(AuthContext);
  return (
    <>
      <button
        className="bg-white text-black flex gap-2 items-center justify-center w-full p-3 rounded-2xl mb-3 font-medium"
        onClick={() => setIsOpen(true)}
      >
        {translate('add_new_address')}{' '}
        <FontAwesomeIcon icon={faPlus} className="text-primary" />
      </button>
      <Popup isOpen={isOpen} close={setIsOpen} backBtn>
        <AddAddressForm afterSubmit={() => setIsOpen(false)} />
      </Popup>
    </>
  );
}
