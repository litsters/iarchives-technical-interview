import React, { useState, useEffect } from 'react';
import { TodoItem } from './Types';

const Items:TodoItem[] = [
  { key: 1, done: false, text: 'Learn JavaScript' }
]

const App:React.FC = () => {
  const [items, setItems] = useState(Items);

  useEffect(()=>{
    // Do health check
    const healthCheck = async () => {
      try{
        const response = await fetch('/health')
        if(response.status === 200 && (await response.text()) === "Healthy\n"){
          console.log('Health check passed')
        }
        else console.log('Health check failed')
      }catch(e){
        console.log('An error occurred while making health check')
        console.error(e);
      }
    }
    healthCheck();
  },[])

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map((item) => (
          <li key={item.key}>
              <input type="checkbox" readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App;
