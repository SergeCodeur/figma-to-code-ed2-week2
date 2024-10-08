import { create } from "zustand";
import { Product } from "../types/product";

interface ProductState {
  product: Product | null;
  setProduct: (product: Product) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
  selectedColor: "",
  setSelectedColor: (color) => set({ selectedColor: color }),
  selectedSize: "",
  setSelectedSize: (size) => set({ selectedSize: size }),
}));
