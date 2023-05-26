import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useEffectTest } from "./useEffect/useEffectTest";
import { useWindowSize } from "./useLayoutEffect/useWindowSize";
import { Numbers } from "./useReducer/Numbers";
import { User } from "./useReducer/User";
import { Cat } from "./memo/Cat";

export default function App({children=" "}) {
  const [cats, setCats] = useState(['aa', 'bb', 'cc'])
  // useEffectTest(children);

  // useEffect(() => console.log('useEffect'));
  // useLayoutEffect(() => console.log('useLayoutEffect'));

  // useWindowSize();

  return(
    <div>
      {/* <p>{children}</p>
      <Numbers/>
      <User/> */}
      {cats.map((cat, i) => (
        <Cat key={i} name={cat} meow={(cat) => console.log(cat, ': nya')}/>
      ))}
      <button onClick={() => {setCats([...cats, 'neko'])}} >add a cat</button>
    </div>
  );
}
