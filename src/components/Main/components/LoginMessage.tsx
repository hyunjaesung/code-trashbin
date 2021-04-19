import React from "react";
import RotatingMessage from "./RotatingMessage";
interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginMessage = ({ setOpenModal }: Props) => {
  return (
    <section
      onClick={() => {
        setOpenModal(true);
      }}>
      <RotatingMessage />
    </section>
  );
};

export default LoginMessage;
