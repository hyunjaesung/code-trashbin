import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback } from "react";
import CircleToggle from "./CircleToggle";

interface IProps {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeButton = ({ isDark, setDark }: IProps) => {
  const setDarkMode = useCallback(() => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }

    setDark((prev) => !prev);
  }, []);
  return (
    <div className='w-8 h-8 mr-8 transition-all transform hover:scale-110'>
      <CircleToggle
        showChild={isDark ? "first" : "second"}
        setChild={setDarkMode}
        firstChild={<FontAwesomeIcon icon={faMoon} color='#fffffe' size='2x' />}
        secondChild={<FontAwesomeIcon icon={faSun} color='#fffffe' size='2x' />}
      />
    </div>
  );
};

export default DarkModeButton;
