import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CircleToggle from "./CircleToggle";

interface IProps {
  isDark: boolean;
}

const LoginButton = ({ isDark }: IProps) => {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className='w-8 h-8 transition-all transform hover:scale-110'>
      <CircleToggle
        firstChild={
          <FontAwesomeIcon icon={faSignOutAlt} color='#fffffe' size='2x' />
        }
        secondChild={
          <FontAwesomeIcon icon={faSignInAlt} color='#fffffe' size='2x' />
        }
        showChild={isLogin ? "first" : "second"}
        setChild={setLogin}
      />
    </div>
  );
};

export default LoginButton;
