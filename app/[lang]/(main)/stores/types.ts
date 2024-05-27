export interface IInventory {
  name: string;
  logo: string;
  picture: string;
  suppliers: ISupplier[];
}

export interface ISupplier {
  _id: string;
  name: { ar: string; en: string } | string;
  description: string;
  logo: string;
  picture: string;
  shipping_cost: number;
  min_delivery_time: number;
  min_value: string;
  delivery_time_text: string | { en: string; ar: string };
  isOpen: boolean;
  avg_rating: number;
  reviews_count: number;
  app_delivery_time: string;
}
