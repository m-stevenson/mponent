import { cva } from "class-variance-authority";

// Button
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium hover:cursor-pointer active:translate-y-[1px]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-foreground",
        secondary:
          "border border-secondary border-2 bg-background text-foreground hover:bg-secondary-foreground",
        destructive:
          "bg-destructive text-destructive-text hover:bg-destructive-highlight",
        ghost:
          "bg-ghost text-foreground hover:bg-ghost-highlight",
      },
      size: {
        sm: "h-8 px-2 text-xs",
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

// Label
export const labelVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted:
        "border border-primary border-2 bg-background text-foreground hover:bg-muted",
      error: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
