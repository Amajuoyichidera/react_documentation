import React from 'react'
import { useState } from 'react'

function Panel({ 
    title,
    description
}) {

    const [active, setActive] = useState(true)

  return (
    <div>
        {active ? 
        <div>
            <h3>{title}</h3>
            <button onClick={() => setActive(!active)}>Show</button>
        </div>
         :  
         <div>
            <p>{description}</p>
            <button onClick={() => setActive(!active)}>Hide</button>
         </div>
          }
      

        {/* <input type='checkbox' checked={active}  onChange={(e) => setActive(e.target.checked)} />
        {active ? 
        <p>Good</p> : <p>{description}</p>
        } */}


        {/* {active && 
          <h3>{title}</h3>
        }
        {!active &&
        <p>{description}</p>
        } */}

        
    </div>
  )
}

export default Panel