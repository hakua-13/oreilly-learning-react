import { useLayoutEffect } from "react";
import { useState } from "react"

export const useWindowSize = () => {
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(window.innerWidth);
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return [width, height];
};