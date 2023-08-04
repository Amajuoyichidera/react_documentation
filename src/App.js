import './App.css';
import { useState } from 'react';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import Child from './components/ParentProp';
import PropChallenge from './components/PropChallenge';
import ConditionalRendering from './components/ConditionalRendering';


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

   const [color, setColor] = useState('orange')

    function changeBackground(e) {
      setColor(e.target.value)
    }
   
  return (
    <div className="App">
      
      <div style={{ backgroundColor: color, color: 'white', padding: '20px'}}>
        <h3>select color to change background</h3>
        <select onChange={changeBackground}>
          <option value='orange'>orange</option>
          <option value='green'>green</option>
          <option value='black'>black</option>
        </select>
      </div>
     
      <h1> {user.name} </h1>
      <img src={user.imageUrl} style={ { width: user.imageSize, height: user.imageSize }} />
      <div>
       <h1>those marked are food</h1>
       <ConditionalRendering isFood = {true} name='Rice' />
       <ConditionalRendering isFood = {false} name='stick' />
       <ConditionalRendering isFood = {true} name='Beans' />
      </div>
      
      <Child />
      <MyButton count = {count} justClick = {justClick} fruitList={fruitList} />
      <MyButton count = {count} justClick = {justClick} />
      <Profile isProgrammingLanguage = {true} language = 'python' />
      <Profile isProgrammingLanguage = {false} language = 'Cruz' />
      <Profile isProgrammingLanguage = {true} language = 'Javascript' />
      <div>
        <h1>Notable Scientists</h1>
        <PropChallenge  person={{name:'Maria Skłodowska-Curie', profession:'physicist and chemist', awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        img: 'https://i.imgur.com/szV5sdG.jpg', discovered : 'polonium (element)'
        }} />

        <PropChallenge person={{name:'Katsuko Saruhashi', profession:'geochemist', awards:'Miyake Prize for geochemistry, Tanaka Prize',
        img: 'https://i.imgur.com/YfeOqp2.jpg', discovered : 'a method for measuring carbon dioxide in seawater'
        }} />
    </div>
    </div>
  );
}

export default App;
