import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import LoginButton from "./components/LoginButton";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const Header = ({ setOpenModal, setIsLogin, isLogin }: IProps) => {
  const [isDark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  return (
    <header>
      <nav className='flex justify-between items-center mt-10 mb-10'>
        <div>
          <h1 className='dark:text-darkHeadline text-headline text-4xl'>
            <FontAwesomeIcon icon={faRecycle} color='#6246ea' />
            <span className='ml-3 Anton font-bold'>Code Recycle bins</span>
          </h1>
        </div>
        <div className='flex'>
          <DarkModeButton isDark={isDark} setDark={setDark} />
          {/* <LoginButton
            setOpenModal={setOpenModal}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
