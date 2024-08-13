"use client";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

interface ShoppingCartProps {
  className?: string;
}

const ShoppingCart = ({ className }: ShoppingCartProps) => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const router = useRouter();
  return (
    <button
      className={`hidden cursor-pointer lg:block text-lg lg:text-base ${className}`}
      onClick={() => router.push("/orders")}
    >
      Cart({totalItems})
    </button>
  );
};

export default ShoppingCart;
