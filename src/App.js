import './App.css';
import dataDB from '../src/data';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList';
import Alert from './components/Alert';

function App() {
  const [todos, setTodos] = useState(dataDB);
  const [text, setText] = useState('');
  const [alert, setAlert] = useState({ show: false });

  // console.log(todos[0].text)

  //function to submit new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    if (text && /^[a-zA-Z]+$/i.test(text)) {
      setTodos([
        ...todos,
        { id: new Date().getTime().toString(), text: text }
      ])
      setText("");
      handleAlert({ type: 'success', text: 'task added' })
    } else {

      setText("");
      handleAlert({ type: 'danger', text: 'no empty or illegal character is allowed' })
    }
  }

  //function to remove todo
  const removeTodo = (id) => {
    // console.log(id)
    let tempTodos = [...todos];
    const removedItem = tempTodos.filter((item) => item.id !== id);
    setTodos(removedItem);
  }

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }


  return (
    <div className="container">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1 >Todo List App - Testing </h1>
      {/* {todos && todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} removeTodo={removeTodo} />
      })} */}


      <TodoList todos={todos} removeTodo={removeTodo} />
      <AddTodoList
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
        todos={todos}
      />
    </div>
  );
}

export default App;
