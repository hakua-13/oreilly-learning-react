import { FaTrash } from 'react-icons/fa';

import { StartRating } from "./StarRating"

export const Color = ({ 
  id,
  title,
  color,
  rating,
  onRemove= f => f,
  onRate=f=> f
}) => {
  return(
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash/>
      </button>
      <div style={{height: 50, backgroundColor: color}}></div>
      <StartRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  )
}