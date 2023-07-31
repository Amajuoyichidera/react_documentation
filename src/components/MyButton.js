import React from 'react'

function MyButton({ count, justClick, fruitList}) {
  return (
    <div>
        {fruitList}
        <button onClick={justClick}>clicked {count} times</button>
    </div>
  )
}

export default MyButton