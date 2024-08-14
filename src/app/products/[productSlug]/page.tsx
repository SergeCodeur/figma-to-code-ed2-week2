"use client";
import { ProductDetailCard } from "@/components/products/product-detail-card";
import ProductRecommendations from "@/components/products/product-recommendations";
import useProductDetail from "@/hooks/useProductDetail";
import { sizeMapping } from "@/utils/sizeMapping";

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

  if (!product) return <p>Loading...</p>;

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
