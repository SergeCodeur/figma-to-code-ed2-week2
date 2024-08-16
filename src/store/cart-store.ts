import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Product = {
  title: string;
  image: string;
  price: {
    currencyCode: string;
    amount: string;
  };
  color?: string;
  size?: string;
};

interface CartState {
  cart: { [key: string]: Product & { quantity: number } };
  addToCart: (product: Product) => void;
  removeFromCart: (productTitle: string) => void;
  increaseQuantity: (productTitle: string) => void;
  decreaseQuantity: (productTitle: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getOrderTotal: () => number;
  getCheckoutOrderTotal: (shippingCost: number) => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: {},
      addToCart: (product) =>
        set((state) => {
          const newCart = { ...state.cart };
          if (newCart[product.title]) {
            newCart[product.title].quantity += 1;
          } else {
            newCart[product.title] = { ...product, quantity: 1 };
          }
          return { cart: newCart };
        }),
      removeFromCart: (productTitle) =>
        set((state) => {
          const newCart = { ...state.cart };
          delete newCart[productTitle];
          return { cart: newCart };
        }),
      increaseQuantity: (productTitle) =>
        set((state) => {
          const newCart = { ...state.cart };
          if (newCart[productTitle]) {
            newCart[productTitle].quantity += 1;
          }
          return { cart: newCart };
        }),
      decreaseQuantity: (productTitle) =>
        set((state) => {
          const newCart = { ...state.cart };
          if (newCart[productTitle] && newCart[productTitle].quantity > 1) {
            newCart[productTitle].quantity -= 1;
          } else if (
            newCart[productTitle] &&
            newCart[productTitle].quantity === 1
          ) {
            delete newCart[productTitle];
          }
          return { cart: newCart };
        }),
      clearCart: () => set(() => ({ cart: {} })),
      getTotalItems: () => {
        const state = get();
        return Object.keys(state.cart).length;
      },
      getSubtotal: () => {
        const state = get();
        return Object.values(state.cart).reduce((total, product) => {
          return total + parseFloat(product.price.amount) * product.quantity;
        }, 0);
      },
      getDiscount: () => {
        return 0;
      },
      getOrderTotal: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        const discount = state.getDiscount();
        return subtotal - discount;
      },
      getCheckoutOrderTotal: (shippingCost) => {
        const state = get();
        const subtotal = state.getSubtotal();
        const discount = state.getDiscount();
        return subtotal - discount + shippingCost;
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
