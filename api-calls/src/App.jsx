import React from 'react'
import axios from 'axios';

const App = () => {
  // function getData() {
    // console.log("Data is Served");
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))


    
  // }
  const getData = async () => {
    // console.log("Hello");
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
   console.log(res.data);
   

    
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App