import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import InputField from './components/InputField';


function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText("")
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) { return todo; }
          else {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
        }
      )
    )
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo} />
    </div>
  );
}

export default App;
