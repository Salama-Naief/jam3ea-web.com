import { IProduct } from '@/module/product/types';
import { ISlide } from '@/module/slide/types';

export interface IFeature {
  _id: string;
  name: string;
  slides: ISlide[];
  products: IProduct[];
}
