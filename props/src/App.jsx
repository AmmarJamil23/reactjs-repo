import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
       <Card user='User1' age='30' />

       <Card user='User2' age='25 ' />

       <Card user='User3' age='27' />


    

        
    </div>
  )
}

export default App