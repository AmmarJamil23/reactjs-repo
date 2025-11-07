import React, { useState } from 'react'

const App = () => {
  // const [a, seta] = useState(220);
  // const [username, setUsername] = useState("Customer1");
  // const [users, setusers] = useState([10, 20 ,30]);

  // function changeA() {
  //   seta(30);
  //   setUsername("Rehmaan");;
  //   setusers([30, 40 ,120]);
  //   // console.log("Button is clicked ")
  // }
  const [num, setNum] = useState(0);

  function Increment() {
    setNum(num+1);
    console.log("Incrementing");

  }

  function Decrement() {
    setNum(num-1);
    console.log("Decrementing");
    
  }

  function Incrementby5() {
    setNum(num+5);
  }



  return (
    <div>
      {/* <h1>Value of a is {a} <br /> value of name is {username} <br /> {users} </h1>
      <button onClick={changeA}>Click</button> */}
      <h1>{num}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Incrementby5}>Increment by 5</button>
    </div>
  )
}

export default App