import React from "react";
import "../src/styles/styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className='app w-screen h-screen flex flex-col justify-center items-center bg-background dark:bg-darkBackground'>
      <div className='max-w-screen-xl w-full h-full'>
        <Header />
      </div>
    </div>
  );
}

export default App;
