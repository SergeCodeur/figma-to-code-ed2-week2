"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/react-checkbox";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .max(50, { message: "Username must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" })
    .max(50, { message: "Email must be less than 50 characters" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .max(50, { message: "Phone number must be less than 50 characters" }),

  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(50, { message: "Address must be less than 50 characters" }),

  city: z
    .string()
    .min(1, { message: "City is required" })
    .max(50, { message: "City must be less than 50 characters" }),
  region: z
    .string()
    .min(1, { message: "Region is required" })
    .max(50, { message: "Region must be less than 50 characters" }),

  postalCode: z
    .string()
    .min(1, { message: "Postal code is required" })
    .max(50, { message: "Postal code must be less than 50 characters" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),

  cardNumber: z
    .string()
    .min(1, { message: "Card number is required" })
    .max(50, { message: "Card number must be less than 50 characters" }),
  expirationDate: z
    .string()
    .min(1, { message: "Expiration date is required" })
    .max(50, { message: "Expiration date must be less than 50 characters" }),
  securityCode: z
    .string()
    .min(1, { message: "Security code is required" })
    .max(50, { message: "Security code must be less than 50 characters" }),
});

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex gap-3 w-full max-md:flex-col">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">
                  First name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">
                  Phone number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="City"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3 w-full max-md:flex-col">
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">Region</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Select region"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs font-medium">
                  Postal code
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your postal code"
                    className="border-dark-gray"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem className="w-full mt-[22px]">
                  <FormControl>
                    <Input
                      placeholder="Card number"
                      className="border-dark-gray"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Lock className="absolute right-3.5 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex gap-3 mt-2 max-md:flex-col">
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Expiration date (MM/YY)"
                      className="border-dark-gray"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="securityCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Security code"
                      className="border-dark-gray"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
          <Button type="submit" className="max-w-[316px] w-full">
            <span>Pay</span>
            <span>$87</span>
            <ArrowRight className="text-white" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
