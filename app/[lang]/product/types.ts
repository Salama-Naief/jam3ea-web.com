export interface ICartStatus {
  is_exists: boolean;
  quantity: number;
}

export interface IProduct {
  sku: string;
  name: string;
  description?: string;
  availability: boolean;
  has_variants: boolean;
  max_quantity_cart: number;
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
}
