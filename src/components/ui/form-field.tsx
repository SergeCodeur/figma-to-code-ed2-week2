import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

interface FormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
}

const CustomFormField = ({
  control,
  name,
  label,
  placeholder,
}: FormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-xs font-medium">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className="border-dark-gray"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
