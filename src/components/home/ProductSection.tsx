"use client";
import { useCollectionStore } from "@/store/collectionsStore";
import { fetchCollections } from "@/utils/fetchCollections";
import Link from "next/link";
import { useEffect } from "react";
import { ProductCard } from "../products/product-card";
import ProductFilterButtons from "../products/product-filter-buttons";
import { Button } from "../ui/button";

const ProductSection = () => {
  const { collections, setCollections, setCategories, selectedCategory } =
    useCollectionStore();

  useEffect(() => {
    const fetchCollectionsData = async () => {
      const data = await fetchCollections();
      setCollections(data);

      const categories: { [key: string]: number } = {};
      data.forEach(
        (collection: { node: { products: { edges: any[] }; title: any } }) => {
          collection.node.products.edges.forEach((product) => {
            const category = collection.node.title;
            if (!categories[category]) {
              categories[category] = 0;
            }
            categories[category]++;
          });
        }
      );
      setCategories(categories);
    };

    fetchCollectionsData();
  }, [setCollections, setCategories]);

  const filteredProducts = collections
    .flatMap((collection) =>
      collection.node.products.edges.map((product) => ({
        product: product.node,
        collection,
      }))
    )
    .filter(({ product, collection }) => {
      if (selectedCategory === "All") return true;
      return collection.node.title === selectedCategory;
    })
    .map(({ product }) => product);

  return (
    <section className="container pb-[72px]">
      <h2 className="font-chillax text-center font-semibold max-xs:text-lg text-xl md:text-2xl">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </h2>
      <div className="pt-[72px] lg:px-[102px]">
        <ProductFilterButtons />
        <div>
          <div className="my-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 justify-items-center">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.title}
                image={product.images.edges[0]?.node.url}
                title={product.title}
                price={{
                  currencyCode:
                    product.variants.edges[0]?.node.price.currencyCode,
                  amount: product.variants.edges[0]?.node.price.amount,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="#" className="font-semibold text-sm">
              View More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
