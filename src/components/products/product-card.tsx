"use client";
import { ShoppingBag } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

export interface ProductCardProps {
  className?: string;
  image: string;
  title: string;
  price: {
    currencyCode: number | string;
    amount: string;
  };
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    { className, image, title, price: { currencyCode, amount }, ...props },
    ref
  ) => {
    const router = useRouter();
    const addToCart = useCartStore((state) => state.addToCart);
    const handleBuyNow = () => {
      router.push(
        "/products/" +
          encodeURIComponent(title.toLowerCase().replace(/ /g, "-"))
      );
    };

    const handleAddToCart = () => {
      addToCart({
        title,
        image,
        price: {
          currencyCode: currencyCode.toString(),
          amount: amount.toString(),
        },
      });
    };
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full group flex-col space-y-4 max-w-[322.67px] h-[495px] bg-white",
          className
        )}
        {...props}
      >
        <div className="relative rounded-[32px] overflow-hidden">
          <div className="h-[405px] w-full">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              width={322.67}
              height={405}
            />
          </div>

          {/* Shop button */}
          <div className="absolute flex justify-center items-end inset-0 bg-black/[23%] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex justify-center items-end gap-1 w-full h-full pb-[18px] max-w-[286px]">
              <Button
                className="text-black bg-white text-sm"
                onClick={handleAddToCart}
              >
                <ShoppingBag />
                <span className="uppercase font-extrabold">Add to cart</span>
              </Button>
              <Button
                variant="outline"
                className="text-white border-white uppercase text-sm"
                onClick={handleBuyNow}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-0.5">
          <h3 className="text-2xl md:text-3xl font-semibold text-black uppercase truncate">
            {title}
          </h3>
          <span className="flex items-center gap-[2px] text-xl sm:text-2xxl font-bold text-dark-gray">
            <span>{currencyCode}</span>
            <span>{amount}</span>
          </span>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";
