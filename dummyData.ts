import product1 from "./public/assets/products/Rectangle 16.png";
import product2 from "./public/assets/products/Rectangle 17.png";
import product3 from "./public/assets/products/Rectangle 18-1.png";
import product4 from "./public/assets/products/Rectangle 18.png";
import product5 from "./public/assets/products/Rectangle 19.png";
import product6 from "./public/assets/products/Rectangle 20.png";
import product7 from "./public/assets/products/Rectangle 21.png";
import product8 from "./public/assets/products/Rectangle 22.png";

// catergories
import BabyCare from "./public/assets/categroies/Baby Care.png";
import Bakerycake from "./public/assets/categroies/Bakery & cake.png";
import CampingTrips from "./public/assets/categroies/Camping & Trips.png";
import ChocolateSweets from "./public/assets/categroies/Chocolate & Sweets.png";
import ClothesAccessories from "./public/assets/categroies/Clothes &  Accessories.png";
import CookingSupplies from "./public/assets/categroies/Cooking Supplies, Canned Food.png";
import DairyEggs from "./public/assets/categroies/Dairy & Eggs.png";
import Detergents from "./public/assets/categroies/Detergents.png";
import Electronics from "./public/assets/categroies/Electronics.png";
import FreshMeats from "./public/assets/categroies/Fresh Meats.png";
import FrozenFoods from "./public/assets/categroies/Frozen Foods.png";
import Grocery from "./public/assets/categroies/Grocery.png";
import HealthyLifeStyle from "./public/assets/categroies/Healthy Life  Style.png";
import Householdsupplies from "./public/assets/categroies/Household supplies.png";
import Makeup from "./public/assets/categroies/Make-up.png";
import Mill from "./public/assets/categroies/Mill.png";
import Perfumescostprice from "./public/assets/categroies/Perfumes at cost  price.png";
import PersonalCare from "./public/assets/categroies/Personal Care .png";
import SnacksNuts from "./public/assets/categroies/Snacks & Nuts.png";
import Thelibrary from "./public/assets/categroies/The library .png";
import Toys from "./public/assets/categroies/Toys.png";
import VegetablesFruits from "./public/assets/categroies/Vegetables &  Fruits.png";
import drinks from "./public/assets/categroies/drinks.png";
import { m } from "framer-motion";

export const products = [
  {
    id: 1,
    name: "item1",
    images: [product1, product1],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product1,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 2,
    name: "item2",
    images: [product2, product2],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product2,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 3,
    name: "item3",
    images: [product3, product3],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product3,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: true,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 4,
    name: "item4",
    images: [product4, product4],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product4,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: true,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 5,
    name: "item5",
    images: [product5, product5],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product5,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 6,
    name: "item6",
    images: [product6, product6],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product6,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 7,
    name: "item7",
    images: [product7, product7],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product7,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
  {
    id: 8,
    name: "item8",
    images: [product8, product5, product6, product7, product1],
    sku: "",
    price: "0.2",
    oldPrice: "0.3",
    picture: product8,
    isAvailable: false,
    cartStatus: {
      is_exists: true,
      quantity: 2,
    },
    isInWhishlist: false,
    maxQuantityCart: 20,
    hasVariants: false,
    currency: "KWD",
  },
];
export const categories = [
  {
    id: 1,
    name: "Baby Care",
    image: BabyCare,
    children: [],
  },
  {
    id: 2,
    name: "Bakery & cake",
    image: Bakerycake,
    children: [],
  },
  {
    id: 3,
    name: "Camping & Trips",
    image: CampingTrips,
    children: [],
  },
  {
    id: 4,
    name: "Chocolate & Sweets",
    image: ChocolateSweets,
    children: [],
  },
  {
    id: 5,
    name: "Clothes &  Accessories",
    image: ClothesAccessories,
    children: [],
  },
  {
    id: 6,
    name: "Cooking Supplies, Canned Food",
    image: CookingSupplies,
    children: [],
  },
  {
    id: 7,
    name: "Dairy & Eggs",
    image: DairyEggs,
    children: [],
  },
  {
    id: 8,
    name: "Detergents",
    image: Detergents,
    children: [],
  },
  {
    id: 9,
    name: "Electronics",
    image: Electronics,
    children: [],
  },
  {
    id: 10,
    name: "Fresh Meats",
    image: FreshMeats,
    children: [],
  },
  {
    id: 11,
    name: "Frozen Foods",
    image: FrozenFoods,
    children: [],
  },
  {
    id: 12,
    name: "Grocery",
    image: Grocery,
    children: [],
  },
  {
    id: 13,
    name: "Healthy Life  Style",
    image: HealthyLifeStyle,
    children: [],
  },
  {
    id: 14,
    name: "Make-up",
    image: Makeup,
    children: [],
  },
  {
    id: 15,
    name: "Mill",
    image: Mill,
    children: [],
  },
];

import mart from "./public/assets/storeCards/discount.png";
import store from "./public/assets/storeCards/mart.png";
import prime from "./public/assets/storeCards/prime.png";
export const storeCards = [
  {
    id: 1,
    image: prime,
    link: "/prime",
    name: "Jameia Prime",
    label: "Delivery in <b>60 minutes</b>",
  },
  {
    id: 2,
    image: store,
    link: "/stores",
    name: "Jameia Stores",
    label: "Shop With Confidence",
  },
  {
    id: 3,
    image: mart,
    link: "/mart",
    name: "Jameia Mart",
    label: "Discounts <b>up to 80%</b>",
  },
];

import subCateImg1 from "./public/assets/categroies/sub/Ellipse 32.png";
import subCateImg2 from "./public/assets/categroies/sub/Ellipse 32-2.png";
import subCateImg3 from "./public/assets/categroies/sub/Ellipse 32-3.png";
import subCateImg4 from "./public/assets/categroies/sub/Ellipse 32-1.png";
export const subCategories = [
  {
    id: 1,
    name: "fruit&veg",
    image: VegetablesFruits,
    sub: [
      {
        id: 1,
        name: "Fresh Fruit",
        image: subCateImg1,
      },
      {
        id: 2,
        name: "Vegetables",
        image: subCateImg2,
      },
      {
        id: 3,
        name: "Herbs & Leafy Greens",
        image: subCateImg3,
      },
      {
        id: 4,
        name: "Dates & Dried Fruit",
        image: subCateImg4,
      },
    ],
  },
  {
    id: 2,
    name: "fruit&veg",
    image: VegetablesFruits,
    sub: [
      {
        id: 1,
        name: "Fresh Fruit",
        image: subCateImg1,
      },
      {
        id: 2,
        name: "Vegetables",
        image: subCateImg2,
      },
      {
        id: 3,
        name: "Herbs & Leafy Greens",
        image: subCateImg3,
      },
      {
        id: 4,
        name: "Dates & Dried Fruit",
        image: subCateImg4,
      },
    ],
  },
  {
    id: 3,
    name: "fruit&veg",
    image: VegetablesFruits,
    sub: [
      {
        id: 1,
        name: "Fresh Fruit",
        image: subCateImg1,
      },
      {
        id: 2,
        name: "Vegetables",
        image: subCateImg2,
      },
      {
        id: 3,
        name: "Herbs & Leafy Greens",
        image: subCateImg3,
      },
      {
        id: 4,
        name: "Dates & Dried Fruit",
        image: subCateImg4,
      },
    ],
  },
  {
    id: 4,
    name: "fruit&veg",
    image: VegetablesFruits,
    sub: [
      {
        id: 1,
        name: "Fresh Fruit",
        image: subCateImg1,
      },
      {
        id: 2,
        name: "Vegetables",
        image: subCateImg2,
      },
      {
        id: 3,
        name: "Herbs & Leafy Greens",
        image: subCateImg3,
      },
      {
        id: 4,
        name: "Dates & Dried Fruit",
        image: subCateImg4,
      },
    ],
  },
];

////// cities
export const cities = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    total: 1,
    count: 1,
    per_page: 1,
    current_page: 1,
    data: [
      {
        _id: "6283647eff59b04a9c819bde",
        store_id: "5d3827c683545d0366ac4285",
        name: "جميع المحافظات",
        children: [
          {
            _id: "5d6a9cfcfb419e4001ca3a02",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "أبو الحصانية",
          },
          {
            _id: "5d6a68e8fb419e4001ca3979",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "أبو حليفة",
          },
          {
            _id: "5d6a9cb4fb419e4001ca39fe",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "أبو فطيرة",
          },
          {
            _id: "5d6a62aafb419e4001ca3935",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "إشبيلية",
          },
          {
            _id: "5d6a691cfb419e4001ca397d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الأحمدي",
          },
          {
            _id: "5d6a5c70fb419e4001ca3918",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الأندلس",
          },
          {
            _id: "5d6a496ffb419e4001ca38b6",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "البدع",
          },
          {
            _id: "5d6a4c30fb419e4001ca38ce",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الجابرية",
          },
          {
            _id: "61811729d5d14255701d7311",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الجليعة",
          },
          {
            _id: "5d6a924cfb419e4001ca39cf",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الجهراء",
          },
          {
            _id: "5d6a3bc7696c2643368d996d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الخالدية",
          },
          {
            _id: "5f09ca6768d6b5a31f04dbdf",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الخيران",
          },
          {
            _id: "5d6a2d2b696c2643368d992e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الدسمة",
          },
          {
            _id: "5d6a2ce4696c2643368d9928",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الدعية",
          },
          {
            _id: "5d6a2dad696c2643368d9936",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الدوحة",
          },
          {
            _id: "5d6a65d5fb419e4001ca395a",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الرابية",
          },
          {
            _id: "5d6a67d2fb419e4001ca396b",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الرحاب",
          },
          {
            _id: "5d6a9084fb419e4001ca39bf",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الرقة",
          },
          {
            _id: "5d6a6767fb419e4001ca3966",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الرقعي",
          },
          {
            _id: "5d6a51bcfb419e4001ca38e7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الرميثية",
          },
          {
            _id: "5d6a41f7696c2643368d99a4",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الروضة",
          },
          {
            _id: "5d6a6617fb419e4001ca395e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الري",
          },
          {
            _id: "5d6a5490fb419e4001ca3908",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الزهراء",
          },
          {
            _id: "5e883aabf2b63357eb3ec142",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "السالمي كيلو ؟",
          },
          {
            _id: "5d6a5246fb419e4001ca38f1",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "السالمية",
          },
          {
            _id: "5d6a45ddfb419e4001ca38a2",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "السرة",
          },
          {
            _id: "5d6a5206fb419e4001ca38eb",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "السلام",
          },
          {
            _id: "618116efd5d14255701d7310",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الشاليهات",
          },
          {
            _id: "5d6a4370696c2643368d99af",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الشامية",
          },
          {
            _id: "5d6a5312fb419e4001ca38fb",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الشعب",
          },
          {
            _id: "5d6a5387fb419e4001ca3900",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الشهداء",
          },
          {
            _id: "60a7a201627b2d9a7208684d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الشويخ الصناعية",
          },
          {
            _id: "5d6a42a7696c2643368d99aa",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصالحية",
          },
          {
            _id: "5d6a90bcfb419e4001ca39c3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصباحية",
          },
          {
            _id: "61a6612b09ed475704b5854c",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصبيه",
          },
          {
            _id: "5d6a5436fb419e4001ca3904",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصديق",
          },
          {
            _id: "5d6a96c7fb419e4001ca39eb",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصليبية",
          },
          {
            _id: "5d6a97a0fb419e4001ca39ef",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصليبية الصناعية 1",
          },
          {
            _id: "5d6a4469fb419e4001ca3899",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الصليبيخات",
          },
          {
            _id: "5d6a632dfb419e4001ca3939",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الضجيج",
          },
          {
            _id: "5d6a8bebfb419e4001ca398f",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الظهر",
          },
          {
            _id: "5d6a5cb3fb419e4001ca391e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العارضية",
          },
          {
            _id: "5d6a5d21fb419e4001ca3923",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العارضية الحرفية",
          },
          {
            _id: "5d6a5ba0fb419e4001ca390c",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العباسية",
          },
          {
            _id: "61a6613c09ed475704b5854d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العبدلي",
          },
          {
            _id: "5d6a9d54fb419e4001ca3a06",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العدان",
          },
          {
            _id: "5d6a2b7e696c2643368d991d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العديلية",
          },
          {
            _id: "5d6a8cd4fb419e4001ca3997",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العقيلة",
          },
          {
            _id: "5d6a6594fb419e4001ca3952",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العمرية",
          },
          {
            _id: "5d6a956bfb419e4001ca39db",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "العيون",
          },
          {
            _id: "5d6a8d78fb419e4001ca399f",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفحيحيل",
          },
          {
            _id: "5d6a63e5fb419e4001ca3943",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفردوس",
          },
          {
            _id: "5d6a6374fb419e4001ca393e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفروانية",
          },
          {
            _id: "5d6a8db5fb419e4001ca39a3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفنطاس",
          },
          {
            _id: "5e883659f2b63357eb3ec140",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفنيطيس",
          },
          {
            _id: "5d6a30da696c2643368d9945",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الفيحاء",
          },
          {
            _id: "5d6a3f1a696c2643368d9998",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "القادسية",
          },
          {
            _id: "5d6a9f2dfb419e4001ca3a0e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "القرين",
          },
          {
            _id: "5d6a960cfb419e4001ca39e3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "القصر",
          },
          {
            _id: "5d6a9fc4fb419e4001ca3a12",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "القصور",
          },
          {
            _id: "5d6a95c8fb419e4001ca39df",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "القيروان",
          },
          {
            _id: "5d6a3df2696c2643368d998a",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المرقاب",
          },
          {
            _id: "5d6a9eeffb419e4001ca3a0a",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المسايل",
          },
          {
            _id: "5d6aa706fb419e4001ca3a1a",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المسيله",
          },
          {
            _id: "6608a23f32c188fe6fa85b2c",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المطلاع",
          },
          {
            _id: "5d6a3d02696c2643368d9973",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المنصورية",
          },
          {
            _id: "5d6a8f87fb419e4001ca39b3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المنقف",
          },
          {
            _id: "5d6a8f47fb419e4001ca39af",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "المهبولة",
          },
          {
            _id: "5d6a3e94696c2643368d9994",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "النزهة",
          },
          {
            _id: "5d6a9503fb419e4001ca39d7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "النسيم",
          },
          {
            _id: "5d6a912afb419e4001ca39c7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "النعيم",
          },
          {
            _id: "5d6a3e4a696c2643368d9990",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "النهضة",
          },
          {
            _id: "5d6a9885fb419e4001ca39fa",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الواحة",
          },
          {
            _id: "5f2142ea95e071c4563f9a2e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الوفرة l.مزارع",
          },
          {
            _id: "5f2142cef9000d8ea4f6ec94",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "الوفرة الجديدة",
          },
          {
            _id: "5d6a462bfb419e4001ca38a7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "اليرموك",
          },
          {
            _id: "5d6a2bf6696c2643368d9923",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "بنيد القار",
          },
          {
            _id: "6181177cd5d14255701d7312",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "بنيدر",
          },
          {
            _id: "5d6a49d8fb419e4001ca38ba",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "بيان",
          },
          {
            _id: "5ed384177736e09d4652f6d9",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "بيان",
          },
          {
            _id: "5d6a9819fb419e4001ca39f6",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "تيماء",
          },
          {
            _id: "5d6a32f0696c2643368d9951",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "جابر الاحمد",
          },
          {
            _id: "5d6a8ee6fb419e4001ca39ab",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "جابر العلي",
          },
          {
            _id: "5d6a64b0fb419e4001ca3948",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "جليب الشيوخ",
          },
          {
            _id: "660a8bdf32c188fe6fa87150",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "جنوب عبدالله المبارك",
          },
          {
            _id: "65a82b266f8a90a4e57aeb81",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "جواخير الهجن",
          },
          {
            _id: "5d6a4ab4fb419e4001ca38c9",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "حطين",
          },
          {
            _id: "5d6a4a13fb419e4001ca38bf",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "حولي",
          },
          {
            _id: "5d6a6507fb419e4001ca394d",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "خيطان",
          },
          {
            _id: "5ee246fb7384fbd182362ae2",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "خيطان قطعة (3) سكني",
          },
          {
            _id: "5d6a2d7d696c2643368d9932",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "دسمان",
          },
          {
            _id: "5d6a963afb419e4001ca39e7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "سعد العبدال‍له ",
          },
          {
            _id: "5d6a52c6fb419e4001ca38f6",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "سلوى",
          },
          {
            _id: "5d6a43d2fb419e4001ca3891",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "شرق",
          },
          {
            _id: "5d6a8c4ffb419e4001ca3993",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "شرق الأحمدي",
          },
          {
            _id: "5d6a478ffb419e4001ca38ae",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "شمال غرب الصليبيخات",
          },
          {
            _id: "5d6a4418fb419e4001ca3895",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "شويخ السكنية",
          },
          {
            _id: "5f09c82372f7cfa30191a8b3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "صباح الأحمد",
          },
          {
            _id: "5d6aa7a3fb419e4001ca3a22",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "صباح السالم",
          },
          {
            _id: "5d6a686afb419e4001ca3974",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "صباح السالم",
          },
          {
            _id: "5d6a6815fb419e4001ca3970",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "صباح الناصر",
          },
          {
            _id: "5d6aa7fffb419e4001ca3a26",
            store_id: "5d3827c683545d0366ac4285",
            parent_id: "6283647eff59b04a9c819bde",
            name: "صبحان الصناعية",
          },
          {
            _id: "5d6a29dd696c2643368d9913",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "ضاحية عبدالله السالم",
          },
          {
            _id: "5d6a9041fb419e4001ca39bb",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "طريق ميناء الأحمدي",
          },
          {
            _id: "5e8832d6f2b63357eb3ec13f",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "عبدال‍له المبارك الصباح",
          },
          {
            _id: "5d6a69b9fb419e4001ca3981",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "علي صباح السالم ",
          },
          {
            _id: "5f954a42760fdd25a2a07a8f",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "غرب عبدال‍له المبارك",
          },
          {
            _id: "5d6a3189696c2643368d9949",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "غرناطة",
          },
          {
            _id: "5d6aa6c3fb419e4001ca3a16",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "فنيطيس",
          },
          {
            _id: "5d6a8d32fb419e4001ca399b",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "فهد الأحمد",
          },
          {
            _id: "5d6a4165696c2643368d999c",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "قبلة",
          },
          {
            _id: "5d6a41aa696c2643368d99a0",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "قرطبة",
          },
          {
            _id: "5d6a94bdfb419e4001ca39d3",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "كبد",
          },
          {
            _id: "5d6a37db696c2643368d9961",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "كيفان",
          },
          {
            _id: "5ee1f0eb123e50d1a6319b8b",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "مبارك العبدالله (غرب مشرف )",
          },
          {
            _id: "5d6aa76efb419e4001ca3a1e",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "مبارك الكبير",
          },
          {
            _id: "5e88386cf2b63357eb3ec141",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "مخيمات الجهراء الكيلو ؟",
          },
          {
            _id: "5e883bd2f2b63357eb3ec143",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "مخيمات السالمي الكيلو؟",
          },
          {
            _id: "5d6a4cf0fb419e4001ca38d6",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "مشرف",
          },
          {
            _id: "5d6a9200fb419e4001ca39cb",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "منطقة أمغرة صناعية",
          },
          {
            _id: "5d6a4cb9fb419e4001ca38d2",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "ميدان حولي",
          },
          {
            _id: "5d6a8fd7fb419e4001ca39b7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "ميناء عبد ال‍له",
          },
          {
            _id: "5d6a8e6cfb419e4001ca39a7",
            parent_id: "6283647eff59b04a9c819bde",
            store_id: "5d3827c683545d0366ac4285",
            name: "هدية",
          },
        ],
      },
    ],
  },
};

