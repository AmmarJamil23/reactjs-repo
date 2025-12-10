import React from 'react'
import { useState } from 'react'
import { ChevronDown, ChevronUp} from "lucide-react"

const Accordion = ({ items = []}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggle(index) {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className='space-y-2'>
        {items.map((items, index) => (
            <div key={index} className='border rounded'>

                        <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
            <span>{items.title}</span>

            {activeIndex === index ? (
                <ChevronUp size={18} />
            ) : (
                <ChevronDown size={18} />
            )}
            </button>

                {activeIndex === index && (
                    <div className='px-4 py-2 bg-white'>
                        {items.content}
                    </div>
                )}
            </div>
        ))}
        
    </div>
  )
}

export default Accordion