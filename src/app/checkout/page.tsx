"use client";
import CheckoutForm from "@/components/CheckoutForm";
import { SummaryItem } from "@/components/products/summary-items";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShippingMethodCard from "@/components/ui/shipping-method-card";
import Image from "next/image";
import Link from "next/link";

const CheckOut = () => {
  return (
    <section className="container pt-[62px] pb-[104px] space-y-5">
      <h2 className="text-lg md:text-2xl font-semibold font-chillax">
        Checkout
      </h2>
      <div className="flex w-full gap-28 max-lg:flex-col max-lg:gap-[62px]">
        {/* order */}
        <div className="lg:max-w-[600px] w-full">
          {/* order */}

          <h3 className="text-sm font-semibold">Your Order</h3>
          <p className="text-xs text-dark-gray mt-1 mb-4">
            By placing your order, you agree to Ballamas{" "}
            <Link href="#" className="underline text-black">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline text-black">
              Policy.
            </Link>
          </p>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <div className="flex gap-2.5">
                <Image
                  className="aspect-square rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410"
                  alt="t-shirt"
                  width={72}
                  height={72}
                />
                <div className="flex flex-col justify-center">
                  <span className="md:text-sm text-xs-custom font-semibold">
                    T-shirt
                  </span>
                  <span className="md:text-sm text-xs-custom font-medium text-dark-gray">
                    Color: Green - Size: Large
                  </span>
                </div>
              </div>
              <span className="md:text-sm text-xs-custom font-semibold">
                $87
              </span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-2.5">
                <Image
                  className="aspect-square rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410"
                  alt="t-shirt"
                  width={72}
                  height={72}
                />
                <div className="flex flex-col justify-center">
                  <span className="md:text-sm text-xs-custom font-semibold">
                    T-shirt
                  </span>
                  <span className="md:text-sm text-xs-custom font-medium text-dark-gray">
                    Color: Green - Size: Large
                  </span>
                </div>
              </div>
              <span className="md:text-sm text-xs-custom font-semibold">
                $87
              </span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-2.5">
                <Image
                  className="aspect-square rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410"
                  alt="t-shirt"
                  width={72}
                  height={72}
                />
                <div className="flex flex-col justify-center">
                  <span className="md:text-sm text-xs-custom font-semibold">
                    T-shirt
                  </span>
                  <span className="md:text-sm text-xs-custom font-medium text-dark-gray">
                    Color: Green - Size: Large
                  </span>
                </div>
              </div>
              <span className="md:text-sm text-xs-custom font-semibold">
                $87
              </span>
            </li>
          </ul>

          {/* discount form */}
          <form className="my-6">
            <span className="text-xs block font-medium">Discount code</span>
            <div className="flex gap-2 mb-2 mt-1">
              <Input
                type="text"
                placeholder="Add discount code"
                className="placeholder:text-black max-w-[316px] w-full"
              />
              <Button
                type="submit"
                className="text-white text-sm font-semibold"
              >
                Apply
              </Button>
            </div>
            <span className="text-xs text-medium text-dark-gray block">
              <span className="text-black">
                New customer? <Link href="# underline">Signup</Link>
              </span>{" "}
              to get better offer
            </span>
          </form>
          <SummaryItem label="Subtotal" value="$524.00" />
          <SummaryItem label="Discount" value="$0" />

          {/* divide */}
          <span className="block h-[1px] w-full bg-light-gray my-3"></span>

          {/* total */}
          <SummaryItem label="Order total" value="$524.00" isTotal />

          {/* chipping method */}
          <div className="w-full mt-3.5 space-y-3">
            <ShippingMethodCard
              method="Free Shipping"
              details="7-30 business days"
              price="$0"
            />
            <ShippingMethodCard
              method="Regular shipping"
              details="3-14 business days"
              price="$7,50"
            />
            <ShippingMethodCard
              method="Express shipping"
              details="1-3 business days"
              price="$22,50"
            />
          </div>
        </div>

        {/* checkout form */}
        <div className="lg:max-w-[488px] w-full">
          <CheckoutForm />
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
