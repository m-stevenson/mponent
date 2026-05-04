import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

type ThemeToggleProps = React.ComponentProps<typeof Button>;

export function ThemeToggle({ ...props }: ThemeToggleProps) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Button {...props} onClick={() => setDark(!dark)}>
      {dark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </Button>
  );
}
