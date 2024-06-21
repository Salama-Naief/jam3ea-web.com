import Loader from "@/components/Loader";
import { getCategories } from "@/module/(main)/category/services";
import webRoutes from "@/lib/utils/webRoutes";
import { categories } from "../../../../../../dummyData";
import MainSlider from "@/components/Slider";

import { getInventories } from "../../services";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SuppliersClient from "./SupplierClient";

export default async function Suppliers() {
  const inventories = await getInventories();
  const stores =
    inventories && inventories.data && inventories.data.length === 1
      ? inventories.data[0]
      : undefined;
  console.log("inventories", inventories);
  return <SuppliersClient inventories={stores} />;
}
