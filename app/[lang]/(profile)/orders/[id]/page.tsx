import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { Locale } from '../../../../../i18n-config';
import apiHandler from '@/lib/utils/apiHandler';
import { IOrder } from '../../types';
import {
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import { getPriceWithCurrency } from '@/module/product/utils';
import Link from 'next/link';
import webRoutes from '@/lib/utils/webRoutes';
import RepeatOrder from '../components/RepeatOrder';

export default async function MyOrders({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  const order: IOrder = await apiHandler('/order/' + id);

  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar title={translate(dict, 'order_details')} />
      <Container>
        <div>
          <div className="mb-6">
            <div className="border rounded-lg p-2 flex flex-col justify-start gap-2 mb-3">
              <div className="text-primary text-end">{order.status}</div>
              <div className="flex items-center gap-2">
                <UserCircleIcon className="w-6 h-6 text-black" />
                <div className="text-gray font-semibold">
                  {order.user_data.fullname}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneArrowDownLeftIcon className="w-6 h-6 text-black" />
                <div className="text-gray font-semibold">
                  {order.user_data.mobile}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-black" />
                <div className="text-gray font-semibold">
                  {translate(dict, 'delivery_address')}:{' '}
                  {order.user_data.city_name}, {translate(dict, 'block')}{' '}
                  {order.user_data.address.widget}, {translate(dict, 'street')}{' '}
                  {order.user_data.address.street}, {translate(dict, 'house')}{' '}
                  {order.user_data.address.house}
                </div>
              </div>
            </div>
            <Link
              href={webRoutes.trackOrder(id)}
              className="rounded-full bg-secondary text-white p-2 w-full block text-center"
            >
              {translate(dict, 'track_order')}
            </Link>
          </div>
          {Object.values(order.products)
            .flat()
            .map((p) => (
              <div key={p.sku} className="flex items-center border-b ">
                <img src={p.picture} width="80" />

                <div>
                  <div className="flex gap-1 items-center justify-between">
                    <div>{p.name}</div>
                    <div>
                      {getPriceWithCurrency(
                        p.price,
                        translate(dict, 'currency')
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-primary">
                      {translate(dict, 'quantity')}:
                    </span>
                    {p.quantity}
                  </div>
                </div>
              </div>
            ))}
          <div className="py-2">
            <div className="text-md font-medium mb-2">
              {order.payment_method.name}
            </div>
            <div className="flex flex-col">
              {/* <div className="flex justify-between">
                <div className="text-sm font-medium">
                  {translate(dict, 'delivery_date')}
                </div>
                <div className="text-sm font-medium">
                  {order.delivery_time}:
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="text-sm font-medium">
                  {order.delivery_time}:
                </div>
                <div className="text-sm font-medium">{order.delivery_time}</div>
              </div> */}
              <div className="flex justify-between">
                <div className="text-sm font-medium">
                  {translate(dict, 'subtotal')}:
                </div>
                <div className="text-sm font-medium">
                  {getPriceWithCurrency(
                    order.subtotal,
                    translate(dict, 'currency')
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium">
                  {translate(dict, 'shipping_cost')}:
                </div>
                <div className="text-sm font-medium">
                  {getPriceWithCurrency(
                    order.shipping_cost,
                    translate(dict, 'currency')
                  )}
                </div>
              </div>
              {order.coupon &&
                parseFloat(order.coupon.value.toString()) > 0 && (
                  <div className="flex justify-between pb-2">
                    <div className="text-sm font-medium">
                      {translate(dict, 'discount')}:
                    </div>
                    <div className="text-sm font-medium">
                      {getPriceWithCurrency(
                        order.coupon.value,
                        translate(dict, 'currency')
                      )}
                    </div>
                  </div>
                )}
              <div className="border-t flex justify-between py-2">
                <div className="text-sm font-medium">
                  {translate(dict, 'total')}:
                </div>
                <div className="text-sm font-medium">
                  {getPriceWithCurrency(
                    order.total,
                    translate(dict, 'currency')
                  )}
                </div>
              </div>
            </div>
          </div>
          <Link
            href={webRoutes.trackOrder(id)}
            className="rounded-full bg-secondary text-white p-2 w-full block text-center mb-2"
          >
            {translate(dict, 'track_order')}
          </Link>
          <RepeatOrder
            id={id}
            dictionary={{ repeat_order: translate(dict, 'repeat_order') }}
          />
          <Link
            href={webRoutes.home}
            className="rounded-full bg-primary text-white p-2 w-full block text-center"
          >
            {translate(dict, 'back_to_home')}
          </Link>
        </div>
      </Container>
    </div>
  );
}
