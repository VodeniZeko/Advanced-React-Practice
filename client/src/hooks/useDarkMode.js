import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage(initialValue);
  useEffect(() => {
    return darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
