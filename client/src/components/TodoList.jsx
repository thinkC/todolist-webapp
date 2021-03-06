import React from 'react';
import TodoListItem from '../components/TodoListItem'


// const TodoList = ({ todo, removeTodo }) => {
//     const { id, text } = todo;
//     return (
//         <>
//             <article>
//                 <div className="todo-item">
//                     <p>{text}</p>
//                     <FaTrashAlt className="trash" onClick={() => { removeTodo(id) }} />
//                 </div>
//             </article>


//         </>
//     )
// }


const TodoList = ({ todos, removeTodo }) => {
    return (
        <>
            {todos && todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} />
            })}
        </>
    )
}

export default TodoList;