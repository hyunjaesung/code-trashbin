import React, { useCallback } from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const provider = new firebase.auth.GithubAuthProvider();

const Modal = ({ setIsLogin, setOpenModal }: Props) => {
  const handleGithubLogin = useCallback(() => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential as firebase.auth.OAuthCredential;
        const token = credential.accessToken;
        localStorage.setItem("token", token as string);
        console.log(result);
        // The signed-in user info.
        // const user = result.user;
        // ...
        setIsLogin(true);
        setOpenModal(false);
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        localStorage.removeItem("token");
        setIsLogin(false);
      });
  }, [setIsLogin]);

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
      <h1 className='text-3xl mb-10 text-gray-800'>Connect Your Storage</h1>
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
