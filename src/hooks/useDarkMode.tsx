import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

const useDarkMode = (): [
  colorTheme: "light" | "dark",
  setTheme: (theme: ThemeType) => void
] => {
  const [theme, setTheme] = useState<ThemeType>(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
