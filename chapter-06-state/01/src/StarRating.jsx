import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Star } from './Star';


export const StartRating = ({ totalStars = 5, ...props }) => {
  const [ selectedStars, setSelectedStars ] = useState(3);

  return(
    <div {...props}>
    {[...Array(totalStars)].map((_, i) =>(
      <Star key={i} selected={ selectedStars > i } onSelect={() => setSelectedStars(i + 1)}/>)
    )}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
    </div>
  )
}