import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(50)

  // useEffect(function() {
  //   console.log("UseEffect is running");
  // }, [num])

  const [a, setA] = useState(0);
  const [b,setB] = useState(0)

  function aChanging() {
    console.log("A value is changing");
    
  }

  function bChanging() {
    console.log(" B value is changing");
  }

  useEffect(function() {
    aChanging();
    // console.log("Use Effect is running...");
  }, [a])

  return (
    <div>
      {/* <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() => {
        setNum(num + 1);

      }}
      onDoubleClick={() => {
        setNum2(num2 + 40)
      }}
      >Click</button> */}
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button
      onClick={() => {
        setA(a + 1);
      }}>
        ChangeA
        </button>

      <button
      onClick={() => {
        setB(b -1 );
      }}>
        ChangeB</button>
    </div>
  )
}

export default App