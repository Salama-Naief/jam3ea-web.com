'use client';

import { useContext, useState } from 'react';
import { ChevronRight } from '@/components/Icons';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteAccount } from '../../services';
import { useRouter } from 'next/navigation';
import webRoutes from '@/lib/utils/webRoutes';
import { AuthContext } from '@/lib/providers/AuthProvider';
import Popup from '@/components/Popup';
import Button from '@/components/Button';

export default function DeleteAccount() {
  const { sendRequest, isLoading } = useHttpClient();
  const { translate } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const deleteHandler = async () => {
    const status = await sendRequest(deleteAccount());
    if (status) {
      router.replace(webRoutes.home);
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-white flex items-center gap-4 p-4 rounded-2xl mb-3"
      >
        <TrashIcon className="w-6 h-6 text-primary" />
        <span>{translate('delete_account')}</span>
        <span className="ms-auto">
          <ChevronRight />
        </span>
      </button>
      <Popup isOpen={isOpen} close={close}>
        <div className="text-xl text-center mb-3 uppercase">
          {translate('delete_account')}
        </div>
        <div className="text-md">
          {translate('delete_account_confirmation')}
        </div>

        <div className="mt-4 flex gap-4">
          <Button
            type="button"
            loading={isLoading}
            //className="bg-primary p-3 rounded-full text-white w-full"
            onClick={deleteHandler}
          >
            {translate('delete')}
          </Button>
          <button
            type="button"
            className="p-3 text-black w-full"
            onClick={close}
          >
            {translate('cancel')}
          </button>
        </div>
      </Popup>
    </>
  );
}
