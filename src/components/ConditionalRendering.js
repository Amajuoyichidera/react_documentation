import React from 'react'

function ConditionalRendering({ isFood, name}) {
    
    let oil,ingredient,spicy;
    if (name === 'Beans') {
        oil = 'red oil';
        ingredient = 'yam';
        spicy = 'maggi, salt and pepper';
    } else if(name === 'Rice') {
        oil = 'groundnut oil';
        ingredient = 'meat';
        spicy = 'tomato, pepper, maggi and salt';
    }
   
    return (
        <div>
            <h1>{isFood ? name + '✔' : name + '❌' }</h1>
            <h3>Oil: {oil}</h3>
            <h3>Ingredients: {ingredient}</h3>
            <h3>Spicy: {spicy}</h3>
        </div>
    )
    // this works
//   if(isFood) {
//     return <h2>{name}✔</h2>
//   }
//   return <h2>{name}❌</h2>
    


// this works too
    // return (
    //     <h1> {name} {isFood && '✔' } </h1>
    // )


// this works too
    // let foodNames = name

    // if(isFood) {
    //     foodNames = (
    //         <del> {name + '✔'} </del>
    //     )
    // }

    // return (
    //     <div>
    //         {foodNames}
    //     </div>
    // )

}


export default ConditionalRendering