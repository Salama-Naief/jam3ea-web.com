import { VARIANT_OPTION_TYPES } from "@/lib/enums";

export interface ICartStatus {
  is_exists: boolean;
  quantity: number;
}

export interface IProductBySku extends IProduct {
  related_products: [IProduct];
}
export interface IProduct {
  sku: string;
  name: string;
  barcode: string;
  description?: string;
  availability: boolean;
  has_variants: boolean;
  max_quantity_cart: number;
  soft_code: string;
  exchange_with_points: boolean;
  points: number;
  keywords: string;
  contents: string;
  brand: string;
  picture: string;
  cart_status: ICartStatus;
  wishlist_status: { is_exists: boolean };
  prod_n_categoryArr: {
    category_id: string;
    rank_id: string;
    sorting?: number;
  }[];
  prod_n_storeArr: {
    store_id: string;
    quantity: number;
    status: boolean;
  }[];
  gallery_pictures: string[];
  // NOTE: this is returned only in get product by sku and used in the product page
  categories?: {
    category_id: string;
    rank_id: string;
    sorting?: number;
    name: string;
  }[];

  price: string;
  old_price?: string;
  discount_price_valid_until?: Date;
  supplier_id?: string;
  show_discount_percentage?: boolean;
  vip_price?: string;
  vip_old_price?: string;
  vip_discount_price_valid_until?: Date;
  variants?: IVariant[];
}

export interface IVariant {
  barcode: string;
  price: string;
  sku: string;
  soft_code: string;
  max_quantity_cart: number;
  name: string;
  description: string;
  keywords: string;
  contents: string;
  cart_status: ICartStatus;
  wishlist_status: { is_exists: boolean };
  options: IVAriantOption[];
}

export interface IVAriantOption {
  label: string;
  name: string;
  sku_code: string;
  type: VARIANT_OPTION_TYPES;
  value: string;
}
