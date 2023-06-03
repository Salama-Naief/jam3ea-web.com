import Menu from './Menu';
import CategoriesMenu from './CategoriesMenu';
import { BackIcon, SearchIcon } from '../Icons';
import IconButton from './IconButton';
import AddressSelector from './AddressSelector';
import webRoutes from '@/lib/utils/webRoutes';
import { AddressProvider } from '@/lib/providers/AddressProvider';
import { CookieProvider } from '@/lib/providers/cookieProvider';

interface NavbarProps {
  hasMenu?: Boolean;
  hasCategories?: Boolean;
  hasSearch?: Boolean;
  hasAddress?: Boolean;
  hasBackButton?: Boolean;
  title?: string;
}

export default function Navbar({
  hasMenu = false,
  hasCategories = false,
  hasSearch = false,
  hasAddress = false,
  hasBackButton = true,
  title,
}: NavbarProps) {
  return (
    <nav className="app-container border-gray-200 px-0 bg-white mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${
          hasBackButton ? 'px-1 py-2' : 'p-4'
        }`}
      >
        <div className="flex gap-6">
          {hasBackButton && (
            <IconButton icon={<BackIcon />} href={webRoutes.home} />
          )}
          {hasMenu && (
            <CookieProvider>
              <Menu />
            </CookieProvider>
          )}
          {hasAddress && (
            <AddressProvider>
              <AddressSelector />
            </AddressProvider>
          )}
        </div>

        <div className="flex gap-2">
          {hasSearch && (
            <button
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              data-modal-target="searchModal"
              data-modal-toggle="searchModal"
              type="button"
            >
              <SearchIcon />
            </button>
          )}
          {hasCategories && <CategoriesMenu />}
        </div>
      </div>
    </nav>
  );
}
