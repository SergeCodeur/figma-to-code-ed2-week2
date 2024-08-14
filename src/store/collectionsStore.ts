import { Collection } from "@/types/product";
import { create } from "zustand";

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
