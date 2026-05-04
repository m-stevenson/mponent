import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("flex justify-between", className)}>
      {/* Navbar left */}
      <div className="flex items-center gap-2">
        <Button variant={"ghost"} size={"md"}>
          Docs
        </Button>
        <Button variant={"ghost"} size={"md"}>
          Components
        </Button>
      </div>

      {/* Navbar right */}
      <div className="flex items-center gap-4">
        <Input placeholder="Search..."></Input>
        <ThemeToggle variant="ghost" size="md" />
      </div>
    </nav>
  );
}
