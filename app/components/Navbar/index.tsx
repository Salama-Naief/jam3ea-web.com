import Menu from './Menu';
import CategoriesMenu from './CategoriesMenu';
import { BackIcon, SearchIcon } from '../Icons';
import IconButton from './IconButton';
import AddressSelector from './AddressSelector';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';
import SearchForm from './searchForm';
import BackButton from './BackButton';

interface NavbarProps {
  hasMenu?: Boolean;
  hasCategories?: Boolean;
  hasSearch?: Boolean;
  hasAddress?: Boolean;
  hasBackButton?: Boolean;
  title?: string;
  expandSearch?: boolean;
  searchValue?: string;
  supplierId?: string;
}

export default function Navbar({
  hasMenu = false,
  hasCategories = false,
  hasSearch = false,
  hasAddress = false,
  hasBackButton = true,
  title,
  expandSearch = false,
  searchValue = '',
  supplierId,
}: NavbarProps) {
  return (
    <>
      <nav className="app-container border-gray-200 px-0 bg-white mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${
            hasBackButton ? 'px-1 py-2' : 'p-4'
          }`}
        >
          <div className="flex gap-6">
            {hasBackButton && <BackButton />}
            {hasMenu && <Menu />}
            {hasAddress && <AddressSelector />}
          </div>
          {title && (
            <div className="text-lg font-semibold line-clamp-1">{title}</div>
          )}
          <div
            className={`flex gap-2 ${
              hasSearch && expandSearch ? 'search-expanded' : ''
            }`}
          >
            {hasSearch && (
              <>
                {expandSearch ? (
                  <SearchForm
                    searchValue={searchValue}
                    supplierId={supplierId}
                  />
                ) : (
                  <Link
                    href={webRoutes.search()}
                    className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  >
                    <SearchIcon />
                  </Link>
                )}
              </>
            )}
            {hasCategories && <CategoriesMenu />}
          </div>
        </div>
      </nav>
      <div className="pt-20"></div>
    </>
  );
}
