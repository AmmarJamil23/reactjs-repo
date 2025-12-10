import React from 'react'
import Accordion from './features/accordion'

const App = () => {
  const faqs = [
    {
      title: "What is your return policy",
      content: "You can return any item within 30 days of purchase"
    },

    {
      title: "Do you offer international shipping?",
      content: "Yes, we ship to most countries worldwide"
    },

    {
      title: "How can i track my order",
      content: "Once shipped , you will receive a traacking link via email"
    }
  ]

  return (
    <div className='p-10 max-w-xl'>
      <Accordion items={faqs} />
    </div>
  )
}

export default App