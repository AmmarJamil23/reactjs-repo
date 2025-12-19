import React from 'react'
import ToggleSwitch from './features/toggle'
import { useState } from "react"

const App = () => {
  const [enabled, setEnabled] = useState(false);


  return (
    <div className='flex h-screen items-center justify-center bg-gray-50'>
      <ToggleSwitch
      label="Airplane Mode"
      enabled={enabled}
      onChange={setEnabled}
       />
    </div>
  )
}

export default App