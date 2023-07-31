import React from 'react'
import {peoples}  from '../data'

function Profile({ isProgrammingLanguage, language }) {

  const peopleList = peoples.map(people => 
    <div key={people.id}>
      <h1> {people.name} </h1>
      <h3> {people.profession} </h3>
      <p> {people.accomplishment} </p>
    </div>
    )

    
  return (
    <div>
        {isProgrammingLanguage ? language + '✔' : language }
        {peopleList}
    </div>
  )
}

export default Profile