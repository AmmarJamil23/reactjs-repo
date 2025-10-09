import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)


  //First ==> side-effect function
  //Second ==> clean-up function
  //Third ==> comma seperated dependency list

//variation: 1
// runs on every render

  // useEffect(() => {
  //   alert("I will run on each render")
  
  // })

  // function handleClick() {
    // setCount(count + 1);

  // }

  //varaition 2
  //that runs on only first render

  // useEffect(() => {
  //   alert('I will run on only first render')
    
  // }, [])

  //variation3

  // useEffect(() => {
  //   alert('I will run everytime when count is updated')
   
    
  // }, [count])

  //variation 4
  //multiple dependencies

  useEffect(() => {
    alert('I will run on every time when count/total is updated')
   
  }, [count, total])
  

  

    function handleClick() {
    setCount(count + 1);

  }
  function handleClickTotal() {
    setTotal(total + 1)


  }
  

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />

      Count is : {count}

      <br />
        <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />

      Total is : {total}
    </div>
  )
}

export default App