import { IProduct } from '@/product/types';
import { ISlide } from '@/slide/types';

export interface IFeature {
  _id: string;
  name: string;
  slides: ISlide[];
  products: IProduct[];
}
