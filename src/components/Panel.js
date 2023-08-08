import React from 'react'
import { useState } from 'react'

function Panel({ 
    title,
    description
}) {

    const [active, setActive] = useState(true)

  return (
    <div>
        <h3>{title}</h3>
        {active ? 
            <button onClick={() => setActive(false)}>Show</button> 
        :
            <div>
              <p>{description}</p>
              <button onClick={() => setActive(true)}>Hide</button>
            </div> 
        }
    </div>
  )
}

export default Panel