import React, { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <Button handleClick = {handleClick} text='click me' >
        <h1>{count}</h1>
        </Button>
      {/* <Card name="Ammar" >
          <h1>HEADING </h1>
          <p>This is a para for practice</p>
         <p>This is second para anyway</p>
        </Card>
   
   <Card children="I am a child">
    Hello This is second reusability of Card Component
   </Card> */}
    </div>
  )
}

export default App