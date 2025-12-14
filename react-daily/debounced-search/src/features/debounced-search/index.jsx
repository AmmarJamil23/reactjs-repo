import React from 'react'
import { useState, useEffect } from 'react';

const DebouncedSearch = ({
    delay = 500,
    onSearch = () => {}
}) => {
  const [value, setValue] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
        onSearch(value);
    }, delay);

    return () => {
        clearTimeout(timer)
    }

  }, [value, delay, onSearch])
  return (
    <div className='space-y-2'>
        <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Type to search...'
        className='w-full px-4 py-2 border rounded'
         />

         <p className='text-sm text-gray-700'>
            Searching after {delay}ms pause
         </p>
        
    </div>
  )
}

export default DebouncedSearch;