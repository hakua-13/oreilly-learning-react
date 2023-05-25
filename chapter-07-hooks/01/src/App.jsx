import React, { useState, useEffect, useMemo } from "react";
import { useCallback } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown",forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export default function App({children=" "}) {
  useAnyKeyToRender();

  const words = useMemo(() => {
    const words = children.split(' ');
  return words;
  }, [children]);
  
  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  },[fn]);


  return(
    <>
      <p>{children}</p>
    </>
  );
}
