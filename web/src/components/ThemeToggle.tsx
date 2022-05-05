import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <Moon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}
