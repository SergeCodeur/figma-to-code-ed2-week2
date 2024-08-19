"use client";

import useFetchRecommendations from "@/hooks/use-fetch-recommandations";
import { ProductCard } from "./product-card";

const ProductRecommendations = () => {
  const { recommendations, loading, error } = useFetchRecommendations();

  if (loading) {
    return (
      <div className="h-[404px] w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[404px] w-full flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <h2 className="text-2xl leading-7 md:text-3xl font-semibold font-chillax">
        You may also like
      </h2>
      <ul className="flex gap-3.5 overflow-x-scroll no-scrollbar">
        {recommendations.map((product, index) => (
          <li key={index}>
            <ProductCard
              className="min-w-[322px]"
              key={product.node.title}
              image={product.node.images.edges[0]?.node.url}
              title={product.node.title}
              price={{
                currencyCode:
                  product.node.variants.edges[0]?.node.price.currencyCode,
                amount: product.node.variants.edges[0]?.node.price.amount,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendations;
