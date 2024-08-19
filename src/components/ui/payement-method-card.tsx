import { Bank, Card } from "@/assets/icons";
import useCheckoutForm from "@/hooks/use-checkout-form";
import { cn } from "@/lib/utils";
import usePaymentStore from "@/store/use-payement-method";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const PaymentMethodCard = () => {
  const { paymentMethod, setPaymentMethod } = usePaymentStore();
  const { form } = useCheckoutForm();

  const handleChecked = (method: string) => {
    setPaymentMethod(method);
  };

  const renderPaymentMethod = (
    Icon: React.ComponentType,
    label: string,
    value: string
  ) => (
    <FormItem className={cn(`space-y-0 relative rounded w-full`)}>
      <FormControl>
        <RadioGroupItem
          value={value}
          className="opacity-0 absolute left-0 top-0"
        />
      </FormControl>
      <FormLabel
        className={cn(
          paymentMethod === value ? "border-black" : "border-dark-gray",
          "h-[76px] p-3 gap-2 flex flex-col justify-center cursor-pointer border rounded-xl"
        )}
        onClick={() => handleChecked(value)}
      >
        <Icon />
        <span className="text-xs font-medium">{label}</span>
      </FormLabel>
    </FormItem>
  );

  return (
    <>
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  handleChecked(value);
                }}
                defaultValue=""
                className="grid grid-cols-2 gap-5"
              >
                {renderPaymentMethod(
                  Card,
                  "Débit/Crédit Card",
                  "Debit/Credit-Card"
                )}
                {renderPaymentMethod(
                  Bank,
                  "Virtual account",
                  "Virtual-account"
                )}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default PaymentMethodCard;
