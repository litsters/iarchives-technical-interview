import React, { useState } from 'react';
import { TodoItem } from './Types';

const Items:TodoItem[] = [
  { key: 1, done: false, text: 'Learn JavaScript' }
]

const App:React.FC = () => {
  const [items, setItems] = useState(Items);

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
