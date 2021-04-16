import React from "react";
import LoginMessage from "./components/LoginMessage";

interface Props {}

const MainContainer = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <LoginMessage />
    </div>
  );
};

export default MainContainer;
