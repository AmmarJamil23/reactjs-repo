import React from 'react'
import { useState } from 'react'

const Tooltip = ({ 
    text = "Tooltip text",
    position = "top"}) => {
    const [show, setShow] = useState(false);

    const positionClasses = {
  top: "-top-10 left-1/2 -translate-x-1/2",
  bottom: "top-10 left-1/2 -translate-x-1/2",
  left: "left-0 -translate-x-full top-1/2 -translate-y-1/2",
  right: "right-0 translate-x-full top-1/2 -translate-y-1/2"
};

const arrowClasses = {
  top: "absolute left-1/2 -bottom-2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-black",
  bottom: "absolute left-1/2 -top-2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-black",
  left: "absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-black",
  right: "absolute left-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-black"
};



  return (
    <div 
    className='relative inline-block m-5'
    onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
        <button className='px-4 py-2 bg-blue-600 text-white rounded'>
            Hover
        </button>

       {show && (
  <div
    className={`absolute ${positionClasses[position]} bg-black text-white text-sm px-3 py-1 rounded opacity-0 animate-fadeIn`}
  >
    {text}

    <div
      className={`w-0 h-0 border-l-8 border-r-8 border-t-8 border-b-8 ${arrowClasses[position]}`}
    ></div>
  </div>
)}

    </div>
  )
}

export default Tooltip