'use client';

import { AuthContext } from '@/lib/providers/AuthProvider';
import webRoutes from '@/lib/utils/webRoutes';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

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
      className="w-full"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {translate('search')}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-3 pr-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
          placeholder={translate('search')}
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
