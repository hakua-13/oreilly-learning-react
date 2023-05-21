import { useState } from 'react';
import { v4 } from 'uuid';

import { ColorList } from './ColorList';
import ColorData from './color-data.json';
import { AddColorForm } from './AddColorForm';

function App() {
  const [colors, setColors] = useState(ColorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,

            }
          ];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? {...color, rating}: color
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
