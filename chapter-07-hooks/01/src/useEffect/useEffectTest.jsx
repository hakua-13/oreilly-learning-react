import { useEffect, useCallback, useMemo, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown",forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export const useEffectTest = (_children) => {
  useAnyKeyToRender();


  const words = useMemo(() => {
    const words = _children.split(' ');
  return words;
  }, [_children]);
  
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
}