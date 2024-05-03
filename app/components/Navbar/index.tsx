import Menu from "./Menu";
import CategoriesMenu from "./CategoriesMenu";
import { SearchIcon } from "../Icons";
import AddressSelector from "./AddressSelector";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import SearchForm from "./searchForm";
import BackButton from "./BackButton";

interface NavbarProps {
  hasMenu?: Boolean;
  hasCategories?: Boolean;
  hasSearch?: Boolean;
  hasAddress?: Boolean;
  hasBackButton?: Boolean;
  title?: string | JSX.Element;
  expandSearch?: boolean;
  searchValue?: string;
  supplierId?: string;
  className?: string;
}

export default function Navbar({
  hasMenu = false,
  hasCategories = false,
  hasSearch = false,
  hasAddress = false,
  hasBackButton = true,
  title,
  expandSearch = false,
  searchValue = "",
  supplierId,
  className = "",
}: NavbarProps) {
  return (
    <>
      <nav>
        <div
          className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${
            hasBackButton ? "px-1 py-2" : "p-4"
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
              hasSearch && expandSearch ? "search-expanded" : ""
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
                    href={webRoutes.search(undefined, supplierId)}
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
