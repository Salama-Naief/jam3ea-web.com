import { IAddress } from '@/module/(profile)/types';
import { IProduct } from '@/module/product/types';
import { ISupplier } from '@/module/stores/types';

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
  data: IProduct[];
  shipping_cost: number;
  subtotal: string;
  total_quantities: number;
  total: string;
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
  products: ICheckoutProduct[];
}

export interface IApplyCoupon {
  code: string;
}

export interface IApplyCouponResponseResult {
  message: string;
  note: string;
  apply_on_discounted_products: boolean;
}
