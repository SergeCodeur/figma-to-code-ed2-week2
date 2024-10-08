import { create } from "zustand";

interface ShippingStore {
  selectedShipping: string;
  setSelectedShipping: (method: string) => void;
}

const useShippingStore = create<ShippingStore>((set) => ({
  selectedShipping: "Regular shipping",
  setSelectedShipping: (method) => set({ selectedShipping: method }),
}));

export default useShippingStore;
