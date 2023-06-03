import Categories from '@/category/components/Categories';
import CategoriesMenuWrapper from './categoriesMenuWrapper'

export default function CategoriesMenu() {
  return (
    <>
      <CategoriesMenuWrapper>
        {/* @ts-expect-error Server Component */}
        <Categories />
      </CategoriesMenuWrapper>
    </>
  );
}
