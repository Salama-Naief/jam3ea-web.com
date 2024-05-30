import webRoutes from "@/lib/utils/webRoutes";

export const getSlideUrl = (url: string, supplierId?: string) => {
  if (!url) return "#";
  const pattern = /supplier_id=([\w]+)/;
  const match = url.match(pattern);
  if (match) {
    const supplierId = match[1];
    return webRoutes.store(supplierId);
  }
  const productIndex = url.indexOf("/product/") + "/product/".length;
  const categoryIndex = url.indexOf("/category");

  if (
    productIndex !== -1 &&
    categoryIndex !== -1 &&
    productIndex < categoryIndex
  ) {
    const id = url.substring(productIndex, categoryIndex);
    return webRoutes.feature(id, undefined, supplierId);
  }
  return url;
};
