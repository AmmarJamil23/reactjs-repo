import React from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react"

const Alert = ({ message = "Default alert", 
  type = "info",
  onClose = () => {}
}) => {

    const colors = {
        success: "bg-green-100 text-green-800 border-green-300",
        error: "bg-red-100 text-red-800 border-red-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
        info: "bg-blue-100 text-blue-800 border-blue-300"
    }

    const baseClasses = "p-4 border rounded flex items-start gap-3 transition-all duration-300";

  return (
    <div className={`${baseClasses} ${colors[type]}`} >
      <span className='mt-1'>
        {type === "success" && <CheckCircle size={20} />}
        {type === "error" && <XCircle size={20} />}
        {type === "warning" && <AlertTriangle size= {20} />}
        {type === "info" && <Info size={20}/>}
      </span>


        <div className='flex-1'>{message}</div>

        <button
        onClick={onClose}
        className='text-gray-600 hover:text-black group'
        >
          <X 
  className="w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all" 
/>

        </button>
    </div>
  )
}

export default Alert;