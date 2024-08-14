"use client";
import { OrderCart } from "@/assets/icons";
import useRedirectToOrders from "@/hooks/useRedirectToOrders";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ShoppingCartProps {
  className?: string;
}

const ShoppingCart = ({ className }: ShoppingCartProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const redirectToOrders = useRedirectToOrders();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalItems = useCartStore((state) => state.getTotalItems());
  const router = useRouter();
  return (
    <div>
      {/* descktop */}
      <button
        className={`hidden cursor-pointer lg:block text-lg lg:text-base ${className}`}
        onClick={() => router.push("/orders")}
      >
        {isMounted ? `Cart(${totalItems})` : "Cart(0)"}
      </button>

      {/* mobile */}
      <button
        className="block cursor-pointer lg:hidden relative"
        onClick={redirectToOrders}
      >
        <OrderCart />
        {totalItems > 0 && (
          <span className="absolute -top-[7px] -right-3.5 w-5 h-5 rounded-full bg-black text-white text-xs-custom flex justify-center items-center">
            {isMounted ? totalItems : " "}
          </span>
        )}
      </button>
    </div>
  );
};

export default ShoppingCart;
