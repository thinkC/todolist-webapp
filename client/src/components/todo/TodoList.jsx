import React, { useEffect } from 'react';
import dataDB from '..//../data';
import { useState } from 'react';
import TodoListItem from '../todo/TodoListItem';
import AddTodoList from './AddTodoList';
import Alert from './Alert';
import axios from 'axios';
import {createTodos, deleteTodo, getTodos} from '../../api'
import {useHistory } from 'react-router-dom';
// import { post } from '../../../../server/routes/todos';


const TodoList = () => {

  // const [todos, setTodos] = useState(dataDB);
const [todos, setTodos] = useState([]);
const [text, setText] = useState('');
const [alert, setAlert] = useState({ show: false });
const history = useHistory();


// history.push('/');
    // useEffect(()=>{
    //     const url = 'http://localhost:3001/api/todos';
    //     // axios.get(url)
    //     // .then(response =>{
    //     //     // console.log(response)
    //     //     const data = response.data
    //     //     console.log(response.data)
    //     //     return setTodos[data]
    //     // })
    //     // .catch(error => error.message)

    //     const getAPI = async ()=>{
    //         const response = await fetch(url);
    //         const data = await response.json()
    //         try{
    //             console.log(data);
    //             setTodos[data]
                
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getAPI();
    // },[])


//working
    // useEffect(() => {
    //     const getAPI = async () => {
    //         const response = await fetch('http://localhost:3001/api/todos/');
    //         const data = await response.json();

    //         try {
    //             console.log(data);
    //             // setLoading(false);
    //             setTodos(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getAPI();
    // }, []);

    useEffect(()=>{
      const fetchItem = async () =>{
        const todos = await getTodos()
        setTodos(todos)
      }
      fetchItem()
    },[])


    
    //function to submit new todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    if (text && /^[a-zA-Z]+$/i.test(text)) {
    await  createTodos({text:text})
      // setTodos([
      //   ...todos,
      //   { id: new Date().getTime().toString(), text: text }
      // ])

    //   axios.post('http://localhost:3001/api/todos', )

    // async function addTodo(){
    //     try{
    //         const response = await post('http://localhost:3001/api/todos', todo)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
    // addTodo()

      setText("");
      handleAlert({ type: 'success', text: 'task added' })
    } else {

      setText("");
      handleAlert({ type: 'danger', text: 'no empty or illegal character is allowed' })
    }
    
  }

  //function to remove todo
  // const removeTodo = (id) => {
  //   // console.log(id)
  //   let tempTodos = [...todos];
  //   const removedItem = tempTodos.filter((item) => item.id !== id);
  //   setTodos(removedItem);
  // }

  const removeTodo = async (id) => {
    // console.log(id)
    // let tempTodos = [...todos];
    // const removedItem = tempTodos.filter((item) => item.id !== id);
    // setTodos(removedItem);
  let aa =  await deleteTodo(id)
  console.log(aa)
    // console.log(id)
  }

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }


    return ( 
        <>
        <div className="container">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        {/* {console.log(todos)} */}
        {todos && todos.map((todo)=>{
            return <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo}  />
        })}
        <AddTodoList
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
        todos={todos}
        />
        </div>
        </>
     );
}
 
export default TodoList;