// list of categories
export const category = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    count: 25,
    data: [
      {
        _id: "5d382e9383545d0366ac428e",
        name: "اسلوب حياة صحي",
        picture:
          "https://media.jm3eia.com//2023/12/19/c8a21743d3f7078c78ffae2ca60474e91702993027484.png",
        children: [
          {
            _id: "61515d6f015a56e6be390f68",
            parent_id: "5d382e9383545d0366ac428e",
            name: "وجبات جاهزة",
            picture:
              "https://media.jm3eia.com//2021/10/6/7cf7660b8b8a3463f0480ce05bf97c571633528350886.jpeg",
          },
          {
            _id: "625e6d8d346ffb8046668060",
            parent_id: "5d382e9383545d0366ac428e",
            name: "نمط صحي ",
            picture:
              "https://media.jm3eia.com//2024/1/31/d0f176c31087bfc1e7f31205a43f5fc21706691070628.jpeg",
          },
          {
            _id: "5d382f3883545d0366ac4294",
            parent_id: "5d382e9383545d0366ac428e",
            name: "المخبوزات ",
            picture:
              "https://media.jm3eia.com//2021/10/6/5411cd8948520b44f54ef07e21ef57c81633529128737.jpeg",
          },
          {
            _id: "65a3aa876f8a90a4e57ab8e3",
            parent_id: "5d382e9383545d0366ac428e",
            name: "وجبات خفيفة",
          },
          {
            _id: "5ff9b1414af1b43fbf1f2e88",
            parent_id: "5d382e9383545d0366ac428e",
            name: "مشروبات",
            picture:
              "https://media.jm3eia.com//2021/10/6/e83a5ea2371da6aa94b10e54c1fb8e9c1633528793269.jpeg",
          },
          {
            _id: "64db66c403362203903638ed",
            parent_id: "5d382e9383545d0366ac428e",
            name: "مجمدات",
          },
          {
            _id: "645fc04ad8d576b288877ace",
            parent_id: "5d382e9383545d0366ac428e",
            name: "مستلزمات الطبخ",
          },
          {
            _id: "5d382ee083545d0366ac4290",
            parent_id: "5d382e9383545d0366ac428e",
            name: "الشوكولاتة الصحية",
            picture:
              "https://media.jm3eia.com//2021/10/6/cb1684a4e14aa80ba040a0911b5914511633528938237.jpeg",
          },
          {
            _id: "5d382f1383545d0366ac4292",
            parent_id: "5d382e9383545d0366ac428e",
            name: "لبن، حليب وأجبان",
            picture:
              "https://media.jm3eia.com//2021/10/6/5f96e3abc6d4af048d04fcb03dea5c171633529036860.jpeg",
          },
          {
            _id: "5d382f9d83545d0366ac4298",
            parent_id: "5d382e9383545d0366ac428e",
            name: "المايونيز والصلصات",
            picture:
              "https://media.jm3eia.com//2021/10/6/426ca37221194d0e023cfd8f15f51c2f1633531103299.jpeg",
          },
        ],
      },
      {
        _id: "64217822201eece283c6240d",
        name: "المخبوزات ",
        picture:
          "https://media.jm3eia.com//2023/12/14/b8ba33b08ff3739a2e656ed1951382371702562493350.png",
        children: [
          {
            _id: "5d383c4783545d0366ac42c2",
            parent_id: "64217822201eece283c6240d",
            name: "الخبز بأنواعه",
            picture:
              "https://media.jm3eia.com//2021/10/7/b31960e2e832179c5e356fcfa2ae912d1633602608018.jpeg",
          },
          {
            _id: "65a44ef06f8a90a4e57ac223",
            parent_id: "64217822201eece283c6240d",
            name: "الفطائر والمعجنات",
          },
          {
            _id: "642177a3201eece283c62403",
            parent_id: "64217822201eece283c6240d",
            name: "رقائق الافطار والبقصم",
          },
          {
            _id: "642177d5201eece283c62407",
            parent_id: "64217822201eece283c6240d",
            name: "الكيك والحلويات",
          },
        ],
      },
      {
        _id: "5d383a5d83545d0366ac42b7",
        name: "الخضراوات والفواكة ",
        picture:
          "https://media.jm3eia.com//2023/12/19/a220f213d636cdbe90cf32d2acde6d4d1702993182711.png",
        children: [
          {
            _id: "5d383ae683545d0366ac42bb",
            parent_id: "5d383a5d83545d0366ac42b7",
            name: "الخضراوات ",
            picture:
              "https://media.jm3eia.com//2022/6/1/edc0983ae710437d34e7c756fa3875f41654072918798.jpeg",
          },
          {
            _id: "5d383ab883545d0366ac42b9",
            parent_id: "5d383a5d83545d0366ac42b7",
            name: "الفواكة ",
            picture:
              "https://media.jm3eia.com//2022/6/1/3b803b02bddf7200915620301ab006191654072898985.jpeg",
          },
          {
            _id: "5d383b0e83545d0366ac42bd",
            parent_id: "5d383a5d83545d0366ac42b7",
            name: "الاعشاب",
            picture:
              "https://media.jm3eia.com//2022/6/1/d27fa8eb7b80547c71800752a4e5be6d1654072943946.jpeg",
          },
        ],
      },
      {
        _id: "5d38334383545d0366ac42a1",
        name: "المشروبات",
        picture:
          "https://media.jm3eia.com//2023/12/19/7a6c92fa1ed3a7248cf8350ab23c06c01702993262157.png",
        children: [
          {
            _id: "5d38343c83545d0366ac42a9",
            parent_id: "5d38334383545d0366ac42a1",
            name: "المياه المعدنية ",
            picture:
              "https://media.jm3eia.com//2021/10/7/e09c3fdb19201013ccbc7a0b85a00d1b1633596023232.jpeg",
          },
          {
            _id: "5d38348583545d0366ac42ab",
            parent_id: "5d38334383545d0366ac42a1",
            name: "العصائر",
            picture:
              "https://media.jm3eia.com//2021/10/7/af5faaebc5c76ac5090f4bf951155e691633596082887.jpeg",
          },
          {
            _id: "5d3833a383545d0366ac42a3",
            parent_id: "5d38334383545d0366ac42a1",
            name: "المشروبات الغازية بأنواعها",
            picture:
              "https://media.jm3eia.com//2021/10/7/a2f9c68bd17528111af7b7cbc79c6fb31633595435215.jpeg",
          },
          {
            _id: "5d3833d183545d0366ac42a5",
            parent_id: "5d38334383545d0366ac42a1",
            name: "القهوة والشاي",
            picture:
              "https://media.jm3eia.com//2021/10/7/cbb4361beb2ea7eb2f31fec604e66a171633595881646.jpeg",
          },
          {
            _id: "658994e1da58a47c6a90eaf2",
            parent_id: "5d38334383545d0366ac42a1",
            name: "مشروبات الطاقة",
          },
          {
            _id: "65899585da58a47c6a90eb06",
            parent_id: "5d38334383545d0366ac42a1",
            name: "مشروبات الشعير",
          },
        ],
      },
      {
        _id: "64215663857b77c300b64489",
        name: "منتجات الألبان والبيض",
        picture:
          "https://media.jm3eia.com//2023/12/24/151b7058cc505583f00ac4996bbae82b1703423682845.jpeg",
        children: [
          {
            _id: "5d383d0383545d0366ac42c6",
            parent_id: "64215663857b77c300b64489",
            name: "أجبان ولبنه",
            picture:
              "https://media.jm3eia.com//2021/10/7/f77b4ed86defd52ce38569cab1aaf9bf1633602899478.jpeg",
          },
          {
            _id: "5edc8f84827e06d17bdfcd3a",
            parent_id: "64215663857b77c300b64489",
            name: "بيض",
            picture:
              "https://media.jm3eia.com//2021/10/7/6f08ee82589067931c63afb6721f221b1633603199572.jpeg",
          },
          {
            _id: "65782f08cffde98b77e86adf",
            parent_id: "64215663857b77c300b64489",
            name: "زبدة",
          },
          {
            _id: "65783340cffde98b77e86b1a",
            parent_id: "64215663857b77c300b64489",
            name: "الكريمة والقشطة",
          },
          {
            _id: "64d77e768989ef4a34ebd824",
            parent_id: "64215663857b77c300b64489",
            name: "الحليب والألبان",
          },
          {
            _id: "654230db40bd9e24d3b098c5",
            parent_id: "64215663857b77c300b64489",
            name: "زبادي",
          },
          {
            _id: "658a96de3f74ae9f523e79f4",
            parent_id: "64215663857b77c300b64489",
            name: "الحلويات المبردة",
          },
        ],
      },
      {
        _id: "5d383d4483545d0366ac42c9",
        name: "المعلبات ولوازم الطهي",
        picture:
          "https://media.jm3eia.com//2024/1/3/c1994d5abbdbeec70d8a2e15881ad31b1704269619029.jpeg",
        children: [
          {
            _id: "5d383d6e83545d0366ac42cb",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "الزيوت والخل ",
            picture:
              "https://media.jm3eia.com//2021/10/7/f573d09110c62a1fecb3c5e877c412d01633603684189.jpeg",
          },
          {
            _id: "5d383df483545d0366ac42d1",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "الكاتشب و الصلصة ",
            picture:
              "https://media.jm3eia.com//2021/10/7/cff38392c10b1d7c1a60dfa4541b78211633604001639.jpeg",
          },
          {
            _id: "5d383d9c83545d0366ac42cd",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "الأغذية المعلبة ",
            picture:
              "https://media.jm3eia.com//2021/10/7/a0b89c5fa503373311a263b972bb1a711633603782851.jpeg",
          },
          {
            _id: "658d394c3f74ae9f523e91a1",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "صناعة ومستلزمات الكيك ",
          },
          {
            _id: "5d383dc883545d0366ac42cf",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "المعكرونة - الحبوب - الأرز ",
            picture:
              "https://media.jm3eia.com//2021/10/7/fe1f1a7db1660b811d975420b3a1d8931633603923830.jpeg",
          },
          {
            _id: "5d383e2083545d0366ac42d3",
            parent_id: "5d383d4483545d0366ac42c9",
            name: "توابل ,بهارات والخلطات ",
            picture:
              "https://media.jm3eia.com//2021/10/7/4e1065021997a173c6313975081d5b1d1633604120564.jpeg",
          },
        ],
      },
      {
        _id: "5d3838c883545d0366ac42ac",
        name: "اللحوم الطازجة",
        picture:
          "https://media.jm3eia.com//2024/1/4/74f1906f0cf45cf49a904aaee1749b5b1704367514702.jpeg",
        children: [
          {
            _id: "629c837bcfe3aa78d4e754e4",
            parent_id: "5d3838c883545d0366ac42ac",
            name: "اللحوم ",
            picture:
              "https://media.jm3eia.com//2022/6/5/e406c4466e651e9235af93965ec4f29a1654424434431.jpeg",
          },
          {
            _id: "5d3839c183545d0366ac42b2",
            parent_id: "5d3838c883545d0366ac42ac",
            name: "الدواجن",
            picture:
              "https://media.jm3eia.com//2021/10/7/b4286d2e467af7da656e08e509d9cece1633601231392.jpeg",
          },
        ],
      },
      {
        _id: "6583e433035f03e850685a02",
        name: "الأغذية المجمدة ",
        picture:
          "https://media.jm3eia.com//2024/1/8/dc0939dcfdd0e09d68f732f08d1464bf1704721695192.jpeg",
        children: [
          {
            _id: "6583e5b9035f03e850685a0d",
            parent_id: "6583e433035f03e850685a02",
            name: "دواجن",
          },
          {
            _id: "6583eb28035f03e850685a21",
            parent_id: "6583e433035f03e850685a02",
            name: "لحوم",
          },
          {
            _id: "6583f438035f03e850685a5e",
            parent_id: "6583e433035f03e850685a02",
            name: "مأكولات بحرية",
          },
          {
            _id: "6583f4ba035f03e850685a61",
            parent_id: "6583e433035f03e850685a02",
            name: "بطاط",
          },
          {
            _id: "6583f9d4035f03e850685a78",
            parent_id: "6583e433035f03e850685a02",
            name: "مخبوزات",
          },
          {
            _id: "6583fa1a035f03e850685a7a",
            parent_id: "6583e433035f03e850685a02",
            name: "وجبات جاهزة",
          },
          {
            _id: "65b6077f875c590613398385",
            parent_id: "6583e433035f03e850685a02",
            name: "ايس كريم",
          },
        ],
      },
      {
        _id: "5d383e2783545d0366ac42d4",
        name: "شوكولاتة وحلويات",
        picture:
          "https://media.jm3eia.com//2024/1/3/4b78d42a97d0357a10c438fdaccc4faa1704268501790.jpeg",
        children: [
          {
            _id: "5d383e8d83545d0366ac42d6",
            parent_id: "5d383e2783545d0366ac42d4",
            name: "الشوكولاتة ",
            picture:
              "https://media.jm3eia.com//2021/10/7/166b468175623f2ec1282dfc8e2624f41633604507213.jpeg",
          },
          {
            _id: "5d383fe083545d0366ac42dd",
            parent_id: "5d383e2783545d0366ac42d4",
            name: "الحلوى والعلك ",
            picture:
              "https://media.jm3eia.com//2021/10/7/26fdc352809e105c1fcc1acdea43ebad1633604649414.jpeg",
          },
          {
            _id: "5d383f0b83545d0366ac42da",
            parent_id: "5d383e2783545d0366ac42d4",
            name: "البسكويت و الكوكيز ",
            picture:
              "https://media.jm3eia.com//2021/10/7/af257eb4138018bfb38f263af24ab5201633604700228.jpeg",
          },
        ],
      },
      {
        _id: "5d6f59de300b65453b7e2615",
        name: "التسالي والمكسرات",
        picture:
          "https://media.jm3eia.com//2024/1/3/58c85a27c0bc7935f1cd967339c18cc21704268614629.jpeg",
        children: [
          {
            _id: "5d39447783545d0366ac42e4",
            parent_id: "5d6f59de300b65453b7e2615",
            name: "الشيبس والمقرمشات",
            picture:
              "https://media.jm3eia.com//2022/6/1/b9dd3333b302217cd94e5f9962afedb61654073121080.jpeg",
          },
          {
            _id: "5d3944b483545d0366ac42e8",
            parent_id: "5d6f59de300b65453b7e2615",
            name: "النفيش (الذرة)",
            picture:
              "https://media.jm3eia.com//2022/6/1/ec25660dacdd5591f47f90b2e3f607b71654073165139.jpeg",
          },
          {
            _id: "5d73420a3fb99a243e5e895f",
            parent_id: "5d6f59de300b65453b7e2615",
            name: "المكسرات",
            picture:
              "https://media.jm3eia.com//2022/6/1/20aeec5fdb7a62d1d9df2895ced7d94a1654073956389.jpeg",
          },
        ],
      },
      {
        _id: "5f4fce528a7c406aa3c8efe7",
        name: "العطور",
        picture:
          "https://media.jm3eia.com//2024/3/17/ae81ba046e63d7086f9b8aac4a70e9061710693263849.jpeg",
        children: [
          {
            _id: "5f44c8908424a0438519889e",
            parent_id: "5f4fce528a7c406aa3c8efe7",
            name: "العطور الفرنسية",
            picture:
              "https://media.jm3eia.com//2022/6/1/04f2e6ab21cf1ee70f768457687e28d21654076478960.jpeg",
          },
          {
            _id: "5f7319c251810c75407fce6b",
            parent_id: "5f4fce528a7c406aa3c8efe7",
            name: "اطقم العطور الفرنسية",
            picture:
              "https://media.jm3eia.com//2022/6/1/c454aafe38b760704f8ab3bb1c558a3f1654076517695.jpeg",
          },
          {
            _id: "5ebcffd201e7487e443a76b1",
            parent_id: "5f4fce528a7c406aa3c8efe7",
            name: "العطور الشرقية والبخور",
            picture:
              "https://media.jm3eia.com//2022/6/1/8917b1d7b218d92c03b2dc79ecb8a3841654076450831.jpeg",
          },
          {
            _id: "6253c4ed3a4415ef8e1bbf93",
            parent_id: "5f4fce528a7c406aa3c8efe7",
            name: "معطرات و فواحات",
            picture:
              "https://media.jm3eia.com//2022/6/1/38c17c7bbaf240a0b4dc6fefefdbb25f1654076838286.jpeg",
          },
          {
            _id: "62935f4d74354121a5173b47",
            parent_id: "5f4fce528a7c406aa3c8efe7",
            name: "معطرات الجسم والشعر",
          },
        ],
      },
      {
        _id: "5d39497683545d0366ac4304",
        name: "العناية الشخصية",
        picture:
          "https://media.jm3eia.com//2024/1/11/98f839df2ec37b753d97a2942202ac921704958377847.jpeg",
        children: [
          {
            _id: "5d394a6383545d0366ac4309",
            parent_id: "5d39497683545d0366ac4304",
            name: "العناية بالرجل",
            picture:
              "https://media.jm3eia.com//2022/6/1/e5a396f31e6a955e8eadc46a0b8acd9d1654073411339.jpeg",
          },
          {
            _id: "5d394ad783545d0366ac430b",
            parent_id: "5d39497683545d0366ac4304",
            name: "العناية بالمرأة",
            picture:
              "https://media.jm3eia.com//2022/6/1/ccd98a74e6fee7d6940d904487dfa4a51654073438006.jpeg",
          },
          {
            _id: "5d394b2783545d0366ac430d",
            parent_id: "5d39497683545d0366ac4304",
            name: "العناية بالشعر",
            picture:
              "https://media.jm3eia.com//2022/6/1/68e8d399d6ae08425f9d91db87edb7c41654073456471.jpeg",
          },
          {
            _id: "65b63aa1875c5906133985c7",
            parent_id: "5d39497683545d0366ac4304",
            name: "العناية بالفم والأسنان",
          },
          {
            _id: "5d394be883545d0366ac4311",
            parent_id: "5d39497683545d0366ac4304",
            name: "العناية بالبشرة والجسم",
            picture:
              "https://media.jm3eia.com//2022/6/1/1c269583332405ccefadf92c17c447cc1654073524672.jpeg",
          },
          {
            _id: "5d394b7683545d0366ac430f",
            parent_id: "5d39497683545d0366ac4304",
            name: "لوازم الاستحمام",
            picture:
              "https://media.jm3eia.com//2022/6/1/392d81307ca6e2e17ed7e38a2bcefbb31654073486590.jpeg",
          },
          {
            _id: "5d394c3e83545d0366ac4313",
            parent_id: "5d39497683545d0366ac4304",
            name: "صابون لليدين والمطهرات",
            picture:
              "https://media.jm3eia.com//2022/6/1/253754c0a45654c64c6d09e71f2762a61654073506867.jpeg",
          },
        ],
      },
      {
        _id: "5d39455783545d0366ac42eb",
        name: "منظفات بأنواعها",
        picture:
          "https://media.jm3eia.com//2022/6/1/4311380d866eec8debeb96c5a293cc131654073183462.jpeg",
        children: [
          {
            _id: "5d3945bd83545d0366ac42ee",
            parent_id: "5d39455783545d0366ac42eb",
            name: "منظفات الملابس",
            picture:
              "https://media.jm3eia.com//2021/10/7/1a5631186e12acb6fc3a9300a590e9061633606004784.jpeg",
          },
          {
            _id: "5d39462283545d0366ac42f0",
            parent_id: "5d39455783545d0366ac42eb",
            name: "منظفات المطبخ والصحون",
            picture:
              "https://media.jm3eia.com//2021/10/7/71e26338b3fb2b8f8284d00e9bd80e1b1633606051062.jpeg",
          },
          {
            _id: "5d39468683545d0366ac42f2",
            parent_id: "5d39455783545d0366ac42eb",
            name: "منظفات زجاج وأرضيات",
            picture:
              "https://media.jm3eia.com//2021/10/7/0356890c3750e79d63e411b9d8aafdcd1633606093901.jpeg",
          },
          {
            _id: "5d3946e483545d0366ac42f4",
            parent_id: "5d39455783545d0366ac42eb",
            name: "منظفات ومستلزمات الحمام",
            picture:
              "https://media.jm3eia.com//2021/10/7/953f1104d206fd8bfb66cc7fc22d52531633606148542.jpeg",
          },
          {
            _id: "661e2365b9de088133085305",
            parent_id: "5d39455783545d0366ac42eb",
            name: "مبيدات",
            picture:
              "https://media.jm3eia.com//2024/4/16/6564b59de74ee9d7f37b5ef1fe5f82bb1713251136470.jpeg",
          },
        ],
      },
      {
        _id: "5d394cfc83545d0366ac4316",
        name: "العناية بالطفل",
        picture:
          "https://media.jm3eia.com//2024/2/28/d14fb6e0d200364ff961872886b7b7811709112915915.jpeg",
        children: [
          {
            _id: "5d394d2c83545d0366ac4318",
            parent_id: "5d394cfc83545d0366ac4316",
            name: "الشامبو والزيوت",
            picture:
              "https://media.jm3eia.com//2021/10/7/d51080df9844953cb5c169f3da9dde051633609275183.jpeg",
          },
          {
            _id: "5d394d6283545d0366ac431a",
            parent_id: "5d394cfc83545d0366ac4316",
            name: "الحليب والأطعمة",
            picture:
              "https://media.jm3eia.com//2021/10/7/a1a4e0a1fab9bfe9f4a31eee8d6ebc951633609347581.jpeg",
          },
          {
            _id: "5d394d9483545d0366ac431c",
            parent_id: "5d394cfc83545d0366ac4316",
            name: "الحفاظات والفوط",
            picture:
              "https://media.jm3eia.com//2021/10/7/9324783fd4b945bb5b422f42c77c570c1633609472820.jpeg",
          },
          {
            _id: "5d394dbe83545d0366ac431e",
            parent_id: "5d394cfc83545d0366ac4316",
            name: "الرضاعات واللهايات",
            picture:
              "https://media.jm3eia.com//2021/10/7/6f55146b95432287000c21480a79ca1e1633609558402.jpeg",
          },
        ],
      },
      {
        _id: "5d39479683545d0366ac42f7",
        name: "مستلزمات المنزل",
        picture:
          "https://media.jm3eia.com//2022/6/1/7b33a7b60b60466ef56ba24fe571c9ef1654073213259.jpeg",
        children: [
          {
            _id: "5d39480183545d0366ac42f9",
            parent_id: "5d39479683545d0366ac42f7",
            name: "مستلزمات المطبخ",
            picture:
              "https://media.jm3eia.com//2022/6/1/c9550af97d3a271f2712bd8395d8d1331654073231596.jpeg",
          },
          {
            _id: "602513d68890950472d7547c",
            parent_id: "5d39479683545d0366ac42f7",
            name: "لوازم المنزل",
            picture:
              "https://media.jm3eia.com//2022/6/1/8dd4615e9134313f6b358f1681c7d3771654074354086.jpeg",
          },
          {
            _id: "65b82a84ae91746b1640cfc0",
            parent_id: "5d39479683545d0366ac42f7",
            name: "اكسسوارات المنزل",
          },
          {
            _id: "5d39483e83545d0366ac42fb",
            parent_id: "5d39479683545d0366ac42f7",
            name: "منتجات استخدام مرة واحدة",
            picture:
              "https://media.jm3eia.com//2022/6/1/4c768cc3e480c5256f368ae66ae17ee71654073253394.jpeg",
          },
          {
            _id: "5d39486e83545d0366ac42fd",
            parent_id: "5d39479683545d0366ac42f7",
            name: "المناديل الورقية",
            picture:
              "https://media.jm3eia.com//2022/6/1/30bafcf0f884b6964f9580824a2a34d71654073298125.jpeg",
          },
          {
            _id: "624bf050abcee39dbcedd67c",
            parent_id: "5d39479683545d0366ac42f7",
            name: "الفحم والبطاريات ومستلزمات أخرى",
            picture:
              "https://media.jm3eia.com//2022/4/5/e8ee0bfcfc946f653de7db1e380204b11649144916258.jpeg",
          },
        ],
      },
      {
        _id: "5d394f3983545d0366ac4326",
        name: "مستلزمات الحيوانات الأليفة",
        picture:
          "https://media.jm3eia.com//2023/5/28/70835157c4eab5853ab397a8d89002141685293456044.jpeg",
        children: [
          {
            _id: "5d394f6a83545d0366ac4328",
            parent_id: "5d394f3983545d0366ac4326",
            name: "أطعمة ومستلزمات القطط",
            picture:
              "https://media.jm3eia.com//2021/10/7/a3a299bd101248c400b4b8af5d8e93871633610237532.jpeg",
          },
        ],
      },
      {
        _id: "5d394dfd83545d0366ac431f",
        name: "صيدلية المنزل",
        picture:
          "https://media.jm3eia.com//2024/1/3/e90b6079def3d0ee546ca4a68c12733f1704268742843.jpeg",
        children: [
          {
            _id: "5d394ed283545d0366ac4325",
            parent_id: "5d394dfd83545d0366ac431f",
            name: "مسكنات، فيتامينات واعشاب",
            picture:
              "https://media.jm3eia.com//2021/10/7/b8ca3e7b76a864792ec688ba3d379f571633609990969.jpeg",
          },
          {
            _id: "5d394e5083545d0366ac4321",
            parent_id: "5d394dfd83545d0366ac431f",
            name: "كمامات وضمادات ومشدات واخري",
            picture:
              "https://media.jm3eia.com//2021/10/7/df8f0a71c5658b21689babbb5a0ffefb1633609774762.jpeg",
          },
        ],
      },
      {
        _id: "61960d4c858d43281ecfee46",
        name: "التخييم والرحلات",
        picture:
          "https://media.jm3eia.com//2024/1/11/02d39cebb4599cf4245b2a8b7aab5fa01704959230700.png",
        children: [
          {
            _id: "61961076858d43281ecfee48",
            parent_id: "61960d4c858d43281ecfee46",
            name: "لوازم الطبخ والشواء",
            picture:
              "https://media.jm3eia.com//2021/11/20/0ad9fcbef5679b01d3d51244e83f95461637391713910.png",
          },
        ],
      },
      {
        _id: "5d38304383545d0366ac4299",
        name: "المكتبة",
        picture:
          "https://media.jm3eia.com//2023/11/23/78e1b3d410cd5617ca08e38dedf0cdf71700771423066.jpeg",
        children: [
          {
            _id: "5d38307083545d0366ac429b",
            parent_id: "5d38304383545d0366ac4299",
            name: "القرطاسية",
            picture:
              "https://media.jm3eia.com//2021/10/7/fc77d658ceb0f8a422e21454bca412c41633595361287.jpeg",
          },
        ],
      },
      {
        _id: "5d3829a683545d0366ac4287",
        name: "الالكترونيات",
        picture:
          "https://media.jm3eia.com//2023/11/23/60c2b3520e550aec5a615a16c2ecd5aa1700771151488.jpeg",
        children: [
          {
            _id: "658b02673f74ae9f523e7fe5",
            parent_id: "5d3829a683545d0366ac4287",
            name: "شاشات",
          },
          {
            _id: "5d382a2083545d0366ac4289",
            parent_id: "5d3829a683545d0366ac4287",
            name: "أجهزة المطبخ",
            picture:
              "https://media.jm3eia.com//2022/6/1/b3ce3ab906f9e0b3d68fef57213618751654071657479.jpeg",
          },
          {
            _id: "5d382b2a83545d0366ac428b",
            parent_id: "5d3829a683545d0366ac4287",
            name: "الأجهزة المنزلية",
            picture:
              "https://media.jm3eia.com//2022/6/1/52f46bb9c1867ee75d4c3fab5f916ff31654072234071.jpeg",
          },
          {
            _id: "5d382b7483545d0366ac428d",
            parent_id: "5d3829a683545d0366ac4287",
            name: "أجهزة العناية الشخصية",
            picture:
              "https://media.jm3eia.com//2022/6/1/b37b8cee717058c2b76dc03ef15cb2db1654072253601.jpeg",
          },
          {
            _id: "6597aae097f4e58723e795a6",
            parent_id: "5d3829a683545d0366ac4287",
            name: "اكسسوارات هواتف",
          },
          {
            _id: "6623d71902299f1cc3a4c504",
            parent_id: "5d3829a683545d0366ac4287",
            name: "تابلت",
            picture:
              "https://media.jm3eia.com//2024/4/20/5aae599ad34267f483b58bceffad979f1713624788109.jpeg",
          },
          {
            _id: "63fca409c8be5d1f6c05e603",
            parent_id: "5d3829a683545d0366ac4287",
            name: "لوازم السيارات",
          },
        ],
      },
      {
        _id: "61e6b13eb84a5b34badbf159",
        name: "الملابس والاكسسوارات",
        picture:
          "https://media.jm3eia.com//2023/11/23/56747e6185e14c55aface897bd0c1e861700771458642.jpeg",
        children: [
          {
            _id: "6637dbbae84d788520631a7f",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "حواء ستور",
          },
          {
            _id: "61e6b1bfb84a5b34badbf15b",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "ملابس رجالي",
            picture:
              "https://media.jm3eia.com//2022/1/27/e3cb143bf203a4aceed5452da18ade411643275505282.jpeg",
          },
          {
            _id: "61e6b199b84a5b34badbf15a",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "ملابس نسائي",
            picture:
              "https://media.jm3eia.com//2022/1/27/bdc810bd79e6488261fafbc6afd87cdb1643275426463.jpeg",
          },
          {
            _id: "61e6b1edb84a5b34badbf15c",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "ملابس اطفال",
            picture:
              "https://media.jm3eia.com//2022/1/26/4364a10a73505b01276740b1b36e85c71643181339142.jpeg",
          },
          {
            _id: "6545f59040bd9e24d3b0a473",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "المفروشات",
          },
          {
            _id: "62d662d612c63ea141483dbe",
            parent_id: "61e6b13eb84a5b34badbf159",
            name: "النظارات والساعات",
            picture:
              "https://media.jm3eia.com//2022/7/19/6b9292ddefe73b6ace72c810976253061658217318103.jpeg",
          },
        ],
      },
      {
        _id: "5d39607a83545d0366ac4338",
        name: "العاب الأطفال",
        picture:
          "https://media.jm3eia.com//2023/11/23/fa62c46be49ca292d7ce44f098e9abe61700771212607.jpeg",
        children: [
          {
            _id: "5d3960b683545d0366ac433a",
            parent_id: "5d39607a83545d0366ac4338",
            name: "الألعاب المتنوعة",
            picture:
              "https://media.jm3eia.com//2022/6/1/9dbccfb6684693ed34bf490a3f8cd2081654073680938.jpeg",
          },
          {
            _id: "5d3960e283545d0366ac433c",
            parent_id: "5d39607a83545d0366ac4338",
            name: "الألعاب التعليمية",
            picture:
              "https://media.jm3eia.com//2022/6/1/0828bbbf779b2f86d18a327b367154c11654073700574.jpeg",
          },
          {
            _id: "5ff3022171c87bb0ffb3dafc",
            parent_id: "5d39607a83545d0366ac4338",
            name: "عربات وأسرة الأطفال ",
            picture:
              "https://media.jm3eia.com//2022/5/26/95f9b630782baf6162bd10dbb8d79c601653553378879.jpeg",
          },
        ],
      },
      {
        _id: "5d3949fe83545d0366ac4307",
        name: "المكياج ",
        picture:
          "https://media.jm3eia.com//2023/11/23/cf61be4ea3e49aad60debca221d666fb1700771440767.jpeg",
        children: [
          {
            _id: "5faf8d6d5d44a5172c69fc15",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "أدوات تجميل",
            picture:
              "https://media.jm3eia.com//2022/6/1/7826502df03d041bb7f341d1e474947c1654076641168.jpeg",
          },
          {
            _id: "5faf876991a6e2173970aa57",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "لوريال",
            picture:
              "https://media.jm3eia.com//2022/6/1/875345f226e54492092b8432d06198a21654076559071.jpeg",
          },
          {
            _id: "5faf86570a1d2c17144c1edb",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ميبيلين",
            picture:
              "https://media.jm3eia.com//2022/6/1/85fbfbb68a3dfddb725f9a2ed6893ed41654076541015.jpeg",
          },
          {
            _id: "5faf894dac5b5f170ec505c0",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "بورجوا",
            picture:
              "https://media.jm3eia.com//2022/6/1/0f2c592775fc634af30c2aba137bce291654076582346.jpeg",
          },
          {
            _id: "62f8b8dfccf378468d3287fc",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ماكس فاكتور",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8c2d4ccf378468d328800",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ايسنس",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8cd80ccf378468d328804",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ألفاريز",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8dba0ccf378468d328808",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ذا بالم",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8dbccccf378468d328809",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "أنستازيا ",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8e2efccf378468d328813",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "اربن ديكاي ",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8ea61ccf378468d32881b",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "يانج بلود",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8ee16ccf378468d32881f",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ماك",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8ee6eccf378468d328820",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ريميل",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "62f8f620ccf378468d328827",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "باي تيري",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
          {
            _id: "5faf8ade0a1d2c17144c1edc",
            parent_id: "5d3949fe83545d0366ac4307",
            name: "ماركات اخرى",
            picture:
              "https://media.jm3eia.com//2022/6/1/c2b80fab6db94dde415f4760c283fc7b1654076623176.jpeg",
          },
        ],
      },
      {
        _id: "5d39613083545d0366ac433d",
        name: "المطحنة",
        picture:
          "https://media.jm3eia.com//2023/11/23/b13abeb0c5e172bbb1efc76ad6e07dbb1700771379887.jpeg",
        children: [
          {
            _id: "5d39618b83545d0366ac433f",
            parent_id: "5d39613083545d0366ac433d",
            name: "القهوة العربية ومشتقاتها",
            picture:
              "https://media.jm3eia.com//2021/10/7/e41c166d72c786ee5acd129a66eabdb41633610430882.jpeg",
          },
          {
            _id: "5d3961d883545d0366ac4341",
            parent_id: "5d39613083545d0366ac433d",
            name: "التمور والمعاميل",
            picture:
              "https://media.jm3eia.com//2021/10/7/4c040152eb158e071cdf2eb957cab2091633610517706.jpeg",
          },
        ],
      },
      {
        _id: "658bc6ba3f74ae9f523e85fc",
        name: "تموين جمعية",
        picture:
          "https://media.jm3eia.com//2023/12/27/23f5bf1e85dd6b3d0c10d61cbb779c871703662463030.jpeg",
        children: [
          {
            _id: "658bcbc73f74ae9f523e8611",
            parent_id: "658bc6ba3f74ae9f523e85fc",
            name: "اساسيات الطبخ",
          },
          {
            _id: "658bcd8e3f74ae9f523e861e",
            parent_id: "658bc6ba3f74ae9f523e85fc",
            name: "منظفات المنزل",
          },
          {
            _id: "658bcd173f74ae9f523e8618",
            parent_id: "658bc6ba3f74ae9f523e85fc",
            name: "استهلاكيات المنزل",
          },
        ],
      },
    ],
  },
};

