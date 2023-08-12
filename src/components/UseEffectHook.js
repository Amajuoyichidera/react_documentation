import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectHook() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
          } catch(error)  {
            console.log(error)
          }
        };
        
        fetchData();
    },[])

  return (
    <div>
        <h2>My Api Data</h2>
        {data.map(user => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default UseEffectHook