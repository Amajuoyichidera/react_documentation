import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectHook() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)
 
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
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

  return (
    <div>
        <h2>My Api Data</h2>
        {data.map(user => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
        ))}
        <h2>Count: {count} </h2>
    </div>
  )
}

export default UseEffectHook