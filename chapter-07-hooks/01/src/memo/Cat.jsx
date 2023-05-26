import { memo } from "react";

export const Cat = memo(({ name, meow = f=>f }) => {
  console.log('rendering: ', name);
  return(
    <p onClick={() => meow(name)}>{name}</p>
  )
}, (prevProps, nextProps) => prevProps.name === nextProps.name);


// Catのプロパティに関数がしていされている場合、描画のたびにインスタンスが新しく生成されるためCatコンポーネントが再描画されてしまう。
// ↓ 対策

// memoの第2引数の機能
// const RenderCatOnce = memo(Cat, () => true);    // 初回のみ描画される
// const AlwaysRenderCat = memo(Cat, () => false); // 毎回描画される

// 第2引数に固定値ではなく、下記などのように比較する形で明記することで、再描画を防ぐことができる
// (prevProps, nextProps) => prevProps.name === nextProps.name

// useContextでアロー関数を渡した場合でも同じようになる?

// predicate: 真偽値を返すコールバック関数
// Array.filterでも登場する