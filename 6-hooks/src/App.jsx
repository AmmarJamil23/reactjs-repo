import React, { useState } from 'react'

const App = () => {
  const [a, seta] = useState(220);

  function changeA() {
    seta(30);
  }



  return (
    <div>
      <h1>Value of a is {a} </h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App