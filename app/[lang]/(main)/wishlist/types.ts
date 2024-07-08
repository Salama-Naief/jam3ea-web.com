export interface IAddToWishlist {
  sku: string;
}

export interface IAddToWishlistResponseResult {
  message: string;
}

export interface IWishlistProduct {
  _id: string;
  price: number;
  picture: string;
  sku: string;
  name: string;
  cart_status: {
    is_exists: boolean;
    quantity: number;
  };
}
