import React from 'react'
import Dropdown from './features/dropdown'

const App = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <div style={{ padding: "40px"}}>
      <Dropdown options={fruits} />
      
    </div>
  )
}

export default App