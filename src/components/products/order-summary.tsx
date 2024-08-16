"use client";
import useRedirectToCheckout from "@/hooks/use-redirect-to-checkout";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";
import { SummaryItem } from "./summary-items";

const OrderSummary = ({ isMounted = true }: { isMounted: boolean }) => {
  const redirectToCheckout = useRedirectToCheckout();
  const subtotal = useCartStore((state) => state.getSubtotal());
  const discount = useCartStore((state) => state.getDiscount());
  const orderTotal = useCartStore((state) => state.getOrderTotal());

  const handleRedirect = () => {
    if (orderTotal > 0) {
      redirectToCheckout();
    }
  };

  return (
    <div className="max-h-[220px] w-[285px] py-4 px-6 rounded-xl border border-light-gray">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <SummaryItem
        label="Subtotal"
        value={isMounted ? `$${subtotal.toFixed(2)}` : "$0.00"}
      />
      <SummaryItem
        label="Discount"
        value={isMounted ? `$${discount.toFixed(2)}` : "$0.00"}
      />

      {/* divide */}
      <span className="block h-[1px] w-full bg-light-gray my-3"></span>

      <div className="space-y-2">
        <SummaryItem
          label="Order total"
          value={isMounted ? `$${orderTotal.toFixed(2)}` : "$0.00"}
          isTotal
        />
        <Button
          className="w-full font-semibold"
          onClick={handleRedirect}
          // disabled={orderTotal === 0}
        >
          Checkout now
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
