"use client";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useProductStore } from "@/store/product-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

export interface ProductDetailCardProps {
  className?: string;
  images: string[];
  title: string;
  price: {
    currencyCode: number | string;
    amount: number | string;
  };
  description: string;
  colorOptions: string[];
  sizeOptions: string[];
}

export const ProductDetailCard = React.forwardRef<
  HTMLDivElement,
  ProductDetailCardProps
>(
  (
    {
      className,
      images,
      title,
      description,
      price: { currencyCode, amount },
      colorOptions,
      sizeOptions,
      ...props
    },
    ref
  ) => {
    const { selectedColor, setSelectedColor, selectedSize, setSelectedSize } =
      useProductStore();
    const addToCart = useCartStore((state) => state.addToCart);
    const router = useRouter();

    const handleAddToCart = () => {
      addToCart({
        title,
        image: selectedImage || images[0],
        price: {
          currencyCode: currencyCode.toString(),
          amount: amount.toString(),
        },
        color: selectedColor,
        size: selectedSize,
      });
    };

    const handleBuyNow = () => {
      handleAddToCart();
      router.push("/orders");
    };

    useEffect(() => {
      if (colorOptions.length > 0 && !selectedColor) {
        setSelectedColor(colorOptions[0]);
      }
      if (sizeOptions.length > 0 && !selectedSize) {
        setSelectedSize(sizeOptions[0]);
      }
    }, [
      colorOptions,
      selectedColor,
      setSelectedColor,
      sizeOptions,
      selectedSize,
      setSelectedSize,
    ]);

    const handleColorClick = (color: string) => {
      setSelectedColor(color);
    };

    const handleSizeClick = (size: string) => {
      setSelectedSize(size);
    };

    const colorImageMap = colorOptions.reduce((map, color, index) => {
      map[color.toLowerCase()] = images[index];
      return map;
    }, {} as { [key: string]: string });

    const selectedImage = colorImageMap[selectedColor.toLowerCase()];

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 w-full group gap-[42px]",
          className
        )}
        {...props}
      >
        <div className="relative rounded-[32px] overflow-hidden">
          <Image
            src={selectedImage || images[0]}
            alt={title}
            className="w-full h-full object-cover aspect-square"
            width={579}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-7 lg:max-w-[579px] w-full">
          <div className="space-y-[18px]">
            {/* Title and Price */}
            <div>
              <h3 className="text-3xl md:text-4xxl font-semibold text-black font-chillax">
                {title}
              </h3>
              <span className="flex items-center text-2xl md:text-4xl font-semibold text-black">
                <span>{currencyCode}</span>
                <span>{amount}</span>
              </span>
            </div>

            {/* Color */}
            <div className="space-y-[18px]">
              <span className="flex items-center text-xl md:text-3xl">
                <span>Color:</span>
                <span>{selectedColor}</span>
              </span>
              <ul className="flex items-center gap-[11px]">
                {colorOptions.map((color, index) => (
                  <li key={index}>
                    <span
                      className={`block w-7 h-7 rounded-full cursor-pointer ${
                        selectedColor === color ? "border-2 border-black" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => handleColorClick(color)}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size */}
            <div className="space-y-3.5">
              <h3 className="text-xl md:text-3xl">Size:</h3>
              <ul className="flex items-center gap-1.5 md:gap-3">
                {sizeOptions.map((size, index) => (
                  <li key={index}>
                    <Button
                      className={`uppercase text-sm sm:text-lg md:text-2xl font-medium max-xs:h-9 max-xs:w-11 max-sm:h-[42px] ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to cart and buy button */}
            <div className="flex gap-3">
              <Button
                className="w-full uppercase max-sm:h-11"
                size="lg"
                onClick={handleBuyNow}
              >
                Buy now
              </Button>
              <Button
                className="w-full uppercase max-sm:h-11"
                size="lg"
                variant="outline"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3.5">
            <h3 className="text-2xl md:text-3xl font-medium text-black font-chillax">
              Description
            </h3>
            <p className="text-sm lg:text-lg text-dark-gray">{description}</p>
          </div>
        </div>
      </div>
    );
  }
);

ProductDetailCard.displayName = "ProductDetailCard";
