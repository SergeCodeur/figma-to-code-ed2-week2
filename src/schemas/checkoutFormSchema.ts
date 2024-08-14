import { z } from "zod";

const checkoutFormSchema = z.object({
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

export default checkoutFormSchema;
