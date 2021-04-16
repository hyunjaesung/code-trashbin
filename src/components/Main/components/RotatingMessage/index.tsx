import React, { useRef, useLayoutEffect } from "react";
import "./rotatingMessage.css";
interface Props {}

const setEmblem = (el: HTMLDivElement | null) => {
  const element = el as HTMLDivElement;
  const text = element.innerText;
  element.innerText = "";
  for (var i = 0; i < text.length; i++) {
    const letter = text[i];
    const span = document.createElement("span");
    const node = document.createTextNode(letter);
    const r = (360 / text.length) * i;

    const x: number = ((Math.PI / text.length) as any).toFixed(1) * i;
    const y: number = ((Math.PI / text.length) as any).toFixed(0) * i;
    span.appendChild(node);
    span.style.transform =
      "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
    element.appendChild(span);
  }
};

const RotatingMessage = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (ref !== null) {
      setEmblem(ref.current);
    }
  }, []);
  return (
    <div className='emblem' ref={ref}>
      Please-Connect-Your-GitHub-
    </div>
  );
};

export default RotatingMessage;
