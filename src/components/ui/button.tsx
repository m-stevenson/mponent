import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium hover:cursor-pointer active:translate-y-[1px] transition-all duration-100 shadow-xl/30 inset-shadow-sm/30 text-shadow-md/10",
  {
    variants: {
      variant: {
        primary: "bg-sky text-white hover:bg-sky-light text-black ",
        secondary: "bg-gray-300 hover:bg-gray-200",
        delete: "bg-red-500 text-white hover:bg-red-400",
        confirm: "bg-green-500 text-white hover:bg-green-400",
        glass: "btn-glass text-cream",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-md",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
