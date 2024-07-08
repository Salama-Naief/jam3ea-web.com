import React from "react";
import { getCategoryProducts } from "../../category/services";
import { IProduct } from "../../product/types";
import { IDataLoadedResponse } from "@/lib/types";
import ProductSlider from "@/components/Slider/ProductSlider";

interface Props {
  categoryId?: string;
}
async function RelatedProducts({ categoryId }: Props) {
  let products: any = [];
  if (categoryId) {
    products = await getCategoryProducts(categoryId, 10, 1);
  }

  console.log("related products", products);
  console.log("related categoryId", categoryId);

  return (
    <div>
      {products && products.data && products.data.length > 0 && (
        <ProductSlider
          items={products.data}
          lgSize={5}
          xlSize={6}
          smSize={2}
          mdSize={3}
          size="small"
          type="normal"
        />
      )}
    </div>
  );
}

export default RelatedProducts;
