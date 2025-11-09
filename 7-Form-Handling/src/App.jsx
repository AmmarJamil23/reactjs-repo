
import React, { useState} from 'react'


const App = () => {
    const [title, setTitle] = useState('')


  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("form submitted by ", title);

    setTitle('')
  }
  return (
    <div>

      <form onSubmit={(elem) => {
        submitHandler(elem)
      }} action="">

        <input type="text" 
        placeholder='Enter your name'
        value={title} 
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        // onChange={(e)=> {
        //   console.log(e);
        //   console.log(e.target);
        //   console.log(e.target.value);

        // }}
        />
        {/* <input type="text" /> */}
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App