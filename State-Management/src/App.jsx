import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10, 20 ,30]);

  const btnClicked =() => {
    const newNum = [...num];
    newNum.push(4000);
    setNum(newNum);
  }

  // const btnClicked = () => {
  //   const newNum = {...num};
  //   newNum.age = 300;
  //   newNum.user = "Daniyal"
  //   setNum(newNum)
  //   console.log(newNum)
  // }

  // function func() {
  //   setNum(num+5);
  // }
  return (
    <div>
      {/* <h1 >{num.user}, {num.age}</h1> */}
      {/* <button onClick={btnClicked}>CLICK</button> */}
      {/* <button onClick={func}>Click</button> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Array</button>
    </div>
  )
}

export default App;