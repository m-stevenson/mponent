import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "rounded-md p-2 text-sm text-foreground border-2 border-border focus:border-border-strong",
        "focus:outline-none overflow-hidden min-h-10 placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
