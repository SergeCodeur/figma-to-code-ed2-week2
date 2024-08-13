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
        selectedOptions: {
          name: string;
          value: string;
        }[];
      };
    }[];
  };
};

interface ProductState {
  product: Product | null;
  setProduct: (product: Product) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
  selectedColor: "",
  setSelectedColor: (color) => set({ selectedColor: color }),
}));