///list of products
export const listProducts = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    total: 37720,
    count: 200,
    per_page: 200,
    current_page: "{{skip}}",
    data: [
      {
        sku: "99956554011",
        price: "1.535",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/8/4cefb53cea672ea752e0ce84970965b81715157909849.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.25,
          },
          {
            category_id: "5d383c4783545d0366ac42c2",
            rank_id: "657d65b70c017d1dc04e3e92",
            sorting: 1210,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 5,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين خبز الفوكاتشيا بزيت جوز الهند بدون سكر 45جم 4حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553969",
        price: "1.535",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "5d383c4783545d0366ac42c2",
            rank_id: "657d65b70c017d1dc04e3e92",
            sorting: 1200,
          },
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.24,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/8/f591944287588d1128061cc8ebd11c951715157468900.jpeg",
        name: "يورو كيك بريميوم بروتين خبز البرجر بزيت جوز الهند بدون سكر 4حبة 200جم ",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553874",
        price: "0.660",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/8/606322cd23fa5b5eee41f2bc52f139281715155944755.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.19,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 22,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم لوح مغلف بالشوكولاتة بنكهة البرتقال والشوكولاتة قليل الدسم 20جم 5حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553723",
        price: "0.660",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/8/261a4743dd58de6a8a1bdc151bacd72d1715155226527.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.18,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 23,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم لوح مغلف بالشوكولاتة بنكهة التوت الازرق قليل الدسم 20جم 5حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553616",
        price: "0.660",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/8/7ad5b336016fbd71dfc19e186727f3f01715154852321.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.17,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 23,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم لوح مغلف بالشوكولاتة بنكهة الفراولة قليل الدسم 20جم 5حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553567",
        price: "0.660",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/8/dcc72906b40d9f7237c2da888e384f411715153876165.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.16,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 24,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم لوح مغلف بالشوكولاتة بنكهة الموز قليل الدسم 20جم 5حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553470",
        price: "0.695",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/c36a68a561ab9b0383d4103d70a0d9761715091935789.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.12,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 47,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين كوكيز برقائق دبل الشوكولاتة المقرمشة بدون سكر 40جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553363",
        price: "0.695",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.11,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 48,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/7/628582fc56b1c415665e9b377f8d68191715091306713.jpeg",
        name: "يورو كيك بريميوم بروتين كوكيز برقائق الشوكولاتة المقرمشة بدون سكر 40جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553251",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/9e2dab315156d00bbf93adaeaa2ec7cf1715090618470.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.03,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 72,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين براوني بار بالشوكولاتة خالي من السكر 65جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553109",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/b3c30365a37afb03c451a53d5f19ab441715089978708.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.02,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 72,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين كيك بالقهوة والشوكولاتة خالي من السكر 65جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956553065",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/9979f37bcdf47e4cc3444d970fec9c2b1715089319904.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.01,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 72,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين كيك بلاك فوريست بالشوكولاتة والكرز خالي من السكر 65جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956552989",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/1db2dd3dc6603a55341d445d4312b8d11715088603670.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 72,
            status: true,
          },
        ],
        name: "يورو كيك بريميوم بروتين شيز كيك بالفراولة خالي من السكر 65جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "65f1f17f82e328b1112c4a80",
        sku: "35803531147",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/24d7c0f835cd1f5ddb3ce27fa176a7f21715072139682.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "65f1fcf682e328b1112c4aaf",
            sorting: 9000,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 100,
            status: true,
          },
        ],
        name: "بان كيك دايجستيف",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "65f1f17f82e328b1112c4a80",
        sku: "35803531146",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/c2359d30a7520f12767a5f5e9881817c1715072033586.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "65f1fcf682e328b1112c4aaf",
            sorting: 9050,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 100,
            status: true,
          },
        ],
        name: "بان كيك ايس كريم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "65f1f17f82e328b1112c4a80",
        sku: "35803531145",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/66bbccf08c93f60f69ef315b8ce0b4231715071892599.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "65f1fcf682e328b1112c4aaf",
            sorting: 9100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 100,
            status: true,
          },
        ],
        name: "بان كيك اوريو",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "65f1f17f82e328b1112c4a80",
        sku: "35803531144",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/5915ff3797dbaa9f0a8199e8d338bd801715071498179.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "65f1fcf682e328b1112c4aaf",
            sorting: 9150,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 100,
            status: true,
          },
        ],
        name: "بان كيك براونى",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956551420",
        price: "0.875",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/7/da9f60d13dbf730a796d85af4c1fdf7b1715076337763.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383ab883545d0366ac42b9",
            rank_id: "63a41091baa18b0b22c2057f",
            sorting: 601,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 18,
            status: true,
          },
        ],
        name: "عنب مشكل طازج 500جم تقريبا",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956551354",
        price: "1.210",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/6/42efc9530a3c6fd26f1729301df7268e1714979913670.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d3945bd83545d0366ac42ee",
            rank_id: "5d55402f91ad862bde52667d",
            sorting: 1250,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 83,
            status: true,
          },
        ],
        name: "اومو كبسولات غسيل الملابس لازالة البقع 3×1 بالاوكالبتوس 15كبسولة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397462",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/a8aa328b84b5e7ea7bdfa237dd97f4fd1714932690933.jpeg",
        name: "مياه صغير",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397461",
        price: "0.450",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/3d6a80b7084b301e7dfa6d8729af41bf1714930767899.jpeg",
        name: "لبن خلطة الضيافة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397460",
        price: "0.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/842940a1f8e26c9ba5c218f674731c9f1715245232301.png",
        name: "روب",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397459",
        price: "0.450",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/461f2a4c3028af59777fc12c6300f99d1715245665148.jpeg",
        name: "لبن بقر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397458",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/4a4e9bbf90d314ff8401d4b0e9020dcd1715245779935.jpeg",
        name: "لبن المراعي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397457",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/27a214f970232b2bc2b047f3dc98a0051714929453843.jpeg",
        name: "ديو",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397456",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/4663e64fb9f81707780c05b450a2c58e1714929063979.jpeg",
        name: "فانتا",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397455",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/6cda6df2e9957ed0ad27f69800bf706a1714927246268.jpeg",
        name: "سفن اب",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397454",
        price: "0.200",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363445e84d788520631337",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/2d22837cb720d0af16c62296e6784f931714927401835.jpeg",
        name: "بيبسي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397453",
        price: "1.000",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/62d6f96ff67f18ba35fc3505952070171714926520208.jpeg",
        name: "تشريبة خضار",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397452",
        price: "1.750",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/6d5b7bb998a654e04af50f4e09f73d8f1714933699732.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "تشريبه دجاج",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397451",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/95cc144a6bace75ed5425f2d0cd458571714933732462.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "تشريبة لحم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397450",
        price: "1.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/be98c60ccad7fc32fa53f27ebe5ab9ce1714926037997.jpeg",
        name: "جريش",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397449",
        price: "2.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/613c54b8cc001dc54036f115e64f99341714924020631.jpeg",
        name: "محاشي مشكل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397448",
        price: "1.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/16228602e5e7f58c3e643efdbee9c2141714923741691.jpeg",
        name: "مرقوق",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397447",
        price: "1.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633e1e84d788520631333",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/63be4e2ab28c625519e2533af5dd47ce1714923636247.jpeg",
        name: "قبوط",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397446",
        price: "1.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/b0eaf87995956a6f252639e34b47f5a11714934014789.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "تبولة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397445",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/4ef9a6e22502e069aa3e49303113aeb91714934216589.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "سلطة ام سالم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397444",
        price: "1.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/af102cc3e74406a798577e5fc95eea471714935728449.jpeg",
        name: "سلطة الضيافة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397443",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/8a2b7d92dab1310b98c6bbd69d7cbb031714935844996.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "سلطة جرجير",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397442",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/777b9446dfbc96d378b6f8c82bfe6e711714848487202.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "خيار روب",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397441",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/afb6f6ce9009fb7e0e0169ce6f6c735a1714848330106.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "شمندر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397440",
        price: "1.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "6636341ae84d788520631335",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/95c9ee69575712a58601045f0aa392871714923576582.jpeg",
        name: "فتوش",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397439",
        price: "3.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/cf83a4aed9165c9cb88300606fac602b1714848020035.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "حمسة ربيان",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397438",
        price: "6.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/9/014d3f12c76378320c8d54e83d70c84a1715248898745.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مرق زبيدي مع عيش",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397437",
        price: "4.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/9/8fb05fda9d546e483dc22bb1ba0adc241715248821699.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مرق روبيان مع عيش",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397436",
        price: "4.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/5/5456381a1baa0ec9822a6f4788d8210c1714937111336.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مرق هامور مع عيش",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397435",
        price: "4.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/b886ddd3815dd97a7b3f485486bb16611714923512047.jpeg",
        name: "مربين",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397434",
        price: "6.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/206aacac9907e0d575001be08316f7b21714923444226.jpeg",
        name: "مطبق هامور ملكي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397433",
        price: "7.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/fc13d3a11a1c8d6e20fc313e9505b27e1714923366047.jpeg",
        name: "مطبق زبيدي ملكي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397432",
        price: "4.250",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/99aa0d1a3e3faba0ca483f5b28fe35741714923309358.jpeg",
        name: "مطبق سيباس",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397431",
        price: "4.750",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/12f2e2f5b2aacee797e56d9084251f9b1714923243826.jpeg",
        name: "مطبق هامور",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397430",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/9/9ef2307dfcaaad9ca7fff67359ff39181715248728360.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "663633afe84d788520631331",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مطبق زبيدي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397429",
        price: "45.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/9f04759559f8256770c342033384eeaa1714844938934.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 140,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "ربع قوزي عربي مع فقع",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397428",
        price: "40.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/f1fc8d81935e2a66e38c5a52fcfc777f1714844403975.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 130,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "ربع قوزي عربي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397427",
        price: "14.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/e9c4addfd6ca83056500d6c4a30633411714843842313.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 120,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "برياني دجاج 5اشخاص ",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397426",
        price: "18.000",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 110,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/e8b286528884dd14e15c407f82d9d3b41714923120613.jpeg",
        name: "محروق قاع الجدر لحم 4اشخاص",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397425",
        price: "14.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/ac73323afafc126fd8a3fb0a806135a91714843037942.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "محروق قاع الجدر دجاج 4اشخاص",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397424",
        price: "5.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/f2fcd83cd29fd91157d4f8e2fbf83ac11714842544949.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دجاج محشي شخصين",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397423",
        price: "3.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/5ab98d50782560cfab4c73c47faab0bb1714842263130.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "برياني لحم استرالي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397422",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/4aca25ab44ee863e22458a64a7f231001714842077944.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "برياني لحم نعيمي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397421",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/9/65796d2275a3dbc93df6a6760182ea0f1715248644490.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "برياني دجاج",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397420",
        price: "8.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/47fcf1dadc6bd24a138ccb8c972d6d811715248560924.jpeg",
        name: "مجبوس لحم نعيمي مع فقع",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397419",
        price: "2.750",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/4/ef45eb7aaed063413660b2ac04fc5dae1714833064887.jpeg",
        name: "مجبوس دجاج مقلي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397418",
        price: "2.750",
        show_discount_percentage: false,
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/5/b9aeab1719e0bfdf4fe5ba2c7922bd661714939336225.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 30,
          },
        ],
        name: "مجبوس دجاج فرن",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397417",
        price: "3.500",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/96826bbae2e574b903db201c77b029461715248468048.jpeg",
        name: "مجبوس لحم استرالي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "66362e71e84d7885206312f7",
        sku: "63406397416",
        price: "6.000",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "66363375e84d78852063132d",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/9/dd981d2ae465406b445581053aecefe71715248239981.jpeg",
        name: "مجبوس لحم نعيمي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956551299",
        price: "3.750",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/aa2ecc99cd73474b4f1a43f37da332171714825622293.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383d6e83545d0366ac42cb",
            rank_id: "5d3eb4b683545d0366ac4748",
            sorting: 51,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1,
            status: true,
          },
        ],
        name: "جود زيت دوار الشمس 5لتر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "40001558",
        price: "0.910",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/4/826be433328d4c7d8558a0d5b3625e981714824247714.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d382b2a83545d0366ac428b",
            rank_id: "60251a69469d04046b23f48b",
            sorting: 30.1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 14,
            status: true,
          },
        ],
        name: "كانون لمبة اضاءة اصفر بقوة 5واط",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956551097",
        price: "0.125",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/5/2/63d39c1c521ff4b9f76494a9c65767e91714645879859.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb9db83545d0366ac4782",
            sorting: 3000915,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 250,
            status: true,
          },
        ],
        old_price: "0.175",
        name: "بيكر كراكر بنكهة الزعتر 45جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550909",
        price: "0.125",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/5/2/ec972f644b092b9cca3f8755add9614b1714644647417.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb9db83545d0366ac4782",
            sorting: 3000910,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 265,
            status: true,
          },
        ],
        old_price: "0.175",
        name: "بيكر عيدان ميني بريتزل بنكهة الاعشاب 45جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550815",
        price: "0.125",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/5/2/ff462acf2a732bd9a3558c4c75b443f01714643646476.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb9db83545d0366ac4782",
            sorting: 3000905,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 284,
            status: true,
          },
        ],
        old_price: "0.175",
        name: "بيكر بريتزل اصلي بنكهة الباربكيو 45جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550796",
        price: "0.125",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/5/2/5bfc51a9a45fcb4f6ee1942c452aa6e91714642803123.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb9db83545d0366ac4782",
            sorting: 3000900,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 292,
            status: true,
          },
        ],
        old_price: "0.175",
        name: "بيكر بريتزل اصلي بنكهة الفلفل الحار والحلو 45جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549431",
        price: "0.900",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/9b7afd268c280e36365011244ecc23471714575253513.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d38307083545d0366ac429b",
            rank_id: "5fe48d7ac821878395c9bc45",
            sorting: 200,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 35,
            status: true,
          },
        ],
        name: "دفتر عربي 80ورقة A4",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550539",
        price: "0.215",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/10af7e6510bb5c353b92c9117303245e1714564746079.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d3833a383545d0366ac42a3",
            rank_id: "5d3eab8483545d0366ac46f2",
            sorting: 22.028,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3,
            status: true,
          },
        ],
        name: "ريتا مشروب غازي بنكهة الموهيتو 240مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550453",
        price: "0.215",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/480350f75aa5c760405b0fdf4a8e279b1714564379411.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d3833a383545d0366ac42a3",
            rank_id: "5d3eab8483545d0366ac46f2",
            sorting: 22.022,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 9,
            status: true,
          },
        ],
        name: "ريتا مشروب غازي بنكهة الباشن 240مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550248",
        price: "0.215",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/f0e330fc27f5b5a3660526e89ce9e9f01714562781889.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d3833a383545d0366ac42a3",
            rank_id: "5d3eab8483545d0366ac46f2",
            sorting: 22.015,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 5,
            status: true,
          },
        ],
        name: "ريتا مشروب غازي بنكهة الليمون والنعناع 240مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956550155",
        price: "0.215",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/21c4cbb4063cd4cfbd6eba82f3f0af2b1714560426347.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d3833a383545d0366ac42a3",
            rank_id: "5d3eab8483545d0366ac46f2",
            sorting: 22.011,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 9,
            status: true,
          },
        ],
        name: "ريتا مشروب غازي بنكهة التفاح 240مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549696",
        price: "0.620",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/bdd696de6e542981074f67c7c38e379a1714551997523.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383fe083545d0366ac42dd",
            rank_id: "5d3eb8f283545d0366ac4776",
            sorting: 1104.1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 2,
            status: true,
          },
        ],
        name: "الصيداوي توفي بنكهات مختلفة 450جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549368",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/bf0dc93ab730d46edfcfbbaf075049331714550700975.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d38307083545d0366ac429b",
            rank_id: "5fe48d7ac821878395c9bc45",
            sorting: 210,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 23,
            status: true,
          },
        ],
        name: "دفتر عربي 100ورقة A4",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549290",
        price: "0.600",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/1b6b7b1c7f97907340d932fb613adfd41714549944799.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d38307083545d0366ac429b",
            rank_id: "5fe48d7ac821878395c9bc45",
            sorting: 190,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 47,
            status: true,
          },
        ],
        name: "دفتر عربي 60ورقة A4",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549135",
        price: "1.100",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/5bb8dfe765ead0fca762c3a24fc34ff61714549357601.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d38307083545d0366ac429b",
            rank_id: "5fe48d7ac821878395c9bc45",
            sorting: 220,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 22,
            status: true,
          },
        ],
        name: "دفتر عربي 100ورقة A5",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956549067",
        price: "0.660",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/5ce1625d52206c8d1d807bbbc8db229f1714548374636.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d38307083545d0366ac429b",
            rank_id: "5fe48d7ac821878395c9bc45",
            sorting: 230,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 34,
            status: true,
          },
        ],
        name: "دفتر عربي 80ورقة B5",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "999006045",
        price: "35.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/5/1/03dbd4242169c249e8c69390898df2c11714546463680.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5f44c8908424a0438519889e",
            rank_id: "5f44cf350857dc43b0107b87",
            sorting: 1958,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 2,
            status: true,
          },
        ],
        name: "عطر غيرلان هابيت روج او دو برفيوم للنساء 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "8866002057",
        price: "4.985",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/5/1/6e6c50661345d71f8729e56a9ca8226f1714530905873.png",
        prod_n_categoryArr: [
          {
            category_id: "5d39483e83545d0366ac42fb",
            rank_id: "5d3ebf1a83545d0366ac47b3",
            sorting: 9,
          },
          {
            category_id: "65358a09e0ab0f5d5112e7df",
            sorting: 138,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 7,
            status: true,
          },
        ],
        old_price: "12.780",
        name: "سلة المنتجات الاستهلاكية",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "8822554812",
        old_price: "1.245",
        price: "0.990",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/4/30/8c8cd8e276b9d0e6b67fd733c8a477441714506298464.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383d9c83545d0366ac42cd",
            rank_id: "65804261035f03e8506842f5",
            sorting: 503,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 80,
            status: true,
          },
        ],
        name: "مائدة لحم تونة خفيف سكيبجاك في زيت دوار الشمس 160جم 3حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "9933667821",
        old_price: "3.735",
        price: "2.670",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/4/30/dfaee5b6ff55d8fdbc5e1e205e9f5a011714505995174.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383d9c83545d0366ac42cd",
            rank_id: "65804261035f03e8506842f5",
            sorting: 502,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 21,
            status: true,
          },
        ],
        name: "مائدة لحم تونة خفيف سكيبجاك في زيت دوار الشمس 160جم 9حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548937",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/72192ee1c383e80c1d614280c7656f861714489753976.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394ed283545d0366ac4325",
            rank_id: "61d6e31ec5c11447d44cca82",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 5,
            status: true,
          },
        ],
        name: "اكوا فاست اختبار حمل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548828",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/e6dceca3c4a296feeebe94254183d2d41714489386224.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394ed283545d0366ac4325",
            rank_id: "61d6e31ec5c11447d44cca82",
            sorting: 45,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 4,
            status: true,
          },
        ],
        name: "جولدين تايم اختبار حمل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548678",
        price: "1.990",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/309b89c901dd560a344870b597b194361714487656031.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394ed283545d0366ac4325",
            rank_id: "612382f2a77ceed54e3f913a",
            sorting: 190,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 5,
            status: true,
          },
        ],
        name: "مام ايزي منظف الانف للاطفال",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548544",
        price: "3.700",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/ecfe967f2cf01a4cbb377a5ccbce824b1714486509312.png",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecbfc83545d0366ac481f",
            sorting: 10530,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 6,
            status: true,
          },
        ],
        name: "مام ايزي اكياس تخرين الحليب 12حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548414",
        price: "3.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/699a83aa2cb2981a8b2369fa9efec96d1714486039079.png",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecb8c83545d0366ac481b",
            sorting: 7205,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 6,
            status: true,
          },
        ],
        name: "مام ايزي مضخة العناية بالثدي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548320",
        price: "3.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/c72e71345975f1de9f1a0e72dcaa825e1714485200091.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecb8c83545d0366ac481b",
            sorting: 7200,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 6,
            status: true,
          },
        ],
        name: "مام ايزي غطاء شفاط الحليب 2حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956548245",
        price: "3.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/fa2fedbba0eb71dc7053b7afef440c931714484217980.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecbfc83545d0366ac481f",
            sorting: 10520,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            feed_from_store_id: "5d3827c683545d0366ac4285",
            quantity: 6,
            status: true,
          },
        ],
        name: "مام ايزي ضمادات رضاعة قابلة للغسل 6حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956547730",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/84d3cd19e9a6a8d65daaad4f53fa18651714483536022.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394d9483545d0366ac431c",
            rank_id: "5dba7a5821a893330e122739",
            sorting: 7000,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3,
            status: true,
          },
        ],
        name: "مام ايزي مناديل مبللة للاطفال 80منديل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956547628",
        price: "2.990",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/f3db6a2f8bd42c8d41ba3595beb020231714482902973.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecbfc83545d0366ac481f",
            sorting: 10521,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 4,
            status: true,
          },
        ],
        name: "مام ايزي فرشاة لتنظيف الرضاعات حجم وسط ",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956547502",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/415db6333e9e12ef7398df0ad035623e1714481091235.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d394e5083545d0366ac4321",
            rank_id: "61238007a2e8a1d566a66ab7",
            sorting: 45,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 4,
            status: true,
          },
        ],
        name: "مام ايزي اعواد قطن لتنظيف الأذن للاطفال 100عود",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956547449",
        price: "2.990",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/87f5ea6a3a98ba202c7c7770779bf8af1714480458517.png",
        prod_n_categoryArr: [
          {
            category_id: "5d394dbe83545d0366ac431e",
            rank_id: "5d3ecb8c83545d0366ac481b",
            sorting: 7013,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 6,
            status: true,
          },
        ],
        name: "مام ايزي رضاعة اطفال حديث الولادة بلاستيك 120مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956544523",
        old_price: "81.300",
        price: "49.890",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/4/29/36014313b10b19e1aa9e725e7b9a941b1714397441958.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "658bcbc73f74ae9f523e8611",
            rank_id: "658bce183f74ae9f523e8623",
            sorting: 140,
          },
          {
            category_id: "629c837bcfe3aa78d4e754e4",
            rank_id: "629c83a2cfe3aa78d4e754e6",
            sorting: 451.1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "خروف عربي طازج كامل 12كجم تقريباً",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956544422",
        old_price: "91.000",
        price: "58.890",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/4/29/58544f0e545f6f2f166110cd9bedb87a1714396773685.png",
        prod_n_categoryArr: [
          {
            category_id: "629c837bcfe3aa78d4e754e4",
            rank_id: "629c83a2cfe3aa78d4e754e6",
            sorting: 450.1,
          },
          {
            category_id: "658bcbc73f74ae9f523e8611",
            rank_id: "658bce183f74ae9f523e8623",
            sorting: 140.1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 43,
            status: true,
          },
        ],
        name: "خروف عربي طازج كامل مقطع 14كجم تقريباً",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956521375",
        price: "0.850",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/14658e8c69a4f470f8dd7c2075557a1d1714386139838.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6613a0c132436823bd5bf662",
            sorting: 190,
          },
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb93b83545d0366ac477a",
            sorting: 1380,
          },
          {
            category_id: "65f57d670046ce5ac1dfd6ab",
            sorting: 3,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 25,
            status: true,
          },
        ],
        name: "برنجلز سيزلن شيبس بطعم الباربيكيو الحار 160جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956521237",
        price: "0.850",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/3bfdb6804d9ca1b9ecf1c415581efb091714385921080.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6613a0c132436823bd5bf662",
            sorting: 180,
          },
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb93b83545d0366ac477a",
            sorting: 1370,
          },
          {
            category_id: "65f57d670046ce5ac1dfd6ab",
            sorting: 2,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 30,
            status: true,
          },
        ],
        name: "برنجلز سيزلن شيبس بطعم الكريمة الحامضة الحارة 160جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956521112",
        price: "0.850",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/a2a2a42c92d61db6376b4342e3130d551714385681216.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6613a0c132436823bd5bf662",
            sorting: 170,
          },
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb93b83545d0366ac477a",
            sorting: 1360,
          },
          {
            category_id: "65f57d670046ce5ac1dfd6ab",
            sorting: 1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 29,
            status: true,
          },
        ],
        name: "برنجلز سيزلن شيبس بطعم الجبن الحار 160جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956521058",
        price: "0.950",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/14406039f94b18b2aa51459671e590b01714385286321.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "6613a0c132436823bd5bf662",
            sorting: 150,
          },
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb93b83545d0366ac477a",
            sorting: 1350,
          },
          {
            category_id: "65f57d670046ce5ac1dfd6ab",
            sorting: 6,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 22,
            status: true,
          },
        ],
        name: "برنجلز ديلي شيبس بطعم البيتزا 200جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956520985",
        price: "0.950",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/f30657b4fbc724bf61495357cd525db31714383608092.jpeg",
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 28,
            status: true,
          },
        ],
        prod_n_categoryArr: [
          {
            category_id: "6613a0c132436823bd5bf662",
            sorting: 140,
          },
          {
            category_id: "5d39447783545d0366ac42e4",
            rank_id: "5d3eb93b83545d0366ac477a",
            sorting: 1340,
          },
          {
            category_id: "65f57d670046ce5ac1dfd6ab",
            sorting: 5,
          },
        ],
        name: "برنجلز ديلي شيبس بطعم الجبن والبصل 200جم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956620403",
        price: "1.390",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "5d383ab883545d0366ac42b9",
            rank_id: "63a41091baa18b0b22c2057f",
            sorting: 5361,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 0,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/4/29/37784e9951dc537a1ab0b9cd24cca57e1714382164159.jpeg",
        name: "اكادونيا اردني فلين 800جم",
        availability: false,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        sku: "99956542955",
        price: "0.755",
        show_discount_percentage: true,
        picture:
          "https://media.jm3eia.com//2024/4/29/9c2be41bc41038b009d73bfb75ac8fd31714379683037.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "5d383f0b83545d0366ac42da",
            rank_id: "5d3eb89883545d0366ac4772",
            sorting: 8600.1,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1,
            status: true,
          },
        ],
        old_price: "0.920",
        name: "نابسكو بسكويت شيبس اهوي بقطرات الشوكولاتة 128جم 2حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069208",
        price: "0.800",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/d3f4e8167c965388e5e2b5cc45484fdc1714422662565.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "فطيرة دجاج فيليه",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069207",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/2e79e243f6b960ebf0c7d17f0918d19f1714422621520.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "نقانق كاتشب ومايونيز وجبن",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069206",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/21aeda5e55d27df03f68b5a6af53c1311714422607290.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "نقانق كرافت",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069205",
        price: "0.300",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/89c5bfe2aa9ee8e4d56363015574368d1714422561665.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "نقانق سادة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069204",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/fbc04330169aa99a63bfa92a81a55b891714422526619.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مرتديلا كرافت",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069203",
        price: "0.300",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/bf050da5effec2368186173419c07cba1714422426013.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مرتديلا سادة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069202",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/32336f080ddbd2ab16a0a9bea44910561714422198127.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لحم دقوس",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069201",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/8449027a370a491b8262f416b702cd131714243158553.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لحم بدبس رمان",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069200",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/293df9735f85e47cda8d1fca3e073bdf1714243290521.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "فطيرة لحم بالسبانخ",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069199",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/9bb297a6025378fdc51e7839f87295ce1714243453665.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a79afe84d78852062d86b",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "فطيرة مسحب بالجبن والدجاج",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069198",
        price: "1.750",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/a4f3d889370269b395353a275fbd57dc1714243638811.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة سبانخ",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069197",
        price: "2.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/2b0460b004e7cc7f94125b2f41addd4f1714244272410.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة لحم",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069196",
        price: "2.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/8de761e2c8cc54c75189c5d4428fc96a1714245590308.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة حلومي سبيشيال",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069195",
        price: "2.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/f02715247195401fcf7ae5c4e03342531714245713579.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة عكاوي",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069194",
        price: "2.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/2ebd6d9b175662b46dc973ec5d8fde641714245930394.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة زعتر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069193",
        price: "2.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/9c9666434613e96de3df8a0c762fa7141714246163723.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة بيتزا",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069192",
        price: "2.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/1a2c6e401cd32b2ab9cdc5a2f531815b1714247277206.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7982e84d78852062d864",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "دزينة مشكلة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069191",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/cd36f86fa4d04b92319bcd163f912d741714247450269.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 260,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "ميكس جبن",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069190",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/d0a700d70876d09a568ec7123ea213ae1714421799794.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 250,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "كرافت وعسل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069189",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/d1172b61c8ec31177d97c1ff6aa3f9031714247941450.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 240,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "نوتيلا",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069188",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/59ed8b85014156fec8157b9c867947391714421752679.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 230,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "قشطة وعسل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069187",
        price: "0.450",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/39f1783fb91a4ca8f36b85ac2b9fe5441714421732633.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 220,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيض وكرافت",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069186",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/0de611f42337ef5318231b165416cade1714421703217.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 210,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "جبن وزعتر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069185",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/a15abbe69bcbd3257d30fa0c40561f7e1714248623121.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 200,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لبنة فلافل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069184",
        price: "0.450",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/683206abd98394d3b81f665260d597681714421649675.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 190,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "جبنة قشقوان كامل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069183",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/7b1bdc83a9cb5719f68f0718050ba1e01714421628736.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 180,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "جبنة قشقوان",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069182",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/1c1b7a681c3fc73e7f18b3758cfe7b7d1714249178598.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 170,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "كرافت بالنعناع",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069181",
        price: "0.400",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/fda3f9f3a785ce25c507f0e7375be7dd1714421587790.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 160,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لبنة كامل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069180",
        price: "0.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/11357a48a52622c380144dde732d18ab1714421548095.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 150,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لبنة بالزعتر",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069179",
        price: "0.300",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/3235f097f428521e897ebf7d9857b2c01714421517975.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 140,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "لبنة سادة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069178",
        price: "0.300",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/04fba0a7e88bff731d74c5b2661b3f431714421485944.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7934e84d78852062d85f",
            sorting: 130,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "جبنة حلوم سادة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069086",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/b32599e53ca85a8cb4e6705dfdf59f901714249337874.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3000,
            status: true,
          },
        ],
        name: "بيتزا ميكس لحوم",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069082",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/d7345f59fb0937ee7301391d4c58d5b11714248895078.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا تشكن فيليه",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069078",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/7159a17765a14475bb7af6572453f5e81714248359349.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا مكس اجبان",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069074",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/262608d9ab805f10673db915c73962de1714248034035.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا مرتديلا",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069070",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/4ba243d52a70a27e6a96133780d9fe7b1714247830189.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا نقانق",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069066",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/e2c5bf08c6f4ce5b6d7eb35769434f5f1714247545834.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا لحم",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069062",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/cbee199a07fd0a28fa3ea9db2c4ef5d91714413567179.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا ببروني",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069058",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/f3162125b81908415bc8db46bb42c4ad1714246994605.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا مارجريتا",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069054",
        price: "1.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/4fb3c8294f2cd1989b3c6002fca4a8df1714246640278.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7902e84d78852062d85b",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بيتزا خضار",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069050",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/8636c74fc6d89405f2172da8013d313e1714244956923.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 280,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت نوتيلا",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069049",
        price: "2.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/23f6aa977b6633662fd7dd712d4467d81714413444550.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 270,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت بيتزا على الطريقة المصرية",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069045",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/086e60bd022639e8180334fb11b1e6591714244052130.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 260,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت لحم",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069041",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/a3608d303b93c87134c8559de21c9e2d1714243711207.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 250,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت دجاج",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069037",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/fa90a63c53d5652e4c749b0cf0e65ed31714243388862.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 240,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة حلوم كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069033",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/a452c3036724110fe3a0f8e7d0f7566b1714242747104.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 230,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت الباص",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069029",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/79c8debd51a5bc55f0f6d9d97a7dcd191714242215249.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 220,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت زعتر كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069025",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/478cd1ce8f38875249b86335af0485251714240727977.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 210,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت قشطة وعسل ومكسرات",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069021",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/10f52b2d807d9c86e0c5d98aae3e31171714240489456.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 200,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت سادة مكسرات وعسل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069017",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/6da5b395d1b8868ac8aae02961044aa01714240049647.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 190,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت قشطة وعسل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069013",
        price: "2.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/30/08048f769fcfdced5955f40e83407bad1714511288786.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 180,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت بيتزا خضار",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069009",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/3fc9b354400f440286f863d40443f0e81714239262823.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 170,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت لبنة كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069005",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/506707d559f83a66d3fa5d1a723b20131714238918277.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 160,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت لبنة بالزعتر",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069001",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/9979cdb23ec1a585f0c9158e5175bb821714238423810.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 150,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3000,
            status: true,
          },
        ],
        name: "مشلتت جبنة فيتا مالحة",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068997",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/43a8d29415fa604b1d6ec6652b24a0641714236838579.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 140,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة عكاوي كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068993",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/5d1f5ebdccb7ed6032d590548139ebe11714236266876.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 130,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبن عكاوي سادة",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068989",
        price: "1.700",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/0223b8ce0d41cc19587fe7de86820a791714235829719.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 120,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة موزاريلا كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068985",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/fd9ff66ad398b2b192c78811ea60031e1714409249827.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 110,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 3000,
            status: true,
          },
        ],
        name: "مشلتت جبن موزاريلا سادة",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068981",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/31bc78a03b97f13259933a0502e6cae11714409132194.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 100,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت بيض مع جبنة عكاوي",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068977",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/0d630edf276df1180d8658fa94cfdbe81714313188735.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 90,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت بيض مع جبنة فيتا",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068973",
        price: "1.250",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/d78916360216a9eca7bac8f8b9bc60721714233559888.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 80,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت بيض سادة",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068969",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/008077044835fad4bff4381c9399ef0c1714233274191.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة كرافت كامل",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068961",
        price: "1.350",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/83c0ea48c631159960c502a1ba7ff57a1714408613325.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة كرافت سادة",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013068965",
        price: "1.500",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/27/82568fe947d30c8f9c0da8be3a042be51714232129453.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a78d8e84d78852062d855",
            sorting: 60,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "مشلتت جبنة كرافت مرتديلا",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069146",
        price: "0.750",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/29067a146512a0eb4436d5f47d32efaa1714422752627.png",
        prod_n_categoryArr: [
          {
            category_id: "662a7b81e84d78852062d88f",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "سكرية",
        availability: true,
        has_variants: true,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662a7817e84d78852062d843",
        sku: "130013069145",
        price: "0.750",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/29/177f9bcbf4b4322e571e93c5205902211714420706002.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662a7a21e84d78852062d876",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 1000,
            status: true,
          },
        ],
        name: "بطاطا ويدجز",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993602",
        price: "15.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/7dec0ae0662fa39f2aa1405e71ec66a91714337238385.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e284be84d78852062e216",
            sorting: 15,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر خمرية سيكريت معطر الشعر للنساء 90مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993601",
        price: "15.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/328ea60e5211ec50f0f06c697a3c8a881714337157826.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e284be84d78852062e216",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر خمرية مسك العروس معطر الشعر للنساء 90مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993600",
        price: "15.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/102f4dba57bf32850b2f47f798de389f1714337040609.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e284be84d78852062e216",
            sorting: 5,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر خمرية كنوز معطر الشعر للنساء 90مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993599",
        price: "35.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/16008231900d383076d4bd54c02f45e21714336966557.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر باتشولي او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993598",
        price: "35.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/1914ff94be4273d472cd2f8bb978026d1714336860447.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 45,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر عنبر الحوت او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993597",
        price: "35.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/37bf62bece682bb154c67ba8b92654831714336796704.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر كسرة عود او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993582",
        price: "30.000",
        show_discount_percentage: false,
        prod_n_categoryArr: [
          {
            category_id: "662e284be84d78852062e216",
            sorting: 5,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/4/28/f0a9e25180612a61b0ff187a06e285821714327336916.jpeg",
        name: "كولكشن عطور الشعر للنساء 90مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993596",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/d196904b981e20efcaf35230c45ddf821714336723552.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 35,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر ريماج او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993581",
        price: "20.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/5c69573e66f6a4a7ec50c835cc054b3c1714326270693.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2a11e84d78852062e23b",
            sorting: 5,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مبخر كنوز الطيب",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993595",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/481c676b0f936f978a00802b7c2ebd331714336644329.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر العود الازرق او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993580",
        price: "18.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/2513df24b8000eb7ac7e9c1a3ffbc5c21714325969171.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مجموعة المسك للنساء نصف تولا 3حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993594",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/77c878b555892a01a4cb934c6c8f5a1d1714336557825.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 25,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر لندن او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993579",
        price: "28.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/326c97146ed3648c79026cea721085461714325595438.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 70,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "بوكس ميني عطور كولكشن للجنسين 30مل 4حبة",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993593",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/26198c63f25fa91466955b8ef97252f01714336493570.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر مروج او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993592",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/6f96775d9755aa9d612d3901981e1f251714336428323.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 15,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر كنوز او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993578",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/446481514eedda6f85ecb738c711c1351714321885857.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 35,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش الجمال العربي 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993591",
        price: "25.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/86d0e4a70bd16f6dc58518d976e2b7ac1714335628136.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر الجمال العربي او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993577",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/77b2c942424bb44b47581f0e5d52b0eb1714322001534.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 30,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش لاروزا 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993590",
        price: "35.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/8eab7dbd810cf8e0f41e07750d5a21671714332005729.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e27d6e84d78852062e20d",
            sorting: 5,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر اوفر دوز او دي برفيوم للجنسين 100مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993576",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/6c77c64fe1e8dd70417458f8ffc0fb5b1714322143596.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 25,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش مسك وعود 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993575",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/a7325fa731de05bff67b821b20861be11714322323303.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 20,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش فورسيزون 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993589",
        price: "16.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/98d9ee260270cca3cc1cbbf5a7178fc21714331792093.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 50,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر فيلفت روز او دي برفيوم للجنسين 50مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993574",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/4da0c1a4572521ec0e86068c11a2e9d91714322521235.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 15,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش بلاك عود 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993573",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/1b5facc5947bd87cfcb3f1ccded1a09c1714322637163.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 10,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش مروج 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993588",
        price: "16.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/e3f5996cb0a7ba158b6b8b0e03080d271714331629921.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 45,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر دارك عود او دي برفيوم للجنسين 50مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993572",
        price: "6.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/e445f9def63453dcb9c2b63f74c6af811714322796568.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e2870e84d78852062e21c",
            sorting: 5,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مرش سكرت 500مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993587",
        price: "16.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/92146e0e10d970116c100ad59c1ef2e51714331499040.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 40,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر عود سنو او دي برفيوم للجنسين 50مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993586",
        price: "16.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/665f6336d4b85ddc3ff5deeecbe020401714331306641.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 35,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "عطر مسك وعود او دي برفيوم للجنسين 50مل",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
      {
        supplier_id: "662e271de84d78852062e204",
        sku: "120112993571",
        price: "12.000",
        show_discount_percentage: false,
        picture:
          "https://media.jm3eia.com//2024/4/28/0dfb4c13700c81700b0c6417068b5b591714323828673.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "662e29dbe84d78852062e237",
            sorting: 15,
          },
        ],
        prod_n_storeArr: [
          {
            store_id: "5d3827c683545d0366ac4285",
            quantity: 50,
            status: true,
          },
        ],
        name: "مسك التوت للنساء 1تولا",
        availability: true,
        has_variants: false,
        max_quantity_cart: 0,
        old_price: "0.000",
        cart_status: {
          is_exists: false,
          quantity: 0,
        },
        wishlist_status: {
          is_exists: false,
        },
      },
    ],
  },
};

