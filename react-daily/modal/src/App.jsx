import React, { useState } from 'react'
import Modal from './features/modal'

const App = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className='p-10 space-y-4'>

      <button
      onClick={() => setOpen(true)}
      className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Open Modal
      </button>


      <Modal
      open={open} onClose={() => setOpen(false)}
      >
        <h2 className='text-xl font-semibold'>Hello Modal</h2>
        <p className='mt-2 text-gray-600'>
          This is some modal content
        </p>

      </Modal>
    </div>
  )
}

export default App