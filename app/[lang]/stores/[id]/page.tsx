import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { Locale } from '../../../../i18n-config';
import { getSupplierById } from '../services';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import Categories from '@/module/category/components/Categories';
import { getFeaturedProducts } from '@/module/feature/services';
import { Suspense } from 'react';
import { IFeature } from '@/module/feature/types';
import Feature from '@/module/feature/components/Feature';

export default async function StorePage({
  params,
}: {
  params: { lang: Locale; id: string };
}) {
  const dict = await getDictionary(params.lang);
  const supplier = await getSupplierById(params.id);
  const features = await getFeaturedProducts(params.id);

  return (
    <div>
      <Navbar
        title={
          typeof supplier.name === 'object' ? supplier.name.en : supplier.name
        }
        hasSearch
        supplierId={params.id}
      />
      <Container>
        <h2 className="font-bold text-lg">{translate(dict, 'sections')}</h2>
        <div className="grid grid-cols-4 gap-2 items-start">
          {/* @ts-expect-error Server Component */}
          <Categories
            dictionary={{ all_sections: translate(dict, 'all_sections') }}
            supplierId={params.id}
          />
        </div>
        {features &&
          features.map((feature: IFeature) => (
            <Feature
              key={feature._id}
              feature={feature}
              supplierId={params.id}
              dictionary={{ view_all: translate(dict, 'view_all') }}
            />
          ))}
      </Container>
    </div>
  );
}
