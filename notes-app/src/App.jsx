import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
  }
  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex  flex-col lg:w-1/2 items-start gap-4 p-10 '>
      
          <input type="text" placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium  py-2 border-2 rounded outline-none'/>
    
        <textarea
         type="text"
         className='px-5 w-full h-30 py-2 font-medium border-2 rounded' 
         placeholder='Write Details'/>

         <button className='bg-white   text-black w-full px-5 py-2 rounded font-medium'>Add Note</button>
        
        
       
      </form>

      <div className='flex lg:w-1/2 flex-wrap px-5 p-10'>
        <div className='h-32 w-32 rounded-2xl bg-white'></div>

      </div>

    </div>
  )
}

export default App