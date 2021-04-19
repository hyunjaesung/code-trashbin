import React from "react";
import { handleGithubLogin } from "../utils/handleLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
interface Props {}

const Modal = (props: Props) => {
  return (
    <section
      className='w-96 h-96 absolute rounded-full bg-white z-50 mt-auto mb-auto flex justify-center flex-col items-center'
      style={{
        boxShadow: `0 2.8px 1.2px rgba(0, 0, 0, 0.02),
                    0 6.7px 2.9px rgba(0, 0, 0, 0.028),
                    0 12.5px 5.4px rgba(0, 0, 0, 0.035),
                    0 22.3px 9.6px rgba(0, 0, 0, 0.042),
                    0 41.8px 18px rgba(0, 0, 0, 0.05),
                    0 100px 43px rgba(0, 0, 0, 0.07)`,
      }}>
      <h1 className='text-3xl mb-10 text-gray-500'>Connect Your Storage</h1>
      <div>
        <button
          onClick={handleGithubLogin}
          className='hover:opacity-70 focus:outline-none'>
          <FontAwesomeIcon icon={faGithub} color='#6246ea' size='4x' />
        </button>
      </div>
    </section>
  );
};

export default Modal;
