// export interface IInventory {
//   name: string;
//   logo: string;
//   picture: string;
//   suppliers: ISupplier[];
// }
export interface IInventory {
  _id: string;
  name: string;
  picture: string;
  logo: string;
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

export interface ISupplierResponse {
  success: boolean;
  status_code: number;
  status_message: string;
  errors: null;
  results: ISupplier[];
}

export interface ISupplierStore {
  _id: string;
  delivery_time: number;
  delivery_time_text: {
    ar: string;
    en: string;
  };
  app_delivery_time: string;
  min_order: number;
  cities: [
    {
      city_id: string;
      shipping_cost: number;
    }
  ];
  working_times: [
    {
      week_day: number;
      from: number;
      to: number;
    }
  ];
  avg_rating: number;
  reviews_count: number;
  shipping_cost: number;
  categories: string[];
  name: string;
  description: string;
  logo: string;
  picture: string;
  isOpen: boolean;
}
export interface ISupplierResults {
  _id: string;
  sorting: number;
  name: string;
  suppliers: ISupp[];
}
export interface ISupp {
  _id: string;
  delivery_time: number;
  delivery_time_text: string | { en: string; ar: string };
  min_order: number;
  working_times: [
    {
      week_day: number;
      from: number;
      to: number;
    }
  ];
  avg_rating: number;
  reviews_count: number;
  app_delivery_time: string;
  shipping_cost: number;
  categories: [string];
  name: string;
  description: string;
  logo: string;
  picture: string;
  isOpen: boolean;
}
