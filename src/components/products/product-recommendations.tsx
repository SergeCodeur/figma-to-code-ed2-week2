"use client";

import { ProductCard } from "./product-card";

const product = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    title: "SUMMER SHIRT",
    price: {
      currencyCode: "$",
      amount: "99",
    },
  },
];

const ProductRecommendations = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl leading-7 md:text-3xl font-semibold font-chillax">
        You may also like
      </h2>
      <ul className="flex gap-3.5 overflow-x-scroll no-scrollbar">
        {product.map((product, index) => (
          <li key={index}>
            <ProductCard className="min-w-[322px]" {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendations;
