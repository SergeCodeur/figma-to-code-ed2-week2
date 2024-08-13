import { create } from "zustand";

type Product = {
  title: string;
  description: string;
  images: {
    edges: {
      node: {
        url: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};

type Collection = {
  node: {
    title: string;
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
};

interface CollectionState {
  collections: Collection[];
  setCollections: (collections: Collection[]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: { [key: string]: number };
  setCategories: (categories: { [key: string]: number }) => void;
}

export const useCollectionStore = create<CollectionState>((set) => ({
  collections: [],
  setCollections: (collections) => set({ collections }),
  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  categories: {},
  setCategories: (categories) => set({ categories }),
}));