/// list of stores
export const listStores = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    count: 1,
    data: [
      {
        _id: "6420915a99da0ea02d0ecf39",
        name: "متاجر متنوعة",
        picture:
          "https://media.jm3eia.com//2024/3/4/5bd649d878ec0dee93db8d082a21e15c1709549397732.jpeg",
        logo: "https://media.jm3eia.com//2023/4/10/08231154aecfcc0fe2b4f21b21ef346e1681144676031.png",
        suppliers: [
          {
            _id: "648479474e9e6379c835aba2",
            delivery_time: 30,
            delivery_time_text: {
              ar: "",
              en: "",
            },
            app_delivery_time: "120",
            min_order: 10,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 72,
            shipping_cost: 1,
            name: "جملة جمعية",
            description: "جملة المواد الغذائية والإستهلاكية ",
            logo: "https://media.jm3eia.com//2023/10/9/64813fc0e582f4a9093d2b1ba04dd4ba1696835519976.jpeg",
            picture:
              "https://media.jm3eia.com//2023/10/17/525e39efa1d052a23780d005108138d11697537160216.jpeg",
            isOpen: true,
          },
          {
            _id: "6522ebef32070db473130051",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within 1hours",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.1,
            reviews_count: 8,
            shipping_cost: 1,
            home_sorting: 110,
            name: "نقصتنا",
            description: "خضراوات وفواكة ",
            logo: "https://media.jm3eia.com//2024/2/5/a4d5cb99958ae7aa5909d658d0b415ed1707133303173.png",
            picture:
              "https://media.jm3eia.com//2023/10/9/968cd6ffa333dbe69c4fa90f24d65f981696854929935.jpeg",
            isOpen: true,
          },
          {
            _id: "6589a9ecda58a47c6a90ec79",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 4,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "شاورما كت",
            description: "اطعمة و مشروبات",
            logo: "https://media.jm3eia.com//2023/12/25/31b4b05f316527e5c93981ec991865951703520546906.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65903ff6cf38293bbdae8f8c",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 4,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 5,
            reviews_count: 2,
            name: "فروت كت",
            description: "اطعمة و مشروبات",
            logo: "https://media.jm3eia.com//2023/12/30/407c2fa840da2f44ad5259a27f49b2771703952085542.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65108566bd5f8229f112a83f",
            delivery_time: 30,
            delivery_time_text: {
              ar: "",
              en: "",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.6,
            reviews_count: 1,
            shipping_cost: 1,
            name: "قرين جار الغذائية",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2023/9/24/7a64a24681c79f7fd6b46b65e8c92b6f1695581497606.jpeg",
            picture:
              "https://media.jm3eia.com//2023/10/5/7b1736eda11fe5f73bc3f7600453d9d61696496726042.jpeg",
            isOpen: true,
          },
          {
            _id: "6595937797f4e58723e786d1",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 3.7,
            reviews_count: 6,
            home_sorting: 120,
            shipping_cost: 1,
            is_busy: true,
            name: "غولو اوغلو",
            description: "حلويات",
            logo: "https://media.jm3eia.com//2024/2/11/60b2c2245bbfa2d6281d032167b787361707661732100.png",
            picture: null,
            isOpen: true,
          },
          {
            _id: "654a09d140bd9e24d3b0b23b",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 5,
            reviews_count: 1,
            shipping_cost: 1,
            name: "ريتمو سويت",
            description: "حلويات ومثلجات",
            logo: "https://media.jm3eia.com//2024/2/1/46fb699ac1808f8da183eb18e270ec191706800990077.jpeg",
            picture:
              "https://media.jm3eia.com//2023/11/7/de73f74c0fa03206ae384fa9214c7e6c1699352193459.jpeg",
            isOpen: true,
          },
          {
            _id: "641ff79d402ff4952a8192b8",
            delivery_time: 30,
            delivery_time_text: {
              en: "Delivery within 24 Business Hours",
              ar: "توصيل خلال 24ساعة عمل",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            app_delivery_time: "1440",
            avg_rating: 5,
            reviews_count: 22,
            shipping_cost: 1,
            name: "بست اليوسفي",
            description: "الكترونيات",
            logo: "https://media.jm3eia.com//2024/2/5/6c6828e7dd2bb36997c3f0454886affe1707131660861.png",
            picture:
              "https://media.jm3eia.com//2023/4/16/ae1e71b35665a0b5e4d5b4f0919b23591681643717354.jpeg",
            isOpen: true,
          },
          {
            _id: "64b5141e00672b1cf3c2ecd5",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 72 ساعة عمل",
              en: "Delivery within 72 Business hours",
            },
            app_delivery_time: "4320",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 4,
            shipping_cost: 1,
            name: "البابطين",
            description: "الكترونيات",
            logo: "https://media.jm3eia.com//2023/7/17/4a02d6f7ad1a61acb95f5c5dba96f98c1689589595436.png",
            picture:
              "https://media.jm3eia.com//2023/8/3/403d0bb7c9aadec408912dc4ddf37bdf1691068251947.jpeg",
            isOpen: true,
          },
          {
            _id: "6530161c5b6f8aa16104a1ed",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعتين",
              en: "Delivery within 2hours",
            },
            app_delivery_time: "120",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            avg_rating: 4.9,
            reviews_count: 3,
            name: "هاتف 2000",
            description: "الكترونيات واكسسوارات",
            logo: "https://media.jm3eia.com//2024/2/1/2a844802282130259291eb0f37c000c41706801003557.png",
            picture:
              "https://media.jm3eia.com//2023/11/20/77a149206193c246941591407a4b23aa1700483020477.png",
            isOpen: true,
          },
          {
            _id: "656b6cad380a2ff41eff8316",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال 24ساعة عمل",
              en: "Delivery within 24 Business Hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 3,
            is_busy: true,
            name: "سوق السرحان",
            description: "مستلزمات البناء",
            logo: "https://media.jm3eia.com//2023/12/2/864b15e7c68c5dc465ac27c01b22811c1701538625513.jpeg",
            picture:
              "https://media.jm3eia.com//2023/12/20/a2d96bc787768657b817a30484bf8fca1703082637543.jpeg",
            isOpen: true,
          },
          {
            _id: "6474c1962521ce536f32e0e3",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة عمل",
              en: "Delivery within 24Bisunis hours",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            app_delivery_time: "1440",
            avg_rating: 4.9,
            reviews_count: 29,
            shipping_cost: 1,
            name: "تطيب",
            description: "عطور",
            logo: "https://media.jm3eia.com//2024/2/11/9404d196f3766afc475ea2240ee19aef1707674873074.jpeg",
            picture:
              "https://media.jm3eia.com//2023/6/1/00408d1beea5c9f8f8f4035b1ae33cbd1685635433769.jpeg",
            isOpen: true,
          },
          {
            _id: "63a7f0f06ee4c368aec162fd",
            delivery_time: 30,
            delivery_time_text: {
              en: "Delivery within 12 hours",
              ar: "",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            app_delivery_time: "720",
            avg_rating: 5,
            reviews_count: 22,
            shipping_cost: 1,
            name: "الفهود",
            description: "الألعاب الإلكترونية واكسسواراتها ",
            logo: "https://media.jm3eia.com//2023/5/31/4a855ad667f607dc4047b6e8de5b8b981685539697041.png",
            picture:
              "https://media.jm3eia.com//2023/4/16/3ec9516f43ae3e9e42cebf88ebb65de21681645794349.jpeg",
            isOpen: true,
          },
          {
            _id: "64f30f47447463c53f173a5b",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة عمل",
              en: "Delivery within 24 Business hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 3,
            name: "ويمزي",
            description: "العاب الأطفال ",
            logo: "https://media.jm3eia.com//2023/9/2/2e336007aeb5dcb36f73e4370aa5319e1693650722679.jpeg",
            picture:
              "https://media.jm3eia.com//2023/9/17/793cd1f54331f587064a76b1546edc7e1694934752950.jpeg",
            isOpen: true,
          },
          {
            _id: "6540f45a40bd9e24d3b09430",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 3,
            shipping_cost: 1,
            name: "ماجيك زون",
            description: "العاب اطفال",
            logo: "https://media.jm3eia.com//2024/2/11/9fa332f5eecdd5f694edebb56d9fd5711707654765590.png",
            picture:
              "https://media.jm3eia.com//2023/11/12/9ca0e2a386224e7cc1b3fe3e5ac048691699810024867.png",
            isOpen: true,
          },
          {
            _id: "649fd45c06eb2de44d5a6688",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            avg_rating: 4.8,
            reviews_count: 1,
            name: "فولتير",
            description: "دراجات هوائية",
            logo: "https://media.jm3eia.com//2023/8/22/dd084a94415c0875c5221b1d6533bc2b1692698577496.png",
            picture:
              "https://media.jm3eia.com//2023/7/3/3c2826e024f25f593298bdc0a362932c1688407667882.jpeg",
            isOpen: true,
          },
          {
            _id: "653a108512d7b28da71cb19b",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.5,
            reviews_count: 1,
            home_sorting: 200,
            shipping_cost: 1,
            name: "جست بورن",
            description: "مستلزمات اطفال",
            logo: "https://media.jm3eia.com//2023/11/12/ccc0a3a86f432d9dcfd6c3f542eec34c1699810741937.jpeg",
            picture:
              "https://media.jm3eia.com//2023/10/28/f61f58dee3f083486c759fef4f2610ed1698511475409.jpeg",
            isOpen: true,
          },
          {
            _id: "64e5beb569902503116e4d9e",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة عمل",
              en: "Delivery within 24 Business hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 1,
            home_sorting: 160,
            name: "بيير كاردان باريس",
            description: "أدوات تجميل",
            logo: "https://media.jm3eia.com//2024/4/22/c00e2e479bd185e4d7e1f77e95d51aa21713801602815.jpeg",
            picture:
              "https://media.jm3eia.com//2023/9/14/ad3710223c0d8fb24c968c85182538c21694679265775.jpeg",
            isOpen: true,
          },
          {
            _id: "651c5166bd5f8229f112d4c7",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 48ساعة عمل",
              en: "Delivery within 48 Business Hours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 23,
              },
            ],
            avg_rating: 4.5,
            reviews_count: 1,
            shipping_cost: 1,
            name: "دييييلز دوت كوم",
            description: "ادوات التجميل",
            logo: "https://media.jm3eia.com//2024/2/11/2f3d228ce68d31ff8f37b2b4913e5c711707654191983.png",
            picture:
              "https://media.jm3eia.com//2023/10/17/93c5c7c7e19921c54801c8514e09338d1697555512526.jpeg",
            isOpen: true,
          },
          {
            _id: "65353273a0ac397c120d559b",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery Within 1Hours",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 1,
            shipping_cost: 1,
            name: "متجر حواء",
            description: "اكسسوارات",
            logo: "https://media.jm3eia.com//2024/2/11/2bc755dfb3928ebe12b491394b9bcdff1707655371349.png",
            picture:
              "https://media.jm3eia.com//2023/10/28/744f9565f6fda497a63ac875d915379a1698477838396.jpeg",
            isOpen: true,
          },
          {
            _id: "6542858a40bd9e24d3b099a0",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            avg_rating: 5,
            reviews_count: 1,
            name: "اني تايم اني وير",
            description: "مستلزمات العناية بالجسم",
            logo: "https://media.jm3eia.com//2024/2/11/59e862a7f4beaa4846e9f85ca6b3abff1707654261971.png",
            picture:
              "https://media.jm3eia.com//2023/11/18/c309e9fea1e3d9b6a379c330762ae3861700328528367.jpeg",
            isOpen: true,
          },
          {
            _id: "6469dacdc0f1121b18c18241",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 48 ساعة عمل",
              en: "Delivery within 48 Businesshours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 12,
            shipping_cost: 1,
            name: "زد ستايل",
            description: "اكسسوارات",
            logo: "https://media.jm3eia.com//2024/2/11/fdf81591c491953bc101fef426e6a1511707658652726.jpeg",
            picture:
              "https://media.jm3eia.com//2023/6/9/4673a15de76f62adb0b3c2056c7e2ec91686330150865.jpeg",
            isOpen: true,
          },
          {
            _id: "6476e3c271e3a99bd01e5bbb",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 48 ساعة عمل",
              en: "Delivery within 48 Business hours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 60,
            shipping_cost: 1,
            name: "التلاقي",
            description: "الكترونيات و اكسسوارات",
            logo: "https://media.jm3eia.com//2023/8/22/48aeef7730ae3d7d01a49fec9101e8961692697057279.png",
            picture:
              "https://media.jm3eia.com//2023/6/4/e018f1476bc6791ba91823f9da4c9cb61685902803799.jpeg",
            isOpen: true,
          },
          {
            _id: "651bc9b0bd5f8229f112d282",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24ساعة عمل",
              en: "Delivery within 24 Business Hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.7,
            reviews_count: 1,
            shipping_cost: 1,
            name: "اسيا وافريقيا",
            description: "الكترونيات واكسسوارات",
            logo: "https://media.jm3eia.com//2024/2/11/b35e910f349c8c510d5332b797b5b7271707654026577.png",
            picture:
              "https://media.jm3eia.com//2023/10/18/865e71bfa36a2dd580263bc09440da2c1697639640646.png",
            isOpen: true,
          },
          {
            _id: "63fb173fc8be5d1f6c05e5ec",
            delivery_time: 30,
            delivery_time_text: {
              en: "Delivery within 48 Business hours",
              ar: "توصيل خلال 48ساعة عمل",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            app_delivery_time: "2880",
            avg_rating: 5,
            reviews_count: 20,
            name: "تكستور",
            description: "كاميرات",
            logo: "https://media.jm3eia.com//2024/2/11/eb16470d400846cea2dc3677445392941707654073073.png",
            picture:
              "https://media.jm3eia.com//2023/4/16/0742da399eea6722f632971d7697c03c1681646696308.jpeg",
            isOpen: true,
          },
          {
            _id: "6508038fccb2723ae990ce02",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 1,
            shipping_cost: 0.5,
            name: "الخمسان وبهاسين",
            description: "مستلزمات المنزل ",
            logo: "https://media.jm3eia.com//2024/2/20/18a4fd40c8d1d6d8e380e2eb5fafc9c81708422611082.png",
            picture:
              "https://media.jm3eia.com//2023/9/27/8e40642ce9d1014eca7b3a59ba9874381695838026934.jpeg",
            isOpen: true,
          },
          {
            _id: "63e79c308cb0258001af6d27",
            delivery_time: 30,
            delivery_time_text: {
              en: "Delivery within 24 Business hours",
              ar: "التوصيل خلال 24 ساعة عمل",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 5,
            reviews_count: 20,
            app_delivery_time: "1440",
            shipping_cost: 1,
            name: "الغالي",
            description: "ديكورات",
            logo: "https://media.jm3eia.com//2023/8/22/4d9f6dc64d7c6b84126e46b60d45f3831692698402682.png",
            picture:
              "https://media.jm3eia.com//2023/5/30/515c977d619e79201ee78d8658b8af8a1685468874289.jpeg",
            isOpen: true,
          },
          {
            _id: "646b54f4ea80a77b177e083d",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال يومين ",
              en: "Delivery within 2 Days",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 7,
            shipping_cost: 1,
            name: "فريمات",
            description: "لوحات جدارية",
            logo: "https://media.jm3eia.com//2024/2/11/5cd913e9b1659f4e04f49e043e5d272a1707658471172.jpeg",
            picture:
              "https://media.jm3eia.com//2023/5/30/801d956f67c1e3ed262a121951fda6521685465553425.jpeg",
            isOpen: true,
          },
          {
            _id: "64885f9c8d2e79d7276234bf",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة عمل",
              en: "Delivery Within 24 Business Hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 13,
            shipping_cost: 1,
            name: "لوفال ",
            description: "معطرات و فواحات",
            logo: "https://media.jm3eia.com//2024/2/11/4aeca6d2628f4b4dfd9cf7ae3115ad011707654690258.jpeg",
            picture:
              "https://media.jm3eia.com//2023/6/15/61542c1dd419119522c981c9d9e6336e1686841174141.jpeg",
            isOpen: true,
          },
          {
            _id: "64314e3275efb32c5ecf849d",
            delivery_time: 30,
            delivery_time_text: {
              ar: "",
              en: "",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            app_delivery_time: "1440",
            avg_rating: 5,
            reviews_count: 20,
            shipping_cost: 1,
            is_busy: false,
            name: "الماسة",
            description: "عطور",
            logo: "https://media.jm3eia.com//2024/2/11/94849d1739363c41cd3a092dc6ed8fad1707674720126.jpeg",
            picture:
              "https://media.jm3eia.com//2023/5/22/bebf019af2a0fa2d900f74cf45ba988c1684777831501.jpeg",
            isOpen: true,
          },
          {
            _id: "6469ddcec0f1121b18c18248",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 48 ساعة عمل",
              en: "Delivery within 48 Business hours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 51,
            shipping_cost: 1,
            name: "الرفاعي",
            description: "عطور",
            logo: "https://media.jm3eia.com//2024/2/11/d124a5de5d96eba08a8553466af313741707674987934.jpeg",
            picture:
              "https://media.jm3eia.com//2023/5/22/c9f365a11122d3d7657cc13141e612731684775471463.jpeg",
            isOpen: true,
          },
          {
            _id: "651975a6bd5f8229f112cc7f",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 1,
            shipping_cost: 1,
            home_sorting: 185,
            name: "العفاسي للعطور",
            description: "عطور",
            logo: "https://media.jm3eia.com//2024/2/11/44a6c599e3d5c5a805a0c15b084c5ce81707656618712.jpeg",
            picture:
              "https://media.jm3eia.com//2023/10/24/618bed101ffb245bc66dcb501fcfbbf11698168981918.jpeg",
            isOpen: true,
          },
          {
            _id: "642ea99b7283b146e1fa2f59",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 48 ساعة عمل",
              en: "Delivery within 48 Business hours",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 5,
            reviews_count: 20,
            app_delivery_time: "4320",
            shipping_cost: 1,
            name: "العيسى",
            description: "معدات طبية",
            logo: "https://media.jm3eia.com//2024/2/11/2fe21f37fe999863d8bd6c96fd5625291707675241819.jpeg",
            picture:
              "https://media.jm3eia.com//2023/5/31/d66b99d59b46c7ab29de2dab98738b1c1685522759513.jpeg",
            isOpen: true,
          },
          {
            _id: "647ee4cf4e9e6379c835a086",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 48 ساعة عمل",
              en: "Delivery within 48 business hours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 5,
            shipping_cost: 1,
            name: "فارمتي",
            description: "فيتامينات و اجهزة طبية",
            logo: "https://media.jm3eia.com//2024/2/11/b30ab013bb2399e96af265a930637b1f1707675411258.png",
            picture:
              "https://media.jm3eia.com//2023/8/15/511bf47c3f444dcac6868cf44207d9961692098392793.jpeg",
            isOpen: true,
          },
          {
            _id: "64f3197c447463c53f173ab1",
            delivery_time: 30,
            delivery_time_text: {
              ar: "سوف يتم تحديد الموعد عند تأكيد الطلب",
              en: "The appointment will be scheduled upon order confirmation.",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            avg_rating: 4.5,
            reviews_count: 1,
            name: "برونتو واش",
            description: "غسيل السيارات ",
            logo: "https://media.jm3eia.com//2023/9/6/7bb90fdad19fa3306796b5051122a1ca1693996661117.jpeg",
            picture:
              "https://media.jm3eia.com//2023/9/14/80ad3c30090198abbd152b124a3d70051694680115760.jpeg",
            isOpen: true,
          },
          {
            _id: "6500b2429c3481b96fef333e",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 48 ساعة",
              en: "Delivery within 48Hours",
            },
            app_delivery_time: "2880",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 22,
              },
              {
                week_day: 5,
                from: 0,
                to: 0,
              },
              {
                week_day: 6,
                from: 8,
                to: 24,
              },
            ],
            shipping_cost: 1,
            avg_rating: 4.7,
            reviews_count: 1,
            name: "فينوس",
            description: "ادوات صحية",
            logo: "https://media.jm3eia.com//2024/2/11/e287b0532a53737824138ed316da4db41707654146591.jpeg",
            picture:
              "https://media.jm3eia.com//2023/10/10/6043de239c33f537b73b9bcf4c06bab61696922724767.jpeg",
            isOpen: false,
          },
          {
            _id: "65019d4e42ef6d3e38a86361",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24ساعة عمل",
              en: "Delivery within 24 Business Hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.5,
            reviews_count: 1,
            shipping_cost: 1,
            name: "مصابغ غسالة",
            description: "الغسيل والكي",
            logo: "https://media.jm3eia.com//2023/9/13/8dd6872a6d7e275375893eb47bbf02631694604535085.jpeg",
            picture:
              "https://media.jm3eia.com//2023/9/23/3e7f45e65cff004f13577887275873941695477862258.jpeg",
            isOpen: true,
          },
          {
            _id: "6478352c71e3a99bd01e61e2",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 45 دقيقة",
              en: "Delivery Within 45 Minutes",
            },
            app_delivery_time: "45",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.7,
            reviews_count: 61,
            shipping_cost: 1,
            name: "روز ستايل",
            description: "ورد طبيعي",
            logo: "https://media.jm3eia.com//2024/2/11/980c4d5f8d7b6c8f8bed47f91984e0e71707655539279.png",
            picture:
              "https://media.jm3eia.com//2023/6/5/71c528249b63beaef5452bf5195e815c1685981351278.jpeg",
            isOpen: true,
          },
          {
            _id: "6478bd5671e3a99bd01e646e",
            delivery_time: 30,
            delivery_time_text: {
              ar: "",
              en: "",
            },
            app_delivery_time: "120",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.7,
            reviews_count: 42,
            shipping_cost: 1,
            name: "روز فور اوول",
            description: "ورد طبيعي",
            logo: "https://media.jm3eia.com//2024/2/11/d06628b6b0cbe29609b027fbdbc8c53e1707656419643.jpeg",
            picture:
              "https://media.jm3eia.com//2023/6/7/02562a096255745f2cae59afa124c9e91686158485182.jpeg",
            isOpen: true,
          },
          {
            _id: "6484186e4e9e6379c835a9ec",
            delivery_time: 30,
            delivery_time_text: {
              ar: "",
              en: "",
            },
            app_delivery_time: "120",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.8,
            reviews_count: 36,
            shipping_cost: 1,
            name: "الريف الهولندي ",
            description: "ورد طبيعي",
            logo: "https://media.jm3eia.com//2024/2/11/a642991b288d9a6d5808df44e86154cc1707658158071.png",
            picture:
              "https://media.jm3eia.com//2023/6/13/925da491a734f7410ffe2196e03b73211686667939771.jpeg",
            isOpen: true,
          },
          {
            _id: "647442452521ce536f32dd31",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال ثلاثة أيام عمل",
              en: "Delivery within 3 Business days",
            },
            app_delivery_time: "4320",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            avg_rating: 4.9,
            reviews_count: 13,
            shipping_cost: 1,
            is_busy: true,
            name: "بالاس",
            description: "اثاث منزلي",
            logo: "https://media.jm3eia.com//2023/8/22/d88f3691f2c14ee97e52b35f258630131692698066382.png",
            picture:
              "https://media.jm3eia.com//2023/6/5/8488ca21d9b7623c551484eea1cc99301685973447741.jpeg",
            isOpen: true,
          },
          {
            _id: "6502ade8103a38ddb5820603",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة",
              en: "Delivery within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "بيوتي كير ",
            description: null,
            logo: "https://media.jm3eia.com//2023/9/14/ce919c3fa5bce7ec106e2a8e25c5870d1694677236084.jpeg",
            picture: "",
            isOpen: true,
          },
          {
            _id: "65740918cffde98b77e84223",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة عمل",
              en: "Delivery Within 24 Business Hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "فيفينزا",
            description: "عطور ومواد تجميل",
            logo: "https://media.jm3eia.com//2023/12/26/c71f8d4416b59b8af100e84cce58ab331703589883182.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "657482dbcffde98b77e844f6",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 4,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            home_sorting: 82,
            shipping_cost: 1,
            name: "توتا سوشي",
            description: "مأكولات يابانية",
            logo: "https://media.jm3eia.com//2023/12/9/ad67f1949447ac907578967c9dabce491702133919184.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "6589befdda58a47c6a90eec0",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 4,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "اصل الكنافة ",
            description: "حلويات",
            logo: "https://media.jm3eia.com//2023/12/25/c97113b8aca53ae95b82f1f4e6aacd6b1703525928414.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "6576f70ecffde98b77e85ea1",
            delivery_time: 30,
            delivery_time_text: {
              ar: "سوف يتم تحديد الموعد عند تأكيد الطلب",
              en: "The appointment will be scheduled upon order confirmation.",
            },
            app_delivery_time: "0",
            min_order: 1,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 0,
            name: "ليدر رايد",
            description: "زينة واكسسوارات السيارات",
            logo: "https://media.jm3eia.com//2024/2/11/a9913415018cf70e6e41eae36361f3f51707656549177.jpeg",
            picture:
              "https://media.jm3eia.com//2023/12/17/0c8ff8df1c43fc6b28f3adde67970e331702802051568.jpeg",
            isOpen: true,
          },
          {
            _id: "6596cf7d97f4e58723e79376",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال ساعتين",
              en: "Delivery within 2 hours ",
            },
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            app_delivery_time: "120",
            shipping_cost: 1,
            home_sorting: 130,
            name: "صيدلية دينا",
            description: null,
            logo: "https://media.jm3eia.com//2024/1/4/0544e770f1ce1ace9abf9420ac13adbe1704382427026.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65a5c6e86f8a90a4e57ada9b",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال 24ساعة عمل",
              en: "Delivery within 24 business hours",
            },
            app_delivery_time: "1440",
            min_order: 10,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "وي تليكوم",
            description: null,
            logo: "https://media.jm3eia.com//2024/1/15/60ee253475b6ce79928b5dbacc77c9ec1705363038781.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65c692862ad7b1d993b9e7aa",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "النسائم",
            description: "مستلزمات العناية بالجسم",
            logo: "https://media.jm3eia.com//2024/2/9/1ce6dfc0bee8e83c2908737a3ff39f821707512954765.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "659cac8e58be1d82a32f3752",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 Hours",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "فيلا بابك",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/9/fd65770f0ea4493a9862950842db7be91704765806201.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "659cae8e58be1d82a32f3754",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "مجبوس اكسبرس",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/9/23712c4b53c20613763c7faf98226e7b1704766840745.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "659fd2f06f8a90a4e57aa3e8",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "كباب جريل هاوس",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/11/b88c737dcde1b7e651d827cddd9ec7ef1704961752744.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65ab87936f8a90a4e57b048c",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "سبيريت هيلث كير",
            description: "",
            logo: "https://media.jm3eia.com//2024/1/20/73e51cd6391142bc79571ba79f07ace11705740302965.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65bb57070458efe0089debce",
            delivery_time: 30,
            delivery_time_text: {
              ar: "توصيل خلال 24 ساعة",
              en: "Delivery within 24 hours",
            },
            app_delivery_time: "1440",
            min_order: 10,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "جراند ميد",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/1/4fd828ee2cf3c4e8ef3671477f5e6f641706776486660.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "659ffb686f8a90a4e57aa4fe",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "بابك",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/11/a61a39cd1c65522c2c036e27e15c16c51704983367037.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65a00f226f8a90a4e57aa76f",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "جنكي سوشي",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/11/ef84983ef871b8abd36dec470313f1231704986063597.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65a012486f8a90a4e57aa7c8",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "توصيل خلال ساعة",
              en: "Delivery within 1 hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "ذا دراجون",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/1/11/e5e23730b03f29dfb4b084a2353d753a1704989133064.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65cb356b2e969fc1243e4215",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 3 ساعة",
              en: "Delivery within 3 hour",
            },
            app_delivery_time: "180",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "صيدلية تشافي هيلث",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/13/233fcf987e40facaab375fec4543ba0d1707816288962.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65cd00b3a99780488fbe5d63",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعتين",
              en: "Delivery within 2hours",
            },
            app_delivery_time: "120",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "تليفوناتي",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/14/6801da6d1b8fd6fb6098b069b22a205f1707933608313.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65d1cebf3eacf4b7df104538",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 12 ساعة",
              en: "Delivery within 12hours",
            },
            app_delivery_time: "720",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            is_busy: false,
            name: "موبكس",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/9/67b8a62cb3ef030b2d15ee4778cfd0f51709987476485.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65c49385f53e697288097785",
            delivery_time: 30,
            shipping_cost: 0.5,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "طبخ الفريج",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/8/344222d9471dfced12a8f4289d655f8a1707399952609.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65c49e52f53e69728809783c",
            delivery_time: 30,
            shipping_cost: 0.5,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "بيك اند تك",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/2/8/70dd4e2d02d6a7e7d3fdabf3ec530f1d1707400426587.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65c4c7b92ad7b1d993b9e070",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة ونصف",
              en: "Delivery Within  An Hour and a Half",
            },
            app_delivery_time: "90",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "سيدرلاند",
            description: "اطعمة ومشروبات ",
            logo: "https://media.jm3eia.com//2024/2/13/419415fc830c4da81ceadd53982bf9141707849968072.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65d716c6e6a737d6c0497705",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 0,
            name: "فينسي",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/22/b8fa447fceec25fb3cf3a159607100fd1708594475719.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "66005ff243c3c79a4a2667aa",
            delivery_time: 30,
            shipping_cost: 1.5,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "سما فود",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/24/7c5e9021fed1c915c6479ba61afad9fc1711301301731.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65b0bef08d11e7fe0ce532eb",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 12ساعة",
              en: "Delivery within 12hours",
            },
            app_delivery_time: "720",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "تويست",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/21/bfc59ff4d5c630ecc6489663d30656c31708506671972.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65ec80f8a156e7ccc59a5d8d",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery Within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 0,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "بريفادو",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/10/2954293b1e3d0a4145de98d19ea6a9001710079327965.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65ec9d5da156e7ccc59a5ec7",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 6 ساعة",
              en: "Delivery within 6 hours",
            },
            app_delivery_time: "360",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "تشكيلة",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/9/50b278479b42d602da6e3a9e4a98f0df1710005340265.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65f6a22d0046ce5ac1dfdfa9",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery Within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "ليدر",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/17/047c89f10829319a1680a49245b50d721710673544681.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65f9e49f969ed3f995d1883b",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 8ساعة",
              en: "Delivery Within 8hours",
            },
            app_delivery_time: "480",
            min_order: 10,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "هيلثي لايف للمكسرات",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/19/79aab8776d5c7074ab3ab3b4686041701710875597317.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65ef14bbce5c929d26c5344a",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery Within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "ترولى كومال",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/12/8fbc9a63f069cf84276b350b158660ed1710230026540.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "663ca5e143aa83cdba61e7dd",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التتوصيل خلال 1ساعة",
              en: "Delivery Within 1hour",
            },
            app_delivery_time: "60",
            min_order: 5,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "قصر الشيف",
            description: "مأكولات ومشروبات",
            logo: "https://media.jm3eia.com//2024/5/9/932a93157abf66d9ea6547c6361d51841715246342259.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65ecbcf2a156e7ccc59a6101",
            delivery_time: 30,
            shipping_cost: 1,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 8,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "الحلبي",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/10/fea7028d042560fce9cfc01e5dd887681710062667395.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65f9f2a0969ed3f995d1886b",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 2ساعة",
              en: "Delivery Within 2hours",
            },
            app_delivery_time: "120",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "بو100فلس",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/20/739e5af5d287af312c2de795ebe2819b1710941697622.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "662e271de84d78852062e204",
            delivery_time: 30,
            shipping_cost: 0,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery Within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 7,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "كنوز الطيب",
            description: "كنوز الطيب",
            logo: "https://media.jm3eia.com//2024/4/28/89d18fb4c97a1d5e38c8382f41ca14b71714300474074.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "663b6e03f062c2f737ee62ae",
            delivery_time: 30,
            shipping_cost: 0,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery Within 24Hours",
            },
            app_delivery_time: "1440",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "ميزان فارماسى",
            description: "أدوية ومستحضرات تجميل",
            logo: "https://media.jm3eia.com//2024/5/8/a5c14a2e6b54e87c3dfade22289f6afa1715170540851.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65f1f17f82e328b1112c4a80",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 0.5,
            name: "خوخ ومشمش",
            description: null,
            logo: "https://media.jm3eia.com//2024/3/24/2fc3d638a0c674a359d9a5f6d68eb9551711273695102.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "65d9c51d372bec36c1b0e10e",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال 24ساعة",
              en: "Delivery within 24hours",
            },
            app_delivery_time: "1440",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 1,
            name: "اورا كرافت",
            description: null,
            logo: "https://media.jm3eia.com//2024/2/24/342888057a79e982f554547dd4f079711708770509903.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "660521ffdabc62d434ec8845",
            delivery_time: 30,
            shipping_cost: 0.5,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة",
              en: "Delivery within One hour",
            },
            app_delivery_time: "60",
            min_order: 0,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            name: "شاورما فاكتوري",
            description: "",
            logo: "https://media.jm3eia.com//2024/3/26/1aa69ec07591271588914abd8c20e94b1711443140531.jpeg",
            picture: null,
            isOpen: true,
          },
          {
            _id: "660a8a8c32c188fe6fa87120",
            delivery_time: 30,
            delivery_time_text: {
              ar: "التوصيل خلال ساعة ونصف",
              en: "Delivery Within An Hour and a Half",
            },
            app_delivery_time: "90",
            min_order: 3,
            working_times: [
              {
                week_day: 0,
                from: 0,
                to: 24,
              },
              {
                week_day: 1,
                from: 0,
                to: 24,
              },
              {
                week_day: 2,
                from: 0,
                to: 24,
              },
              {
                week_day: 3,
                from: 0,
                to: 24,
              },
              {
                week_day: 4,
                from: 0,
                to: 24,
              },
              {
                week_day: 5,
                from: 0,
                to: 24,
              },
              {
                week_day: 6,
                from: 0,
                to: 24,
              },
            ],
            shipping_cost: 0.5,
            name: "انوار الكويت",
            description: "أدوية",
            logo: "https://media.jm3eia.com//2024/4/1/0e92810c5565ce63b0df9c08fee319071711971090302.jpeg",
            picture: null,
            isOpen: true,
          },
        ],
      },
    ],
  },
};

