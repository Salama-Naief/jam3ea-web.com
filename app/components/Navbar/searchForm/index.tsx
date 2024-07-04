"use client";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import webRoutes from "@/lib/utils/webRoutes";
import { IProduct } from "@/module/(main)/product/types";
import { searchProduct } from "@/module/(main)/search/services";
import { Loader, ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
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
  const { sendRequest, results, isLoading, errors } = useHttpClient<any>();
  console.log("ha");
  const handleSearch = async () => {
    const products = await sendRequest(searchProduct(search));
  };
  console.log("resultsresults", results);
  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   router.push(webRoutes.search(search, supplierId));
      // }}
      className="w-full flex items-center relative"
    >
      {/* <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {translate("search")}
      </label> */}
      <div className="w-full bg-gray-200 rounded-lg h-[40px] overflow-hidden flex items-center">
        <input
          type="search"
          id="default-search"
          className="block flex-grow py-3 h-full bg-transparent text-sm text-gray-900  rounded-lg ring-0 border-none"
          placeholder={translate("search")}
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch();
          }}
        />
        <button className="px-3 h-full bg-secondary rounded-lg text-white">
          <FiSearch size={22} />
        </button>
        {results && search && (
          <div className=" absolute top-12 z-10 end-0 h-96 w-full bg-white shadow-md rounded-lg ">
            <ScrollArea className="h-96 ">
              {isLoading ? (
                <div className="w-full h-48 flex items-center justify-center">
                  <Loader size={"sm"} color="orange" />
                </div>
              ) : (
                results.data.map((product: IProduct) => (
                  <Link
                    key={product.sku}
                    href={`/product/${product.sku}`}
                    className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
                    onClick={() => setSearch("")}
                  >
                    <div className="">
                      <Image
                        src={product.picture}
                        width={70}
                        height={70}
                        alt={product.name}
                        className=" border rounded-full "
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className=" font-semibold md:font-bold my-1">
                        {product.name}
                      </h6>
                      <div className="md:font-semibold">
                        <span>{translate("price")} : </span>
                        <span className="font-semibold">
                          {product.price} {translate("currency")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </ScrollArea>
          </div>
        )}
      </div>
    </form>
  );
}
