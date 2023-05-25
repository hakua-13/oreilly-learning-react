import React, { useState, useEffect, useMemo } from "react";

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
  }, [words])


  return(
    <>
      <p>{children}</p>
    </>
  );
}
