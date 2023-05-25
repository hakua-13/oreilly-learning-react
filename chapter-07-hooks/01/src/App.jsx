import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown",forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export default function App() {
  useAnyKeyToRender();
  
  const words = ['sick', 'powder', 'day'];
  useEffect(() => {
    console.log('fresh render');
  }, [words])

  // useEffect(() => {
  //   console.log("fresh render");
  // });

  return <h1>Open the console</h1>;
}
