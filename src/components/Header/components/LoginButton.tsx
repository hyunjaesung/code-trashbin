import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CircleToggle from "./CircleToggle";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const LoginButton = ({ setOpenModal, setIsLogin, isLogin }: IProps) => {
  return (
    <div className='w-8 h-8 transition-all transform hover:scale-110'>
      {isLogin ? (
        <div className='text-black'>LogOut</div>
      ) : (
        <div className='w-full h-full'>
          <FontAwesomeIcon icon={faSignInAlt} color='#fffffe' size='2x' />
        </div>
      )}
      {/* <CircleToggle
        trigger={isLogin}
        firstChild={
          // <FontAwesomeIcon icon={faSignOutAlt} color='#fffffe' size='2x' />
        }
        secondChild={}
        showChild={isLogin ? "first" : "second"}
        setToggle={() => {
          if (isLogin) {
            setIsLogin(false);
            localStorage.removeItem("token");
          } else {
            console.log("openModal");
            setOpenModal(true);
          }
        }}
      /> */}
    </div>
  );
};

export default LoginButton;
