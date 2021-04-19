import React from "react";
import LoginMessage from "./components/LoginMessage";
import Modal from "./components/Modal";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContainer = ({ setOpenModal }: Props) => {
  return (
    <div className='w-full h-full'>
      <LoginMessage setOpenModal={setOpenModal} />
    </div>
  );
};

export default MainContainer;
