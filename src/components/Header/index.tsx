import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import LoginButton from "./components/LoginButton";

const Header = () => {
  const [isDark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  return (
    <nav className='flex justify-between items-center mt-10'>
      <div>
        <h1 className='dark:text-darkHeadline text-headline text-4xl'>
          <FontAwesomeIcon icon={faRecycle} color='#6246ea' />
          <span className='ml-3 Anton font-bold'>Code Recycle bins</span>
        </h1>
      </div>
      <div className='flex'>
        <DarkModeButton isDark={isDark} setDark={setDark} />
        <LoginButton isDark={isDark} />
      </div>
    </nav>
  );
};

export default Header;
