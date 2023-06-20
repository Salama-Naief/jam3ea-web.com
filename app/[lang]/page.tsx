import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Categories from '@/module/category/components/Categories';
import Feature from '@/module/feature/components/Feature';
import { IFeature } from '@/module/feature/types';
import { Suspense } from 'react';
import Loader from '@/components/Loader';
import { getFeaturedProducts } from '@/module/feature/services';
import CartBottomBar from '@/module/cart/components/CartBottomBar';
import Link from 'next/link';
import webRoutes from '@/lib/utils/webRoutes';
import { Locale } from '../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import { getInventories } from './stores/services';
import NoteBar from '@/components/NoteBar';
import { cookies } from 'next/headers';
import VipCard from '@/components/VipCard';
import MartCard from '@/components/MartCard';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const features = await getFeaturedProducts();
  const inventories = await getInventories();
  const stores =
    inventories && inventories.data && inventories.data.length === 1
      ? inventories.data[0].suppliers
      : [];

  console.log('INVENTORIES: ', inventories);

  const isVIP = cookies().get('isVIP');

  return (
    <div id="home">
      <Navbar
        hasAddress
        hasCategories
        hasMenu
        hasSearch
        hasBackButton={false}
      />
      <Container>
        <div className="flex gap-2">
          {isVIP ? <MartCard lang={lang} /> : <VipCard lang={lang} />}
          <Link href={webRoutes.stores} className="w-1/2 block">
            <img
              src={
                inventories && inventories.data && inventories.data.length > 0
                  ? inventories.data[0].picture
                  : ''
              }
              className="object-cover"
              alt=""
            />
          </Link>
        </div>
        {inventories && inventories.data && inventories.data.length === 1 && (
          <div>
            <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
              {stores.map((supplier) => (
                <Link
                  key={supplier._id}
                  href={webRoutes.store(supplier._id)}
                  className="flex flex-col align-items-center justify-content-center flex-shrink-0"
                >
                  <img
                    src={supplier.logo}
                    width="80"
                    height="80"
                    alt={
                      typeof supplier.name === 'object'
                        ? supplier.name.en
                        : supplier.name
                    }
                  />
                  <div className="text-sm text-center">
                    {typeof supplier.name === 'object'
                      ? supplier.name.en
                      : supplier.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <NoteBar
          dictionary={{
            free_points: translate(dict, 'free_points'),
            free_points_description: translate(dict, 'free_points_description'),
          }}
        />
        <h2 className="font-bold text-lg">{translate(dict, 'sections')}</h2>
        <div className="grid grid-cols-4 gap-2 items-start">
          {/* @ts-expect-error Server Component */}
          <Categories
            dictionary={{ all_sections: translate(dict, 'all_sections') }}
            limit={12}
          />
        </div>
        <Suspense fallback={<Loader />}>
          {features &&
            Array.isArray(features) &&
            features.map((feature: IFeature) => (
              <Feature
                key={feature._id}
                feature={feature}
                dictionary={{
                  view_all: translate(dict, 'view_all'),
                  currency: translate(dict, 'currency'),
                }}
              />
            ))}
        </Suspense>
      </Container>
      <CartBottomBar />
    </div>
  );
}
