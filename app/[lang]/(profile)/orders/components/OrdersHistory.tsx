'use client';

import { useContext } from 'react';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { Tab } from '@headlessui/react';
import {
  ArrowUturnUpIcon,
  ReceiptRefundIcon,
} from '@heroicons/react/24/outline';
import { IOrder } from '../../types';
import { getPriceWithCurrency } from '@/module/product/utils';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';

interface OrdersHistoryProps {
  orders: IOrder[];
}

export default function OrdersHistory({ orders }: OrdersHistoryProps) {
  const { translate } = useContext(AuthContext);
  const ORDER_STATUSES = [
    {
      number: -1,
      text: translate('all'),
    },
    {
      number: 1,
      text: translate('pending'),
    },
    {
      number: 4,
      text: translate('delivered'),
    },
    {
      number: 5,
      text: translate('canceled'),
    },
  ];
  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2">
        {ORDER_STATUSES.map((s) => (
          <Tab
            key={s.number}
            className={({ selected }) =>
              selected
                ? ' border-b-2 px-4 py-2 border-primary text-primary'
                : 'text-black px-4 py-2'
            }
          >
            {s.text}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {ORDER_STATUSES.map((s, i) => (
          <Tab.Panel key={i} className={'py-5'}>
            <div className="flex flex-col gap-4">
              {orders
                .filter(
                  (order) =>
                    s.number === -1 ||
                    order.status.toLowerCase() === s.text.toLowerCase() ||
                    order.status_number === s.number
                )
                .map((order) => (
                  <div
                    key={order._id}
                    className="bg-white rounded-2xl w-full flex justify-between p-4"
                  >
                    <div className="flex flex-col">
                      <div
                        className={
                          ([4] as number[]).includes(order.status_number) ||
                          order.status.toLowerCase() === 'delivered'
                            ? 'text-success'
                            : 'text-danger'
                        }
                      >
                        {order.status}
                      </div>
                      <div className="font-bold">
                        {getPriceWithCurrency(
                          order.total,
                          translate('currency')
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={webRoutes.orderDetails(order._id)}
                        className="flex text-gray items-center gap-2"
                      >
                        <ReceiptRefundIcon className="text-primary w-4 h-4" />
                        {translate('receipt')}
                      </Link>
                      <button className="flex text-gray items-center gap-2">
                        <ArrowUturnUpIcon className="text-primary w-4 h-4" />
                        {translate('repeat_order')}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
