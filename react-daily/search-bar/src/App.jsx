import React, { useState } from 'react'
import SearchBar from './features/search-bar'

const App = () => {
  const [lastSearch, setLastSearch] = useState("");

  function handleSearch(term) {
    setLastSearch(term);
  }
  return (
    <div style={{ padding: "40px"}}>
      <SearchBar onSearch={handleSearch} />
      <p>Last searched: {lastSearch}</p>
    </div>
  )
}

export default App