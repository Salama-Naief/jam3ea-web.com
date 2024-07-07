import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { getFeaturedProducts, getProductsByFeature } from "../services";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { getCategoryById } from "@/module/(main)/category/services";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

export default async function Feature({
  params: { id, lang },
  searchParams: { supplier, name },
}: {
  params: { id: string; lang: Locale };
  searchParams: { supplier: string; name: string };
}) {
  const products = await getProductsByFeature(id);
  console.log("featureId", id);
  console.log("products feture", products);
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* <Navbar hasSearch title={name} supplierId={supplier} /> */}
      <Container>
        <div className="my-10 text-2xl text-center text-secondary font-bold">
          {name}
        </div>
        {products && products.data.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-4 items-stretch bg-gray-100 p-2 md:p-6">
            {products.data.map((product) => (
              <ProductCard key={product.sku} product={product} type="normal" />
            ))}
          </div>
        ) : (
          <div className=" h-full w-full text-center">No Products found</div>
        )}
      </Container>
    </div>
  );
}
