import React from 'react'
import { createContext, useContext } from 'react'

export const myUserContext = createContext()
function UseContextHook() {
    const user = useContext(myUserContext)

  return (
    <div>
        <h1>Hello my name is {user.name}</h1>
        <h2>I'm {user.age} years old</h2>
        <p>I'm a {user.occupation}</p>
    </div>
  )
}

export default UseContextHook