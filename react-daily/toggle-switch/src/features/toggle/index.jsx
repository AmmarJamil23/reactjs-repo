import React from 'react'

const ToggleSwitch = ({
    label,
    enabled,
    onChange
}) => {
  return (
    <div className='flex items-center gap-3 cursor-pointer' onClick={() => onChange(!enabled)}>
      <span className='text-sm font-medium text-gray-500 select-none'>
        {label}
      </span>

      
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? "bg-blue-600" : "bg-gray-200"

          

        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
        
      </button>
    </div>
  )
}

export default ToggleSwitch