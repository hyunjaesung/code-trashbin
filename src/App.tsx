import React, { useState } from "react";
import "../src/styles/styles.css";
import Header from "./components/Header";
import MainContainer from "./components/Main";
import Modal from "./components/Main/components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div
      className={`Anton ${
        openModal ? "overflow-hidden" : ""
      } app w-screen h-screen flex flex-col justify-center items-center text-headline dark:text-darkHeadline bg-background dark:bg-darkBackground`}>
      {openModal && (
        <>
          <div
            className='absolute w-screen h-screen opacity-70 bg-gray-800 z-40'
            onClick={() => {
              setOpenModal(false);
            }}></div>
          <Modal />
        </>
      )}
      <div className='max-w-screen-xl w-full h-full'>
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
