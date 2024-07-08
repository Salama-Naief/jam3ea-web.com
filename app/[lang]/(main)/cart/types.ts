import { IAddress } from "@/module/(main)/(profile)/types";
import { IProduct } from "@/module/(main)/product/types";
import { ISupplier } from "@/module/(main)/stores/types";

export interface IAddToCart {
  sku: string;
  quantity: number;
}

export interface IAddToCartResponseResult {
  message: string;
  total_products: number;
  total_quantities: number;
  total_prices: string;
  cart_products: {
    [key: string]: number;
  };
}

export interface IGetCartResponseResult {
  success: boolean;
  Jm3eia: {
    data: IProduct[];
    shipping_cost: number;
    subtotal: string;
    total_quantities: number;
    total: string;
    cart_products: IProduct[];
    total_prices: number;
  };
}

interface ISupplierCoupon {
  code: string;
  value: string;
  supplier_id: string;
}

export interface IPaymentMethod {
  id: string;
  name: string;
  valid: boolean;
}

export interface ITime {
  time: string;
  full_date: string;
  is_available: boolean;
  text: string;
}

export interface IDeliveryTime {
  day: string;
  times: ITime[];
}

export interface ICheckoutProduct extends IProduct {
  variants_options: any;
  quantity: number;
  cart_quantity: number;
  supplier_id: string;
  supplier: ISupplier;
}

export interface ICoupon {
  code: string | null;
  value: string;
  suppliers_coupons: ISupplierCoupon[];
}

export interface IGetCheckoutResponseResult {
  subtotal: string;
  shipping_cost: string;
  coupon: ICoupon;
  discount_by_wallet: string;
  discount_by_wallet_value: string;
  total: string;
  purchase_possibility: boolean;
  message: string | null;
  addresses: IAddress[];
  gift_note: boolean;
  payment_methods: IPaymentMethod[];
  earliest_date_of_delivery: number;
  delivery_times: IDeliveryTime[];
  data: {
    supplier: ISupplier;
    products: ICheckoutProduct[];
    isSelected: boolean;
    subtotal: number;
    purchase_possibility: boolean;
    earliest_date_of_delivery: number;
    delivery_times: IDeliveryTime[];
    shipping_cost: number;
    total: string;
    gift_note: boolean;
    payment_methods: IPaymentMethod[];
    coupon?: ISupplierCoupon;
  }[];
  products?: ICheckoutProduct[];
}

export interface IGetCheckoutResponse {
  subtotal: string;
  points: number;
  shipping_cost: string;
  coupon: ISupplierCoupon;
  discount_by_wallet: string;
  discount_by_wallet_value: string;
  total: string;
  purchase_possibility: boolean;
  message: string | null;
  addresses: [];
  gift_note: false;
  payment_methods: [
    {
      id: "cod";
      name: "Cash on delivery (Cash / Knet)";
      valid: false;
    },
    {
      id: "knet";
      name: "KNET Online Payment (Online)";
      valid: true;
    }
  ];
  earliest_date_of_delivery: 0;
  delivery_times: IDeliveryTime[];
  offer: {
    _id: string;
    name: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    min_amount: number;
    target_amount: number;
    type: string;
    product_sku: string;
    expires_at: string;
    product: IProduct;
  };
  supplier: {
    _id: string;
    name: {
      ar: string;
      en: string;
    };
    min_delivery_time: number;
    min_order: number;
    delivery_time_text: string;
    has_picking_time: boolean;
    is_external: boolean;
  };
  products: ICheckoutProduct[];
  allow_donation: boolean;
  donation_options: [];
  donation: {
    enable: boolean;
    content: {
      description: string;
      picture: string;
    };
    options: number[];
  };
}
export interface IApplyCoupon {
  code: string;
}

export interface IApplyCouponResponseResult {
  message: string;
  note: string;
  apply_on_discounted_products: boolean;
}

export interface ICart {
  success: boolean;
  data: [
    {
      sku: string;
      price: number;
      picture: string;
      prod_n_categoryArr: [];
      old_price: number;
      name: string;
      quantity: number;
    }
  ];
  shipping_cost: number;
  subtotal: string;
  total_quantities: number;
  total: string;
}
