import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Categories from './category/components/Categories';
import Feature from '@/feature/components/Feature';
import { IFeature } from '@/feature/types';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { getFeaturedProducts } from './feature/services';
import CartBottomBar from './cart/components/CartBottomBar';

export default async function Home() {
  const features = await getFeaturedProducts();
  return (
    <div id="home">
      <Navbar
        hasAddress
        hasCategories
        hasMenu
        hasSearch
        hasBackButton={false}
      />
      <div className="pt-20"></div>
      <Container>
        <img src="/assets/header.jpeg" className="mb-2" alt="" />
        <div className="flex items-center mb-2">
          <div className="bg-primary w-full h-8 rounded-bl-2xl flex items-center justify-center text-xs text-white">
            Up to 80 kw
          </div>

          <div className="bg-secondary text-white py-2 text-xs overflow-hidden rounded-tr-2xl">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: ' ticker 10s linear infinite' }}
            >
              <div className="mx-8">
                News Item 1: Lorem ipsum dolor sit amet.
              </div>
              <div className="mx-8">
                News Item 2: Consectetur adipiscing elit.
              </div>
              <div className="mx-8">
                News Item 3: Sed do eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 items-start">
          {/* @ts-expect-error Server Component */}
          <Categories limit={11} />
        </div>
        <Suspense fallback={<Loader />}>
          {features &&
            features.map((feature: IFeature) => <Feature feature={feature} />)}
        </Suspense>
      </Container>
      <CartBottomBar />
    </div>
  );
}
