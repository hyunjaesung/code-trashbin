import React, { useState, useEffect } from "react";
import "./circleToggle.css";

interface Props {
  showChild: "first" | "second";
  setToggle: () => void;
  firstChild: JSX.Element;
  secondChild: JSX.Element;
  trigger: boolean;
}

const CircleToggle = ({
  firstChild,
  secondChild,
  showChild,
  setToggle,
  trigger,
}: Props) => {
  const [hasAnimation, setHasAnimation] = useState(false);

  return (
    <button
      className=' relative bg-button overflow-hidden w-12 h-12 rounded-full focus:outline-none'
      onClick={() => {
        setToggle();
        if (!hasAnimation && trigger) {
          setHasAnimation(true);
        }
      }}>
      <div className='flex relative w-full h-full'>
        <div
          className={`relative ${
            showChild === "first"
              ? "cicleToggle-first-in"
              : "cicleToggle-first-out"
          } `}
          style={hasAnimation ? {} : { animation: "none" }}>
          {firstChild}
        </div>
        <div
          className={`relative ${
            showChild === "second"
              ? "cicleToggle-second-in"
              : "cicleToggle-second-out"
          } `}
          style={hasAnimation ? {} : { animation: "none" }}>
          {secondChild}
        </div>
      </div>
    </button>
  );
};

export default CircleToggle;
