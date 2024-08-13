import useShippingStore from "@/store/useShippingMethode";
import { useEffect } from "react";

type ShippingMethodCardProps = {
  method: string;
  details: string;
  price: number | string;
};

const ShippingMethodCard = ({
  method,
  details,
  price,
}: ShippingMethodCardProps) => {
  const { selectedShipping, setSelectedShipping } = useShippingStore();
  const isSelected = selectedShipping === method;

  const handleChecked = () => {
    setSelectedShipping(method);
  };

  useEffect(() => {
    console.log("Selected Shipping Method:", selectedShipping);
  }, [selectedShipping]);
  return (
    <div
      className={`p-3 rounded-xl border ${
        isSelected ? "border-black" : "border-light-gray"
      } flex items-center gap-[13px] cursor-pointer select-none`}
      onClick={handleChecked}
    >
      <span className="flex justify-center items-center w-[18px] h-[18px] border border-dark-gray rounded-full">
        <span
          className={`${
            isSelected ? "opacity-1" : "opacity-0"
          } w-2.5 h-2.5 bg-black rounded-full block`}
        ></span>
      </span>
      <div className="flex justify-between items-center flex-1 h-[38px]">
        <div className="space-y-0.5">
          <h4 className="text-sm font-medium">{method}</h4>
          <span className="text-xs text-dark-gray">{details}</span>
        </div>
        <span className="text-sm font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default ShippingMethodCard;
