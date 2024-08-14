import { useProductStore } from "@/store/productStore";
import { fetchCollections } from "@/utils/fetchCollections";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const useProductDetail = () => {
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

  return { product };
};

export default useProductDetail;
