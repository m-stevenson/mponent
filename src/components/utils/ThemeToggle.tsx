import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Button variant={"glass"} size={"sm"} onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}
