import React from 'react'

function PropChallenge({ person }) {
    return (
        <div>
            
            <h2> {person.name} </h2>
            <img className="avatar" src={person.img} alt={person.name} width={70} height={70} />
            <ul>
                <li>
                    <b>Profession : {person.profession} </b>
                </li>
                <li>
                    <b>Awards: 4</b>
                    ({person.awards})
                </li>
                <li>
                    <b>Discovered: {person.discovered}</b>
                </li>
            </ul>
        </div>
    )
}

export default PropChallenge
