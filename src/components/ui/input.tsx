import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "rounded-md p-2 text-sm text-foreground border-2 border-border focus:border-border-strong focus:outline-none",
        className
      )}
      {...props}
    />
  );
}