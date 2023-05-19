import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

interface NavbarProps {
  hasMenu?: Boolean;
  hasCategories?: Boolean;
  hasSearch?: Boolean;
  hasAddress?: Boolean;
  hasBackButton?: Boolean;
  title?: String;
}

export default function Navbar({
  hasMenu = false,
  hasCategories,
  hasSearch,
  hasAddress,
  hasBackButton = true,
  title,
}: NavbarProps) {
  return (
    <nav className="app-container border-gray-200 px-0 bg-white mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-6">
          <Menu />
          <button>
            <div className="text-gray-500 text-sm">Delivering To</div>
            <div className="text-sm ml-8">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className="text-primary"
              /> imadys (Jahra)
            </div>
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            data-modal-target="searchModal"
            data-modal-toggle="searchModal"
            type="button"
          >
            <img src="/assets/search-icon.svg" alt="" />
          </button>
          <button
            data-drawer-target="categories-navigation"
            data-drawer-show="categories-navigation"
            aria-controls="categories-navigation"
            data-drawer-placement="right"
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <img src="/assets/categories-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
