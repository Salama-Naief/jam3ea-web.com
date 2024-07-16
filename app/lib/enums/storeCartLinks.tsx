import mart from "../../../public/assets/storeCards/discount.png";
import store from "../../../public/assets/storeCards/mart.png";
import prime from "../../../public/assets/storeCards/prime.png";

// "jameia_mart_desc": "Discounts <b>up to 80%</b>",
// "jameia_prime_desc": "Delivery in <b>60 minutes</b>",
// "jameia_stores_desc": "Shop With Confidence",
export const storeCards = (t: any, dict: any) => [
  {
    id: 1,
    image: prime,
    link: "/prime",
    name: t(dict, "jameia_prime"),
    label: t(dict, "jameia_prime_desc"),
  },
  {
    id: 2,
    image: store,
    link: "/stores",
    name: t(dict, "jameia_stores"),
    label: t(dict, "jameia_stores_desc"),
  },
  {
    id: 3,
    image: mart,
    link: "/mart",
    name: t(dict, "jameia_mart"),
    label: t(dict, "jameia_mart_desc"),
  },
];
