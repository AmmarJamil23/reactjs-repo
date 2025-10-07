import React from 'react'
import './App.css'

const App = () => {

  // function handleInputChange() {
  //   console.log("Value is change")
  // }

  // function handlesubmit(e) {

  //   e.preventDefault();
  //   //I ma writing my custom behavior down.
  //   alert("form submitted")

  // }



  return (
    <div>

      <button onClick={() => alert("alert be alert")}> 
        Click me
      </button>

      {/* <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}
      {/* <p onMouseOver={() => {
        handlemouseover();
        
       
      }} >I am a paragraph with an event</p>


      <button onClick={() =>{
        handlClick()
      }}>
        Click me
      </button> */}
    </div>
  )
}

export default App