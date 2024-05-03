export interface ICity {
    _id: string;
    name: string | { en: string; ar: string };
    parent_id?: string;
    store_id: string;
    children?: ICity[];
  }
  