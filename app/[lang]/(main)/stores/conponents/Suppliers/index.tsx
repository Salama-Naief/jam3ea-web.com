import { getInventories } from "../../services";
import InvetoryClient from "./InventoryClient";

export default async function Suppliers() {
  const inventories = await getInventories();
  const stores = inventories ? inventories.data : [];
  return <InvetoryClient supplier={stores} />;
}
