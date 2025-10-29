import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div className='parent'>
          <div className="card">
        <div className="top">
          <img
            src="data:image/png;base64,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"
            alt="Company Logo"
          />

          <button>Save <Bookmark size={16} /></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>

          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>California, USA</p>
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card