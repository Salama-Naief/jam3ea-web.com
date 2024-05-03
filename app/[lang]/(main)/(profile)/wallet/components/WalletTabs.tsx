'use client';

import { useContext } from 'react';
import { Disclosure, Tab } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { IWalletHistory } from '../../types';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { LANGUAGES } from '@/lib/enums';
import SendToWalletForm from './SendToWalletForm';

interface WalletTabsProps {
  history: IWalletHistory[];
}

export default function WalletTabs({ history }: WalletTabsProps) {
  const { translate, language } = useContext(AuthContext);
  const getCustomDate = (dateStr: string): { day: number; month: string } => {
    const date = new Date(dateStr);
    const dayOfMonth = date.getDate();
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const startDay = startOfMonth.toLocaleString(language, {
      month: language === LANGUAGES.ENGLISH ? 'short' : 'long',
    });

    return { day: dayOfMonth, month: startDay };
  };

  const isWithdraw = (h: IWalletHistory) => {
    return parseFloat(h.old_wallet) > parseFloat(h.new_wallet);
  };

  const isDeposit = (h: IWalletHistory) => {
    return parseFloat(h.new_wallet) > parseFloat(h.old_wallet);
  };

  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2">
        <Tab
          className={({ selected }) =>
            selected
              ? ' border-b-2 px-4 py-2 border-primary text-primary'
              : 'text-black px-4 py-2'
          }
        >
          {translate('history')}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? ' border-b-2 px-4 py-2 border-primary text-primary'
              : 'text-black px-4 py-2'
          }
        >
          {translate('deposit')}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? ' border-b-2 px-4 py-2 border-primary text-primary'
              : 'text-black px-4 py-2'
          }
        >
          {translate('withdraw')}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={'py-5'}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg p-3">
                  <span>{translate('send_credit')}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-2 pb-2 text-sm text-gray-500">
                  <SendToWalletForm />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {history.map((h) => (
            <div key={h._id} className="flex items-center border gap-4 mb-3">
              <div className="flex flex-col items-center justify-center border-r w-16 h-16">
                <div className="text-sm">{getCustomDate(h.created).day}</div>
                <div className="text-xs font-bold">
                  {getCustomDate(h.created).month}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-bold">{h.notes}</div>
                <div className="text-xs text-gray-400">
                  {isDeposit(h) ? translate('deposit') : translate('withdraw')}
                </div>
              </div>
              <div className="ms-auto text-base font-bold p-3">
                {isWithdraw(h) ? h.old_wallet : h.new_wallet}
              </div>
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel className={'py-5'}>
          {history
            .filter((h) => isDeposit(h))
            .map((h) => (
              <div key={h._id} className="flex items-center border gap-4 mb-3">
                <div className="flex flex-col items-center justify-center border-r w-16 h-16">
                  <div className="text-sm">{getCustomDate(h.created).day}</div>
                  <div className="text-xs font-bold">
                    {getCustomDate(h.created).month}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold">{h.notes}</div>
                  <div className="text-xs text-gray-400">
                    {translate('deposit')}
                  </div>
                </div>
                <div className="ms-auto text-base font-bold p-3">
                  {isWithdraw(h) ? h.old_wallet : h.new_wallet}
                </div>
              </div>
            ))}
        </Tab.Panel>
        <Tab.Panel className={'py-5'}>
          {history
            .filter((h) => isWithdraw(h))
            .map((h) => (
              <div key={h._id} className="flex items-center border gap-4 mb-3">
                <div className="flex flex-col items-center justify-center border-r w-16 h-16">
                  <div className="text-sm">{getCustomDate(h.created).day}</div>
                  <div className="text-xs font-bold">
                    {getCustomDate(h.created).month}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold">{h.notes}</div>
                  <div className="text-xs text-gray-400">
                    {translate('withdraw')}
                  </div>
                </div>
                <div className="ms-auto text-base font-bold p-3">
                  {isWithdraw(h) ? h.old_wallet : h.new_wallet}
                </div>
              </div>
            ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
