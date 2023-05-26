import React, { useState, useEffect, useMemo } from "react";
import { useCallback } from "react";
import { useEffectTest } from "./useEffectTest";

export default function App({children=" "}) {
  useEffectTest(children);


  return(
    <div>
      <p>{children}</p>
    </div>
  );
}
