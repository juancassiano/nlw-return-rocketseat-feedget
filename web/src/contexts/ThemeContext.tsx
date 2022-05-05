import { createContext, ReactNode, useEffect, useState } from "react";
interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: any;
}
export const ThemeContext = createContext({} as any);

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const userPrefs = window.localStorage.getItem("color-theme");
    if (typeof userPrefs === "string") {
      return userPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "light";
    }
    return "dark";
  }
};

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(getInitialTheme);
  const rawSetTheme = (rawTheme: any) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
