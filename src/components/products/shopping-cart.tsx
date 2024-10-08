"use client";
import { OrderCart } from "@/assets/icons";
import { useIsMounted } from "@/hooks/use-is-mounted";
import useRedirectToOrders from "@/hooks/use-redirect-to-orders";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";

interface ShoppingCartProps {
  className?: string;
}

const ShoppingCart = ({ className }: ShoppingCartProps) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const redirectToOrders = useRedirectToOrders();
  const totalItems = useCartStore((state) => state.getTotalItems());

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
        {isMounted
          ? totalItems > 0 && (
              <span className="absolute -top-[7px] -right-3.5 w-5 h-5 rounded-full bg-black text-white text-xs-custom flex justify-center items-center">
                {isMounted ? totalItems : "0"}
              </span>
            )
          : null}
      </button>
    </div>
  );
};

export default ShoppingCart;
