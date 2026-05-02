import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border shadow-sm p-2 px-4 cursor:none",
        className
      )}
      {...props}
    />
  );
}