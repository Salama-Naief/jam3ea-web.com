"use client";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchFormProps {
  searchValue?: string;
  supplierId?: string;
}

export default function SearchForm({
  searchValue,
  supplierId,
}: SearchFormProps) {
  const [search, setSearch] = useState(searchValue);
  const router = useRouter();
  const { translate } = useContext(AuthContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(webRoutes.search(search, supplierId));
      }}
      className="w-full flex items-center "
    >
      {/* <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {translate("search")}
      </label> */}
      <div className="w-full bg-gray-200 rounded-lg h-[48px] overflow-hidden flex items-center">
        <input
          type="search"
          id="default-search"
          className="block flex-grow py-3 h-full bg-transparent text-sm text-gray-900  rounded-lg ring-0 border-none"
          placeholder={translate("search")}
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="px-4 h-full bg-secondary rounded-lg text-white">
          <FiSearch size={24} />
        </button>
      </div>
    </form>
  );
}
