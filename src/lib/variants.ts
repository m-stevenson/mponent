import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium hover:cursor-pointer active:translate-y-[1px] transition-all duration-100",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-foreground",
        secondary:
          "border border-primary border-2 bg-background text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-text hover:bg-destructive-highlight",
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

export const labelVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium hover:cursor-pointer active:translate-y-[1px] transition-all duration-100",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-foreground",
        muted:
          "border border-primary border-2 bg-background text-foreground hover:bg-muted",
        error: "",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-md",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
