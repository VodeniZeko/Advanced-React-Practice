import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode("dark-mode", false);

  const toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return <button onClick={toggle}>hit me</button>;
};
