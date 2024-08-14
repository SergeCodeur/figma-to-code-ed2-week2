"use client";

import { ArrowRight, Bank, Card, Lock } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useCheckoutForm from "@/hooks/useCheckoutForm";
import { cn } from "@/lib/utils";
import CustomFormField from "./ui/form-field";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/react-checkbox";

const CheckoutForm = ({ totalPrice }: { totalPrice: number }) => {
  const { form, onSubmit } = useCheckoutForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex gap-3 w-full max-md:flex-col">
          <CustomFormField
            control={form.control}
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
          />
          <CustomFormField
            control={form.control}
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <CustomFormField
            control={form.control}
            name="email"
            label="Email address"
            placeholder="Enter your email address"
          />
          <CustomFormField
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <CustomFormField
            control={form.control}
            name="address"
            label="Address"
            placeholder="Enter your address"
          />
          <CustomFormField
            control={form.control}
            name="city"
            label="City"
            placeholder="City"
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <CustomFormField
            control={form.control}
            name="region"
            label="Region"
            placeholder="Select region"
          />
          <CustomFormField
            control={form.control}
            name="postalCode"
            label="Postal code"
            placeholder="Enter your postal code"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Select payment method</h3>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue=""
                    className="grid grid-cols-2 gap-5"
                  >
                    <FormItem
                      className={cn(`space-y-0 relative rounded w-full`)}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value="Debit/Credit-Card"
                          className="opacity-0 absolute left-0 top-0"
                        />
                      </FormControl>
                      <FormLabel className="h-[76px] p-3 gap-2 flex flex-col justify-center cursor-pointer border border-black rounded-xl">
                        <Card />
                        <span className="text-xs font-medium">
                          Débit/Crédit Card
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(`space-y-0 relative rounded w-full`)}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value="Virtual-account"
                          className="opacity-0 absolute left-0 top-0"
                        />
                      </FormControl>
                      <FormLabel className="h-[76px] p-3 gap-2 flex flex-col justify-center cursor-pointer border border-dark-gray rounded-xl">
                        <Bank />
                        <span className="text-xs font-medium">
                          Virtual account
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="relative">
            <CustomFormField
              control={form.control}
              name="cardNumber"
              label="Card number"
              placeholder="Card number"
            />
            <Lock className="absolute right-3.5 top-1/2 translate-y-[30%]" />
          </div>
          <div className="flex gap-3 mt-2 max-md:flex-col">
            <CustomFormField
              control={form.control}
              name="expirationDate"
              label="Expiration date"
              placeholder="Expiration date (MM/YY)"
            />
            <CustomFormField
              control={form.control}
              name="securityCode"
              label="Security code"
              placeholder="Security code"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 !mt-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Use shipping address as billing address
          </label>
        </div>

        <div className="w-full flex justify-center items-center !mt-5">
          <Button
            type="submit"
            className="max-w-[316px] w-full"
            disabled={totalPrice === 0}
          >
            <span>Pay</span>
            <span>${totalPrice}</span>
            <ArrowRight className="text-white" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
