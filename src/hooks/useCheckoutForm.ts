import checkoutFormSchema from "@/schemas/checkoutFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useCheckoutForm = () => {
  // const { selectedShipping } = useShippingStore();
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      region: "",
      postalCode: "",
      paymentMethod: "",
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
    },
  });

  const onSubmit = (data: z.infer<typeof checkoutFormSchema>) => {
    console.log(data);
  };

  return { form, onSubmit };
};

export default useCheckoutForm;
