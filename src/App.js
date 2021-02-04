import React, {useState} from 'react';
import Message from './Message.js';
import './App.css';

function App() {
  
  let  [count , setCount] = useState(0);
  let [isMorning , setMorning] = useState(true);

  return (
    <div className= {`box ${isMorning ? 'dayLight' : ''}`} >
      <h1> Have a Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      
      <br/>
      
      <button className=
      'button' onClick= {() => setCount(count +1)}>
        Update Counter </button>
        
       <button className=
       'button1' onClick= {() =>setMorning (!isMorning)}>
       Update Day </button>
    </div>
  );
}

export default App;
