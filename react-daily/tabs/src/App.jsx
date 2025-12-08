import React from 'react'
import Tabs from './features/tabs'

const App = () => {
  const myTabs = [
    { label: "Home", content:  <p>This is Home Tab </p>},
    { label: "Profile", content: <p>This is  Profile info</p>},
    { label: "Settings", content: <p>Change Settigns here</p>},
    {label: "Work", content: <h1>This is Work in Bold</h1>}
  ]
  return (
    <div className='p-10'>
      <Tabs tabs={myTabs} />
    </div>
  )
}

export default App