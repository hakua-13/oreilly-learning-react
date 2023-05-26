import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useEffectTest } from "./useEffectTest";
import { useWindowSize } from "./useWindowSize";

export default function App({children=" "}) {
  // useEffectTest(children);

  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));

  useWindowSize();

  return(
    <div>
      <p>{children}</p>
    </div>
  );
}
