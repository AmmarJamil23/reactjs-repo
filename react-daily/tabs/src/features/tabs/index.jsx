import React from 'react'
import { useState, useEffect  } from "react";

const Tabs = ({ tabs = [] }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "ArrowRight") {
                setActive(prev => (prev + 1) % tabs.length);
            }

            if (e.key === "ArrowLeft") {
                setActive(prev => (prev -1 + tabs.length) % tabs.length);
            }

            if (e.key === "Home") {
                setActive(0);
            }

            if (e.key === "End") {
                setActive(tabs.length - 1);
            }
        }

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    }, [tabs.length])

  return (
    <div>
        <div className='flex gap-2 border-b'>
            {tabs.map((tab, index) => {
  return (
    <button
      key={index}
      onClick={() => setActive(index)}
      className={`px-4 py-2 text-sm
        ${active === index ? "border-b-2 border-blue-600 font-medium text-blue-600": "text-gray-600 hover:text-black"}
        `}
    >
      {tab.label}
    </button>
  )
})}
        </div>

        <div className='mt-4 p-4 bg-white rounded shadow-lg border'>
            {tabs[active]?.content || "no content"}
        </div>
    </div>
  )
}

export default Tabs