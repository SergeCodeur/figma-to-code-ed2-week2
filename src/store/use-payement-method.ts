import { create } from "zustand";

interface PaymentState {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const usePaymentStore = create<PaymentState>((set) => ({
  paymentMethod: "",
  setPaymentMethod: (method) => set({ paymentMethod: method }),
}));

export default usePaymentStore;
