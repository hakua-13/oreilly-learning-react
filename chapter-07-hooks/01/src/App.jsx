import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useEffectTest } from "./useEffect/useEffectTest";
import { useWindowSize } from "./useLayoutEffect/useWindowSize";
import { Numbers } from "./useReducer/Numbers";
import { User } from "./useReducer/User";

export default function App({children=" "}) {
  // useEffectTest(children);

  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));

  useWindowSize();

  return(
    <div>
      <p>{children}</p>
      <Numbers/>
      <User/>
    </div>
  );
}