//loged user
export const user = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    token: "u_9f847911_34bc_4306_ba6c_4d1fcc40a04d",
    user: {
      _id: "651128d13501bae42803e063",
      fullname: "Abdelrahman Mohamed",
      username: "mrabdelrahman10",
      email: "mrabdelrahman10@gmail.com",
      mobile: "06330006",
      address: {
        city_id: "5ee1f0eb123e50d1a6319b8b",
        widget: "1",
        street: "1",
        gada: "1",
        house: "10",
        floor: "1",
        apartment_number: "1",
        latitude: 0,
        longitude: 0,
      },
      created: "2023-09-25T09:29:37.979Z",
      wallet: 0,
      points: 50,
      convertedPoints: 0,
      status: true,
      language: "en",
      otp_code: 8678,
      otp_success: false,
      serial: 256448,
    },
  },
};

// cart
export const cart = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    success: true,
    data: [
      {
        sku: "99956554011",
        price: 1.535,
        picture:
          "https://media.jm3eia.com//2024/5/8/4cefb53cea672ea752e0ce84970965b81715157909849.jpeg",
        prod_n_categoryArr: [
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.25,
          },
          {
            category_id: "5d383c4783545d0366ac42c2",
            rank_id: "657d65b70c017d1dc04e3e92",
            sorting: 1210,
          },
        ],
        name: "Eurocake Premium Protein Focaccia Bun With Coconut Oil No Added Sugar 45g 4Pcs",
        quantity: 1,
      },
      {
        sku: "99956553969",
        price: 1.535,
        prod_n_categoryArr: [
          {
            category_id: "5d383c4783545d0366ac42c2",
            rank_id: "657d65b70c017d1dc04e3e92",
            sorting: 1200,
          },
          {
            category_id: "625e6d8d346ffb8046668060",
            rank_id: "65ba3fc34a15d42e7caaf9ec",
            sorting: 2100.24,
          },
        ],
        picture:
          "https://media.jm3eia.com//2024/5/8/f591944287588d1128061cc8ebd11c951715157468900.jpeg",
        name: "Eurocake Premium Protein Burger Bun With Coconut Oil No Added Sugar 4Pcs 200g",
        quantity: 1,
      },
    ],
    shipping_cost: 1,
    subtotal: "3.070",
    total_quantities: 2,
    total: "4.070",
  },
};

