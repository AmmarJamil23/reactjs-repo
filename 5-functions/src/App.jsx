import React from 'react'

const App = () => {

  // const btnclicked = (() => {
  //   console.log("Clicked yay")
  // })


  // const mouseenter = (() => {
  //   console.log("Mouse Entered");
  // })
  return (
    // <div>
    //   <button onMouseEnter={mouseenter} onDoubleClick={btnclicked}>Click Here</button>
    // </div>
    <>
    {/* <input onChange={(elem)=> {

      console.log(elem.target.value);

    }} 
    type="text"
    placeholder='Enter Name' /> */}
    <div onMouseMove={(elem) => {
      console.log(elem.clientY);
      
    }} className="box"></div>
    </>
  )
}

export default App