import React, { useState } from 'react'
import { Star } from "lucide-react"

const Rating = ({
  max = 5,
  value = 0,
  onChange = () => {}
}) => {

  const [hovered, setHovered] = useState(0);

  return (
      <div className="flex gap-1">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;

        return (
          <button
            key={index}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(starValue)}
            className="p-1"
          >
            <Star
              size={28}
              className={
                starValue <= (hovered || value)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }
            />
          </button>
        );
      })}
    </div>
  )
}

export default Rating