export const checkout = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    subtotal: "3.070",
    shipping_cost: "1.000",
    coupon: {
      code: null,
      value: "0.000",
      suppliers_coupons: [],
    },
    discount_by_wallet: "0.000",
    discount_by_wallet_value: "0.000",
    total: "4.070",
    purchase_possibility: false,
    message: "The order should be more then 8 KWD",
    addresses: [
      {
        city_id: "5ee1f0eb123e50d1a6319b8b",
        widget: "1",
        street: "1",
        gada: "1",
        house: "10",
        floor: "1",
        apartment_number: "1",
        latitude: 0,
        longitude: 0,
        id: "primary",
        name: "Primary Address",
      },
    ],
    gift_note: false,
    payment_methods: [
      {
        id: "cod",
        name: "Cash on delivery (Cash / Knet)",
        valid: false,
      },
      {
        id: "knet",
        name: "KNET Online Payment (Online)",
        valid: true,
      },
    ],
    earliest_date_of_delivery: 0,
    delivery_times: [
      {
        day: "Friday",
        times: [],
      },
      {
        day: "Saturday",
        times: [
          {
            time: "12:00 AM : 2:00 AM",
            full_date: "2024-05-11 00:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "1:00 AM : 3:00 AM",
            full_date: "2024-05-11 01:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "2:00 AM : 4:00 AM",
            full_date: "2024-05-11 02:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "3:00 AM : 5:00 AM",
            full_date: "2024-05-11 03:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "4:00 AM : 6:00 AM",
            full_date: "2024-05-11 04:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "5:00 AM : 7:00 AM",
            full_date: "2024-05-11 05:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "6:00 AM : 8:00 AM",
            full_date: "2024-05-11 06:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "7:00 AM : 9:00 AM",
            full_date: "2024-05-11 07:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "8:00 AM : 10:00 AM",
            full_date: "2024-05-11 08:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "9:00 AM : 11:00 AM",
            full_date: "2024-05-11 09:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "10:00 AM : 12:00 PM",
            full_date: "2024-05-11 10:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "11:00 AM : 1:00 PM",
            full_date: "2024-05-11 11:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "12:00 PM : 2:00 PM",
            full_date: "2024-05-11 12:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "1:00 PM : 3:00 PM",
            full_date: "2024-05-11 13:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "2:00 PM : 4:00 PM",
            full_date: "2024-05-11 14:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "3:00 PM : 5:00 PM",
            full_date: "2024-05-11 15:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "4:00 PM : 6:00 PM",
            full_date: "2024-05-11 16:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "5:00 PM : 7:00 PM",
            full_date: "2024-05-11 17:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "6:00 PM : 8:00 PM",
            full_date: "2024-05-11 18:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "7:00 PM : 9:00 PM",
            full_date: "2024-05-11 19:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "8:00 PM : 10:00 PM",
            full_date: "2024-05-11 20:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "9:00 PM : 11:00 PM",
            full_date: "2024-05-11 21:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "10:00 PM : 12:00 AM",
            full_date: "2024-05-11 22:00",
            is_available: true,
            text: "Available",
          },
          {
            time: "11:00 PM : 1:00 AM",
            full_date: "2024-05-11 23:00",
            is_available: true,
            text: "Available",
          },
        ],
      },
    ],
    offer: null,
    data: [
      {
        supplier: {
          _id: "Jm3eia",
          name: {
            ar: "جمعية دوت كوم",
            en: "Jm3eia",
          },
          min_delivery_time: 30,
          min_value: "8",
          delivery_time_text: "",
          has_picking_time: false,
          isOpen: true,
        },
        products: [
          {
            _id: "663b3bcbefd984c0628a65ca",
            sku: "99956554011",
            soft_code: "99956554011",
            uom: "1",
            barcode: "6291100603411",
            price: "1.535",
            free_shipping: false,
            picture:
              "https://media.jm3eia.com//2024/5/8/4cefb53cea672ea752e0ce84970965b81715157909849.jpeg",
            name: "Eurocake Premium Protein Focaccia Bun With Coconut Oil No Added Sugar 45g 4Pcs",
            categories: [
              {
                _id: "625e6d8d346ffb8046668060",
                name: {
                  ar: "نمط صحي ",
                  en: "Life Style",
                },
              },
              {
                _id: "5d383c4783545d0366ac42c2",
                name: {
                  ar: "الخبز بأنواعه",
                  en: "All kinds of bread",
                },
              },
            ],
            old_price: "0.000",
            availability: null,
            cart_status: {
              is_exists: true,
              quantity: 1,
            },
            wishlist_status: {
              is_exists: false,
            },
            variants_options: null,
            quantity: 1,
            cart_quantity: 1,
            supplier_id: "Jm3eia",
          },
          {
            _id: "663b36c7efd984c0628a65ad",
            sku: "99956553969",
            soft_code: "99956553969",
            uom: "1",
            barcode: "6291100603169",
            price: "1.535",
            free_shipping: false,
            picture:
              "https://media.jm3eia.com//2024/5/8/f591944287588d1128061cc8ebd11c951715157468900.jpeg",
            name: "Eurocake Premium Protein Burger Bun With Coconut Oil No Added Sugar 4Pcs 200g",
            categories: [
              {
                _id: "5d383c4783545d0366ac42c2",
                name: {
                  ar: "الخبز بأنواعه",
                  en: "All kinds of bread",
                },
              },
              {
                _id: "625e6d8d346ffb8046668060",
                name: {
                  ar: "نمط صحي ",
                  en: "Life Style",
                },
              },
            ],
            old_price: "0.000",
            availability: null,
            cart_status: {
              is_exists: true,
              quantity: 1,
            },
            wishlist_status: {
              is_exists: false,
            },
            variants_options: null,
            quantity: 1,
            cart_quantity: 1,
            supplier_id: "Jm3eia",
          },
        ],
        isSelected: true,
        subtotal: 3.07,
        purchase_possibility: false,
        earliest_date_of_delivery: 0,
        delivery_times: [
          {
            day: "Friday",
            times: [],
          },
          {
            day: "Saturday",
            times: [
              {
                time: "12:00 AM : 2:00 AM",
                full_date: "2024-05-11 00:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "1:00 AM : 3:00 AM",
                full_date: "2024-05-11 01:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "2:00 AM : 4:00 AM",
                full_date: "2024-05-11 02:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "3:00 AM : 5:00 AM",
                full_date: "2024-05-11 03:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "4:00 AM : 6:00 AM",
                full_date: "2024-05-11 04:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "5:00 AM : 7:00 AM",
                full_date: "2024-05-11 05:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "6:00 AM : 8:00 AM",
                full_date: "2024-05-11 06:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "7:00 AM : 9:00 AM",
                full_date: "2024-05-11 07:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "8:00 AM : 10:00 AM",
                full_date: "2024-05-11 08:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "9:00 AM : 11:00 AM",
                full_date: "2024-05-11 09:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "10:00 AM : 12:00 PM",
                full_date: "2024-05-11 10:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "11:00 AM : 1:00 PM",
                full_date: "2024-05-11 11:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "12:00 PM : 2:00 PM",
                full_date: "2024-05-11 12:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "1:00 PM : 3:00 PM",
                full_date: "2024-05-11 13:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "2:00 PM : 4:00 PM",
                full_date: "2024-05-11 14:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "3:00 PM : 5:00 PM",
                full_date: "2024-05-11 15:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "4:00 PM : 6:00 PM",
                full_date: "2024-05-11 16:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "5:00 PM : 7:00 PM",
                full_date: "2024-05-11 17:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "6:00 PM : 8:00 PM",
                full_date: "2024-05-11 18:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "7:00 PM : 9:00 PM",
                full_date: "2024-05-11 19:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "8:00 PM : 10:00 PM",
                full_date: "2024-05-11 20:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "9:00 PM : 11:00 PM",
                full_date: "2024-05-11 21:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "10:00 PM : 12:00 AM",
                full_date: "2024-05-11 22:00",
                is_available: true,
                text: "Available",
              },
              {
                time: "11:00 PM : 1:00 AM",
                full_date: "2024-05-11 23:00",
                is_available: true,
                text: "Available",
              },
            ],
          },
        ],
        shipping_cost: 1,
        total: "4.070",
        gift_note: false,
        allow_cod: true,
        payment_methods: [
          {
            id: "cod",
            name: "Cash on delivery (Cash / Knet)",
            valid: false,
          },
          {
            id: "knet",
            name: "KNET Online Payment (Online)",
            valid: true,
          },
        ],
      },
    ],
  },
};

