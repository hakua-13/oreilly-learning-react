import { useContext } from 'react'

import { useColors } from './ColorProvider';
import { Color } from "./Color"

export const ColorList = () => {
  const { colors } = useColors();
  if(!colors.length) return <div>No Colors Listed.</div>
  return(
    <div>
      {colors.map(color => (
      <Color 
        key={color.id} {...color}
      />
      ))}
    </div>
  )
}