import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown",forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

const words = ['sick', 'powder', 'day'];
export default function App() {
  useAnyKeyToRender();
  
  useEffect(() => {
    console.log('fresh render');
  }, [words])

  // useEffect(() => {
  //   console.log("fresh render");
  // });

  return <h1>Open the console</h1>;
}
