import React from 'react'
import Pagination from './features/pagination'
import { useState } from 'react'

const App = () => {
  const [page, setPage] = useState(1);
  return (
    <div className='p-10 space-y-4 '>
      <Pagination
      currentPage={page}
      totalPages={5}
      onPageChange={setPage}
       />
    </div>
  )
}

export default App