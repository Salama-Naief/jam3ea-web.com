import { IProduct } from "@/module/(main)/product/types";
import { ISlide } from "@/module/(main)/slide/types";

export interface IFeature {
  _id: string;
  name: string;
  slides: ISlide[];
  products: IProduct[];
}
