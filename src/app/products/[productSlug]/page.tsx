"use client";
import { ProductDetailCard } from "@/components/products/product-detail-card";
import ProductRecommendations from "@/components/products/product-recommendations";
import { useProductStore } from "@/store/productStore";
import { fetchCollections } from "@/utils/fetchCollections";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const { setProduct, product } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const collections = await fetchCollections();
      const allProducts = collections.flatMap(
        (collection: { node: { products: { edges: any[] } } }) =>
          collection.node.products.edges.map((edge: { node: any }) => edge.node)
      );

      const foundProduct = allProducts.find(
        (p: { title: string }) =>
          p.title.toLowerCase().replace(/ /g, "-") === productSlug
      );

      setProduct(foundProduct || null);
    };

    if (productSlug) fetchProduct();
  }, [productSlug, setProduct]);

  if (!product) return <p>Loading...</p>;

  // Extract color and size options
  const colorOptions = new Set<string>();
  const sizeOptions = new Set<string>();
  const imagesByColor: { [key: string]: string } = {};

  product.variants.edges.forEach((edge) => {
    edge.node.selectedOptions.forEach((option) => {
      if (option.name === "Color") {
        colorOptions.add(option.value);
        if (!imagesByColor[option.value]) {
          imagesByColor[option.value] = product.images.edges[0]?.node.url || ""; // Utiliser la première image par défaut
        }
      } else if (option.name === "Size") {
        sizeOptions.add(option.value);
      }
    });
  });

  return (
    <section className="container pt-[76px] space-y-[72px] pb-24">
      <div>
        <ProductDetailCard
          images={imagesByColor}
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
