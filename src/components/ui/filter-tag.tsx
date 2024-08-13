import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const filterTagVariants = cva(
  "inline-flex items-center gap-2 h-12 cursor-pointer max-sm:h-10 max-sm:tracking-[-1px] rounded-[100px] border px-2.5 py-3.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent text-white",
        outline: "border-black bg-transparent text-black",
      },
      active: {
        true: "border-transparent bg-black text-white",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      active: false,
    },
  }
);

export interface FilterTagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof filterTagVariants> {
  active?: boolean;
}

function FilterTag({ className, variant, active, ...props }: FilterTagProps) {
  return (
    <span
      className={cn(filterTagVariants({ variant, active }), className)}
      {...props}
    />
  );
}

export { FilterTag, filterTagVariants };
