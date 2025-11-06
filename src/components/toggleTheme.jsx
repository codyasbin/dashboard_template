"use client"
import { useTheme } from "next-themes"

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}