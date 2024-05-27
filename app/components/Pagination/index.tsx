"use client";
import { Pagination } from "@mantine/core";
import url from "url";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number | null;
  total: number;
  path?: string;
}
function PaginationComp({ currentPage, total, path }: Props) {
  const { push, replace } = useRouter();
  const searchParams = useSearchParams();
  const handleChange = (v: number) => {
    if (!path) {
      replace(`/category?id=${searchParams.get("id")}&skip=${v}`);
    } else {
      replace(`${path}&skip=${v}`);
    }
  };
  console.log("total", total);

  return (
    <div className="Pagination">
      <Pagination
        color="#F77D0F"
        value={Number(currentPage) || 1}
        onChange={(v) => handleChange(v)}
        total={total}
        classNames={{ control: "bg-red-500" }}
      />
    </div>
  );
}

export default PaginationComp;
