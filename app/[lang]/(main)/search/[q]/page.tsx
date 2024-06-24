import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { searchProduct } from "../services";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { q: string; lang: Locale };
  searchParams?: { [key: string]: string /*  | string[] */ | undefined };
}) {
  const products = await searchProduct(params.q, searchParams?.supplier_id);
  const dict = await getDictionary(params.lang);

  return (
    <div>
      <Navbar hasSearch expandSearch searchValue={params.q} />
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-stretch">
          {products?.data.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
