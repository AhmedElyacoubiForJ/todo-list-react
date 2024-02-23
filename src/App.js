import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const handleAddTodo = () => {
    const todoTxt = inputRef.current.value
    const todoObj = { name: todoTxt, isDone: false }

    setTodos([...todos, todoObj])
    inputRef.current.value = ''
  }

  const handleIsDoneTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone
    setTodos(newTodos)
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {/* {todos.map(({ name }) => { return (<li>{name}</li>) })} */}
          {
            // todos.map(
            //   (todo, index) => {
            //     return (  // index as key is not the best practice, but here is ok
            //       <li
            //         className={todo.isDone ? "done" : ""}
            //         key={index}
            //         onClick={() => handleIsDoneTodo(index)}>
            //         {todo.name}
            //       </li>
            //     )
            //   }
            // )

            todos.map(
              ({ name, isDone }, index) => {
                return (  // index as key is not the best practice, but here is ok
                  <div className='list-item'>
                    <li
                      className={isDone ? "done" : ""}
                      // style={{textDecoration: isDone ? "line-through" : ""}}
                      key={index}
                      onClick={() => handleIsDoneTodo(index)}> {name}
                    </li>
                    <span onClick={() => handleDeleteTodo(index)}>❌</span>
                  </div>
                )
              }
            )
          }
        </ul>
        <input ref={inputRef} placeholder='Enter todo...' />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
