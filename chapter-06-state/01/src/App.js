import { useState } from 'react';

import { ColorList } from './ColorList';
import ColorData from './color-data.json';

function App() {
  const [colors, setColors] = useState(ColorData);

  return (
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
  );
}

export default App;
