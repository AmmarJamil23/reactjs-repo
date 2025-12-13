import React from 'react'

const Pagination = ({
    currentPage =1,
    totalPages = 1,
    onPageChange = () => {}
}) => {
  return (
    <div className='flex gap-2 items-center'>
        <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='px-3 py-1 border rounded disabled:opacity-50'
        >
            Prev
        </button>

     <div className='flex gap-1'>
        {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
                <button
                key={page}
                onClick={() => onPageChange(page)}
                className={ `
                    px-3 py-1 rounded border
                    ${page === currentPage
                    ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-100" 
                    }`}
                
                >
                    {page}
                </button>
            )
        })}
     </div>

        <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='px-3 py-1 border rounded disabled:opacity-50'
        >
            Next
        </button>
        
    </div>
  )
}

export default Pagination;