import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const promoBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-white text-black",
        black: "border-transparent bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PromoBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof promoBadgeVariants> {}

function PromoBadge({ className, variant, ...props }: PromoBadgeProps) {
  return (
    <span
      className={cn(promoBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { PromoBadge, promoBadgeVariants };
