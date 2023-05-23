import { FaTrash } from 'react-icons/fa';

import { StartRating } from "./StarRating";
import { useColors } from './ColorProvider';

export const Color = ({ 
  id,
  title,
  color,
  rating,
  // onRemove= f => f,
  // onRate=f=> f
}) => {
  const { removeColor, rateColor } = useColors();

  return(
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash/>
      </button>
      <div style={{height: 50, backgroundColor: color}}></div>
      <StartRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  )
}