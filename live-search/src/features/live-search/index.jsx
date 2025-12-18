import React from 'react'
import { useState } from "react";

const LiveSearch= () => {
    const [query, setQuery] = useState("");

    const users =[
        "Ammar",
        "Daniyal",
        "Abdullah",
        "Rafay",
        "Salaar",
        "Hassan"
    ];

    const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className='max-w-md space-y-4'>
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="w-full border px-3 py-2 rounded"
        type="text"
        />

        {filteredUsers.length === 0 && (
            <p className='text-sm text-gray-500'>
                No result found
            </p>
        )}

        <ul className='border rounded divide-y'>
            {filteredUsers.map((user) => (
                <li key={user} className='px-3 py-2'>
                    {user}
                </li>
            ))}
          
        </ul>
    </div>
  )
}

export default LiveSearch;