///support question

export const supportQuestion = {
  success: true,
  status_code: 200,
  status_message: "DATA_LOADED",
  errors: null,
  results: {
    count: 1,
    data: [
      {
        _id: "5de2b6f31b73c34700dbfac7",
        enable_chatting: true,
        enable_rating: true,
        name: "أنا بحاجة للمساعدة مع طلب حالي",
        children: [
          {
            _id: "5dec021a950680588c383c90",
            parent_id: "5de2b6f31b73c34700dbfac7",
            enable_chatting: true,
            enable_rating: true,
            name: "لدي ملاحظات عن جودة الطلب.",
          },
          {
            _id: "5dec0013456de478eaaab459",
            enable_chatting: true,
            enable_rating: true,
            parent_id: "5de2b6f31b73c34700dbfac7",
            name: "وصلني طلب لا يظابق ما طلبته",
          },
          {
            _id: "5debffd8456de478eaaab458",
            enable_chatting: true,
            enable_rating: true,
            parent_id: "5de2b6f31b73c34700dbfac7",
            name: "أنا بحاجة لتعديل طلبي.",
          },
          {
            _id: "5debffab456de478eaaab457",
            enable_chatting: true,
            enable_rating: true,
            parent_id: "5de2b6f31b73c34700dbfac7",
            name: "أريد أن أغير العنوان المحدد في طلبي.",
          },
        ],
      },
    ],
  },
};
