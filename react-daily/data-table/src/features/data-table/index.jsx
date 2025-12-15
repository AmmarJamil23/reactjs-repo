import React from 'react'

const data = [
    { id: 1, name: "Ammar", role: "Full-Stack Developer", age: 22},
    { id: 2, name: "Daniyal", role: "AI-Engineer", age: 15},
    { id: 3, name: "Abdullah", role: "Product Manager", age : "17"}
]

const DataTable = () => {
  return (
    <div className='overflow-x-auto rounded border'>
   <table className='w-full border bg-gray-300'>
    <thead className='bg-gray-100'>
        <tr>
            <th className='px-4 py-2 text-left'>Name</th>
            <th className='px-4 py-2 text-left'>Role</th>
            <th className='px-4 py-2 text-left'>Age</th>
        </tr>
    </thead>

    <tbody>
        {data.map(row => (
             <tr key={row.id}>
            <td className='px-4 py-2 border'>{row.name}</td>
            <td className='px-4 py-2 border'>{row.role}</td>
            <td className='px-4 py-2 border'>{row.age}</td>
        </tr>
        ))}
    </tbody>
   </table>
   </div>
  )
}

export default DataTable