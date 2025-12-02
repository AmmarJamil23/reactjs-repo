import React from 'react'
import Alert from "./features/alert"
import { useState } from "react";

const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    
    <div className='p-10 space-y-4'>
      {showAlert && (
        <Alert
         message="Profile updated successfully"
         type="success"
         onClose={() => setShowAlert(false)}
         />
      )}

      <button
      onClick={() => setShowAlert(true)}
      className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Show Alert Again
      </button>
      
    </div>
    
  )
}

export default App