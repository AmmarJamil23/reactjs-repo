import React from 'react'
import { useState } from 'react'

const data = [
    { id: 1, name: "Ammar", role: "Full-Stack Developer", age: 22},
    { id: 2, name: "Daniyal", role: "AI-Engineer", age: 15},
    { id: 3, name: "Abdullah", role: "Product Manager", age : "17"}
]

const DataTable = () => {

    const [sortBy, setSortBy] = useState(null);
    const [direction, setDirection] = useState("asc");
    const [query, setQuery] = useState("");

    const filteredData = data.filter(row => 
        row.name.toLowerCase().includes(query.toLowerCase()) || 
        row.role.toLowerCase().includes(query.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortBy) return 0;

        if (a[sortBy] < b[sortBy]) return direction === "asc" ? -1 : 1;

        if (a[sortBy] > b[sortBy]) return direction === "asc" ? 1 : -1
    })

  return (
    <div className='overflow-x-auto rounded border'>

    <input
     type="text"
     placeholder='Search by name or role...'
     value={query}
     onChange={(e) => setQuery(e.target.value)}
     className='mb-4 w-full px-4 py-2 border rounded'
      />

   <table className='w-full border bg-gray-300'>
    <thead className='bg-gray-100'>
        <tr>
            <th 
            onClick={() => {
                if (sortBy === "name") {
                    setDirection(prev => (prev === "asc" ? "desc" : "asc"));
                } else {
                    setSortBy("name");
                    setDirection("asc");
                }
            }}  
            className='px-4 py-2 text-left border cursor-pointer select-none'>Name</th>

            <th 
            onClick={() => {
                if (sortBy === "role") {
                    setDirection(prev => (prev === "asc" ? "desc" : "asc"));
                } else {
                    setSortBy("role");
                    setDirection("asc");
                }
            }}
            className='px-4 py-2 text-left border cursor-pointer select-none'>Role</th>


            <th 
            onClick={() => {
                if (sortBy === "age") {
                    setDirection(prev => (prev === "asc" ? "desc" : "asc"));
                } else {
                    setSortBy("age");
                    setDirection("asc");
                }
            }}
            className='px-4 py-2 text-left cursor-pointer select-none'>Age</th>
        </tr>
    </thead>

    <tbody>
        {sortedData.length === 0 && (
            <tr>
                <td colSpan={3} 
                className='px-4 py-4 text-center text-gray-500'
                >
                    No results found
                </td>
            </tr>
        )}
        {sortedData.map(row => (
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