import { useReducer } from "react"

// useReducerはArray.reduceがもとになっているので、処理が似ている。
export const Numbers = () => {
  // number: 現在の値
  // newNumber: 入力されたあたい
  // 戻り値の第1引数 : ステート更新ロジック
  // 戻り値の第2引数 0: 初期値
  const [number, setNumber ] = useReducer(
    (number, newNumber) => number + newNumber,0
  );

  return(
    <h1 onClick={() => setNumber(1)} >{number}</h1>
  )
}