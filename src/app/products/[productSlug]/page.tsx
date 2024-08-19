"use client";
import { ProductDetailCard } from "@/components/products/product-detail-card";
import ProductRecommendations from "@/components/products/product-recommendations";
import { Skeleton } from "@/components/ui/skeleton";
import useProductDetail from "@/hooks/use-product-detail";
import { sizeMapping } from "@/utils/size-mapping";

const ProductDetail = () => {
  const { product } = useProductDetail();

  const colorOptions = new Set<string>();
  const sizeOptions = new Set<string>();

  product?.variants?.edges.forEach((edge) => {
    edge.node.selectedOptions.forEach((option) => {
      if (option.name === "Color") {
        colorOptions.add(option.value);
      } else if (option.name === "Size") {
        sizeOptions.add(sizeMapping(option.value));
      }
    });
  });

  if (!product)
    return (
      <section className="container pt-[76px] space-y-[72px] pb-24 flex">
        <div className="grid grid-cols-2 gap-4 w-full">
          <Skeleton className="h-[580px] w-full" />
          <div className="space-y-4 w-full">
            <Skeleton className="w-full h-[86px]" />
            <Skeleton className="w-full h-[54px]" />
            <Skeleton className="w-full h-[40px]" />
            <Skeleton className="w-full h-[50px]" />
            <Skeleton className="w-full h-16 rounded-full" />
            <Skeleton className="w-full h-[162px]" />
          </div>
        </div>
      </section>
    );

  return (
    <section className="container pt-[76px] space-y-[72px] pb-24">
      <div>
        <ProductDetailCard
          images={product.images.edges.map((edge) => edge.node.url)}
          title={product.title}
          description={product.description}
          price={{
            currencyCode: product.variants.edges[0]?.node.price.currencyCode,
            amount: product.variants.edges[0]?.node.price.amount,
          }}
          colorOptions={Array.from(colorOptions)}
          sizeOptions={Array.from(sizeOptions)}
        />
      </div>
      <ProductRecommendations />
    </section>
  );
};

export default ProductDetail;
