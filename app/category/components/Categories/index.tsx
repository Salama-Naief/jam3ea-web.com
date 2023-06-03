import CategoryCard from './CategoryCard';
import { ICategory } from '@/category/types';
import { Suspense } from 'react';
import Loader from '../../../components/Loader';
import apiHandler from '@/lib/utils/apiHandler';
import { getCategories } from '@/category/services';

interface CategoriesProps {
  limit?: number;
}

export default async function Categories({ limit }: CategoriesProps) {
  const categories = await getCategories();
  return (
    <>
      <Suspense fallback={<Loader />}>
        {categories.data.map(({ _id, name, picture }, i) => {
          if (limit && i >= limit) return;
          return (
            <CategoryCard key={_id} imageSrc={picture} link="#" title={name} />
          );
        })}
        {limit && limit < categories.count && (
          <button className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/all-sections-icon.svg"
                alt=""
              />
            </div>
            <span className="text-xs">All Sections</span>
          </button>
        )}
      </Suspense>
    </>
  );
}
