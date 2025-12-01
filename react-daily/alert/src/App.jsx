import React from 'react'
import Alert from "./features/alert"

const App = () => {
  return (
    <>
    <div className='p-10 space-y-4'>
      <Alert message="Login successful" type="success" />
      <Alert message="Something went wwrong" type="error" />
      <Alert message="Be careful with this action" type="warning" />
      <Alert message="Just letting you know" type="info" />
      
    </div>
    </>
  )
}

export default App