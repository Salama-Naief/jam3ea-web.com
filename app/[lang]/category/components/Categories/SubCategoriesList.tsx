import Link from 'next/link';
import { getCategoryById } from '../../services';
import webRoutes from '@/lib/utils/webRoutes';
import { ICategory } from '../../types';

interface SubCategoriesListProps {
  id: string;
  subId: string;
  category: ICategory;
}

export default async function SubCategoriesList({
  id,
  subId,
  category
}: SubCategoriesListProps) {
  return (
    <div className="border-b border-gray-200 flex">
      {category.children.map(({ _id, name }) => (
        <Link
          key={_id}
          href={webRoutes.subcategory(id, _id)}
          className={`border-b-2 px-4 py-2 ${
            subId === _id ? 'border-primary text-primary' : ''
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
