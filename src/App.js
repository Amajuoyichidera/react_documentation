import './App.css';
import { useState } from 'react';
import MyButton from './components/MyButton';
import Profile from './components/Profile';


function App() {
  
  const user = {
    name: 'Santa Cruz',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

   const fruits = [
    { name : 'banana', isSweet: true, id : 1 },
    { name : 'orange', isSweet: false, id : 2 },
    { name : 'guava', isSweet: false, id : 3 },
    { name : 'apple', isSweet: true, id : 4 },
   ]

   const fruitList = fruits.map(fruit =>
     <div key={fruit.id}>
      <h2 style={{ color : fruit.isSweet ? 'red' : 'purple' }}> {fruit.name} </h2>
     </div>
    )

    const [count, setCount] = useState(0)

    function justClick(params) {
      setCount(count + 1)
    }



  return (
    <div className="App">
      <h1> {user.name} </h1>
      <img src={user.imageUrl} style={ { width: user.imageSize, height: user.imageSize }} />

      <MyButton count = {count} justClick = {justClick} fruitList={fruitList} />
      <MyButton count = {count} justClick = {justClick} />
      <Profile isProgrammingLanguage = {true} language = 'python' />
      <Profile isProgrammingLanguage = {false} language = 'Cruz' />
      <Profile isProgrammingLanguage = {true} language = 'Javascript' />
    </div>
  );
}

export default App;
