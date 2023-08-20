import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import webRoutes from '@/lib/utils/webRoutes';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function CheckoutError({ lang }: any) {
  const dict = await getDictionary(lang);
  return (
    <div className="bg-secondary pt-[6rem]">
      <div className="flex items-center justify-center flex-col">
        <XCircleIcon className="h-10 w-10 text-danger" />
        <div className="bg-white sm:w-[400px] w-full mt-12 rounded-t-3xl h-screen p-3 pt-6">
          <div className="text-lg font-bold text-center">
            {translate(dict, 'checkout_error')}
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <Link
              href={webRoutes.cart}
              className="bg-primary text-white py-2 px-4 text-sm rounded-2xl w-full block text-center"
            >
              {translate(dict, 'back_to_cart')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
