"use client";
import { Plus, Remove, Trash } from "@/assets/icons";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

const Orderslist = ({
  className,
  isMounted,
}: {
  className?: string;
  isMounted?: boolean;
}) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className={`${className}`}>
      <table className="w-full text-left">
        <thead>
          <tr className="text-dark-gray text-xs-custom md:text-xs font-medium py-3 h-10 border-b border-light-gray">
            <th>Product</th>
            <th className="md:translate-x-[89px] translate-x-[30px]">
              Quantity
            </th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {isMounted ? (
            Object.keys(cart).length > 0 ? (
              Object.keys(cart).map((productTitle) => {
                const product = cart[productTitle];
                const totalPrice =
                  parseFloat(product.price.amount) * product.quantity;
                return (
                  <tr key={productTitle} className="border-b border-light-gray">
                    <td className="py-5 flex gap-2.5 items-center">
                      <Image
                        className="aspect-square rounded-lg"
                        src={product.image}
                        alt={product.title}
                        width={72}
                        height={72}
                        style={{ width: "auto", height: "auto" }}
                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="md:text-sm text-xs-custom font-semibold">
                          {product.title}
                        </span>
                        <span className="md:text-sm text-xs-custom font-medium text-dark-gray">
                          Green - Large
                        </span>
                        <span className="md:text-sm text-xs-custom font-semibold">
                          {product.price.currencyCode} {product.price.amount}
                        </span>
                      </div>
                    </td>
                    <td className="py-5">
                      <div className="flex items-center gap-2">
                        <span className="flex justify-between px-3 items-center gap-1 w-[124px] h-11 rounded-full bg-light-gray/50">
                          <span
                            className="cursor-pointer"
                            onClick={() => decreaseQuantity(productTitle)}
                          >
                            <Remove />
                          </span>
                          {product.quantity}
                          <span
                            className="cursor-pointer"
                            onClick={() => increaseQuantity(productTitle)}
                          >
                            <Plus />
                          </span>
                        </span>
                        <span
                          className="flex justify-center items-center h-11 w-11 rounded-full bg-light-gray/50 cursor-pointer"
                          onClick={() => removeFromCart(productTitle)}
                        >
                          <Trash />
                        </span>
                      </div>
                    </td>
                    <td className="py-2 text-xs md:text-sm font-semibold">
                      {product.price.currencyCode} {totalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="py-5 text-center text-xs text-dark-gray"
                >
                  No products in the cart.
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td
                colSpan={3}
                className="py-5 text-center text-xs text-dark-gray"
              >
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orderslist;
