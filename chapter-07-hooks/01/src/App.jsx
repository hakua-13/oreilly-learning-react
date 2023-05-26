import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useEffectTest } from "./useEffectTest";

export default function App({children=" "}) {
  // useEffectTest(children);

  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));

  return(
    <div>
      <p>{children}</p>
    </div>
  );
}
