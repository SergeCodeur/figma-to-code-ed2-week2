"use client";
import { cn } from "@/lib/utils";
import { useProductStore } from "@/store/productStore";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

export interface ProductDetailCardProps {
  className?: string;
  images: { [key: string]: string }; // Map des images par couleur
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
    const { selectedColor, setSelectedColor } = useProductStore();

    useEffect(() => {
      if (colorOptions.length > 0 && !selectedColor) {
        setSelectedColor(colorOptions[0]);
      }
    }, [colorOptions, selectedColor, setSelectedColor]);

    const handleColorClick = (color: string) => {
      setSelectedColor(color);
    };

    const selectedImage = images[selectedColor];

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
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt={title}
              className="w-full h-full object-cover aspect-square"
              width={579}
              height={600}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p>No image available for this color</p>
            </div>
          )}
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
                      className={`block w-7 h-7 rounded-full bg-${color.toLowerCase()} cursor-pointer`}
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
                    <Button className="uppercase text-sm sm:text-lg md:text-2xl font-medium max-xs:h-9 max-xs:w-11 max-sm:h-[42px]">
                      {size}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to cart and buy button */}
            <div className="flex gap-3">
              <Button className="w-full uppercase max-sm:h-11" size="lg">
                Buy now
              </Button>
              <Button
                className="w-full uppercase max-sm:h-11"
                size="lg"
                variant="outline"
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
