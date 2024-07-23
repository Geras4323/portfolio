import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const [realTheme, setRealTheme] = useState<string>();

  useEffect(() => {
    setRealTheme(theme);
  }, [theme]);

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return { theme: realTheme, switchTheme };
};
