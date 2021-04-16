import React from "react";
import "../src/styles/styles.css";
import Header from "./components/Header";
import MainContainer from "./components/Main";

function App() {
  return (
    <div className='Anton app w-screen h-screen flex flex-col justify-center items-center text-headline dark:text-darkHeadline bg-background dark:bg-darkBackground'>
      <div className='max-w-screen-xl w-full h-full'>
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
