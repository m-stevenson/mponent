import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { labelVariants } from "@/lib/variants";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export function label({ className, variant, ...props }: LabelProps) {
  return (
    <label className={cn(labelVariants({ variant }), className)} {...props} />
  );
}
