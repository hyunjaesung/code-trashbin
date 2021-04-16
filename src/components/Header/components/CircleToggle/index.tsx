import React, { useState } from "react";
import "./circleToggle.css";

interface Props {
  showChild: "first" | "second";
  setChild: React.Dispatch<React.SetStateAction<boolean>>;
  firstChild: JSX.Element;
  secondChild: JSX.Element;
}

const CircleToggle = ({
  firstChild,
  secondChild,
  showChild,
  setChild,
}: Props) => {
  const [isAnimation, setIsAnimation] = useState(false);

  return (
    <button
      className=' relative bg-button overflow-hidden w-12 h-12 rounded-full focus:outline-none'
      onClick={() => {
        setChild((prev) => !prev);
        if (!isAnimation) {
          setIsAnimation(true);
        }
      }}>
      <div className='flex relative w-full h-full'>
        <div
          className={`relative ${
            showChild === "first"
              ? "cicleToggle-first-in"
              : "cicleToggle-first-out"
          } `}
          style={isAnimation ? {} : { animation: "none" }}>
          {firstChild}
        </div>
        <div
          className={`relative ${
            showChild === "second"
              ? "cicleToggle-second-in"
              : "cicleToggle-second-out"
          } `}
          style={isAnimation ? {} : { animation: "none" }}>
          {secondChild}
        </div>
      </div>
    </button>
  );
};

export default CircleToggle;
