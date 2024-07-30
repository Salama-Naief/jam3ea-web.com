import { useMemo } from "react";

export const Navlinks = (t: any, isVip: string | undefined) => {
  const links = useMemo(() => {
    const linksArr = [
      {
        id: 1,
        label: t("all_categories"),
        link: "/category",
        withSubEments: true,
      },
      { id: 2, label: t("jameia_mart"), link: "/mart", withSubEments: false },
      { id: 3, label: t("jameia_prime"), link: "/prime", withSubEments: false },
      {
        id: 4,
        label: t("jameia_stores"),
        link: "/stores",
        withSubEments: false,
      },
    ];
    console.log("vip liks", isVip);
    return isVip && isVip === "true"
      ? linksArr.filter((l) => l.link !== "/prime")
      : linksArr.filter((l) => l.link !== "/mart");
  }, [isVip]);

  return links;
};
