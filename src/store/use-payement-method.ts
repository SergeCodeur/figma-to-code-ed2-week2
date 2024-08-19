import { create } from "zustand";

interface PaymentState {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const usePaymentStore = create<PaymentState>((set) => ({
  paymentMethod: "Debit/Credit-Card",
  setPaymentMethod: (method) => set({ paymentMethod: method }),
}));

export default usePaymentStore;
