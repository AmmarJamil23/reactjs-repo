import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

    const submitHandler = (e) => {
    e.preventDefault();
    

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask);
    
    // console.log(title, details);


    setTitle("");
    setDetails("")
  }

  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex  flex-col lg:w-1/2 items-start gap-4 p-10 '>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
       
       {/* /*First input for Heading */ }
          <input type="text" placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium  py-2 border-2 rounded outline-none'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}/>
    
    {/* /*Deatiled Input */ }
        <textarea
         type="text"
         className='px-5 w-full h-30 py-2 font-medium border-2 rounded' 
         placeholder='Write Details Here'
         value={details}
         onChange={(e) => {
            setDetails(e.target.value)
         }}/>

         <button className='bg-white active:bg-gray-200  text-black w-full px-5 py-2 rounded font-medium'>
          Add Note
          </button>
        
        
       
      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-3xl font-bold'>Recent Notes</h1>

      <div className='flex flex-wrap gap-5 mt-5 h-full border-l-2 overflow-auto'>
         {task.map(function(elem, idx){
         return <div key={idx} className='h-52 w-40 px-4 py-8 bg-cover rounded text-black bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s)] '>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-3 leading-tight font-medium text-gray-700'>{elem.details}</p>
         </div>
         })}
        
      </div>

      </div>

    </div>
  )
}

export default App