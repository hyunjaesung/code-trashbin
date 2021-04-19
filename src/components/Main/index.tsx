import React from "react";
import LoginMessage from "./components/LoginMessage";
import Modal from "./components/Modal";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const MainContainer = ({ setOpenModal, isLogin }: Props) => {
  return (
    <div className='w-full h-full'>
      {isLogin ? (
        <div>hihihihi</div>
      ) : (
        <LoginMessage setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default MainContainer;
