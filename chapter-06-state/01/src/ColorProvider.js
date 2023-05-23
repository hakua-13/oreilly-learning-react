import { createContext, useState, useContext } from 'react';
import { v4 } from 'uuid';

import colorData from './color-data.json';


const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorData);
  
  const addColor = ( title, color ) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      }
    ];
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) => color.id === id? {...color, rating}: color);
    setColors(newColors);
  }

  // setColorsをコンテキストに入れてしまうとどんなそうでもできてしまうので、将来バグが混入される可能性が高くなる。
  return(
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  )
}