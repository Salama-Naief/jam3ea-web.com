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
    link: "/",
    name: "Jameia Prime",
    label: "Delivery in <b>60 minutes</b>",
  },
  {
    id: 2,
    image: store,
    link: "/",
    name: "Jameia Stores",
    label: "Shop With Confidence",
  },
  {
    id: 3,
    image: mart,
    link: "/",
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
