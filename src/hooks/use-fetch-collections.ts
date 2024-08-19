import { useCollectionStore } from "@/store/collections-store";
import { fetchCollections } from "@/utils/fetch-collections";
import { useEffect } from "react";

const useFetchCollections = () => {
  const { setCollections, setCategories } = useCollectionStore();

  useEffect(() => {
    const fetchCollectionsData = async () => {
      const data = await fetchCollections();
      setCollections(data);

      const categories: { [key: string]: number } = {};
      data.forEach(
        (collection: { node: { products: { edges: any[] }; title: any } }) => {
          collection.node.products.edges.forEach(() => {
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
};

export default useFetchCollections;
