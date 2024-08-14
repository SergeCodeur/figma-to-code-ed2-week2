"use client";
import { Trash } from "@/assets/icons";
import OrderSummary from "@/components/products/order-summary";
import Orderslist from "@/components/products/orders-list";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useCartStore } from "@/store/cartStore";

const OrdersSummary = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const clearCart = useCartStore((state) => state.clearCart);
  const isMounted = useIsMounted();
  return (
    <section className="container pt-[62px] pb-[104px] flex flex-col justify-between">
      <div className="lg:max-w-[873px] w-full flex justify-between">
        <h2 className="text-lg md:text-2xl font-semibold font-chillax">
          {isMounted ? `Cart${totalItems}` : "Cart"}
        </h2>
        <span
          className="flex justify-center items-center gap-1 p-2 rounded-full bg-light-gray/50 text-dark-gray cursor-pointer"
          onClick={clearCart}
        >
          <span className="flex justify-center items-center">
            <Trash className="w-3.5 h-3.5" />
          </span>
          <span className="text-xs">Clear Cart</span>
        </span>
      </div>
      <div className="flex justify-between gap-[42px] max-lg:flex-col max-lg:items-center">
        <Orderslist isMounted={isMounted} className="lg:max-w-[873px] w-full" />
        <OrderSummary isMounted={isMounted} />
      </div>
    </section>
  );
};

export default OrdersSummary;
