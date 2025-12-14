import React from 'react'
import DebouncedSearch from './features/debounced-search'

const App = () => {
  function handleSearch(value) {
    console.log("Searching for:", value);
  }

  return (
    <div className='p-10 max-w-md '>
      <DebouncedSearch onSearch={handleSearch} />
    </div>
  )
}

export default App