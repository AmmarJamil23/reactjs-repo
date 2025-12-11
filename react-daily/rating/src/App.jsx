import React, { useState } from 'react'
import Rating from "./features/rating/index"


const App = () => {
  
  const [rating, setRating] = useState(0);


  return (
    <div className='p-10 space-y-4'>
      <Rating value={rating} onChange={setRating} />

      <p className='text-lg'>
        Selecting rating: <span className='font-semibold'>{rating}</span>
      </p>
    </div>
  )
}

export default App