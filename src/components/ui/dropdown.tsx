import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export function DropdownMenu(props: React.ComponentProps<typeof DropdownPrimitive.Root>) {
  return <DropdownPrimitive.Root {...props} />;
}

export function DropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownPrimitive.Trigger>
) {
  return <DropdownPrimitive.Trigger {...props} />;
}

export function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Item>) {
  return (
    <DropdownPrimitive.Item
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm",
        "outline-none focus:bg-muted hover:bg-muted",
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuSeparator(
  props: React.ComponentProps<typeof DropdownPrimitive.Separator>
) {
  return (
    <DropdownPrimitive.Separator
      className="my-1 h-px bg-border-strong"
      {...props}
    />
  );
}

export function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Label>) {
  return (
    <DropdownPrimitive.Label
      className={cn("px-2 py-1.5 text-sm font-bold", className)}
      {...props}
    />
  );
}

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownPrimitive.Content>) {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-background p-1 text-foreground shadow-md",
          className
        )}
        {...props}
      />
    </DropdownPrimitive.Portal>
  );
}



