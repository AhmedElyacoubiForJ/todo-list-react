import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const addTodoHandler = () => {
    const textInput = inputRef.current.value
    setTodos([...todos, textInput])
    inputRef.current.value = ''
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <ul>
        { todos.map( (todo) => { return (<li>{todo}</li>) } ) }
      </ul>
      <input  ref={inputRef} placeholder='Enter todo...'/>
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
}

export default App;
