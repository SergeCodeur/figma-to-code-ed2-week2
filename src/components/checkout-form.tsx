"use client";

import { ArrowRight, Lock } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useCheckoutForm from "@/hooks/use-checkout-form";
import { useIsMounted } from "@/hooks/use-is-mounted";
import CustomFormField from "./ui/form-field";
import PaymentMethodCard from "./ui/payement-method-card";
import { Checkbox } from "./ui/react-checkbox";

const CheckoutForm = ({ totalPrice }: { totalPrice: number }) => {
  const { form, onSubmit } = useCheckoutForm();
  const isMounted = useIsMounted();

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
          <PaymentMethodCard />
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
            <span>${isMounted ? totalPrice : "0.00"}</span>
            <ArrowRight className="text-white" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
