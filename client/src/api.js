export const getTodos = ()=> fetch('http://localhost:3001/api/todos/')
.then(res => res.json());

export const createTodos = (todo) => fetch('http://localhost:3001/api/todos/',{
    method: "POST",
    headers:{
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    body:JSON.stringify(todo)
})

export const deleteTodo = (id) => fetch('http://localhost:3001/api/todos/'+ id,{
    method: "POST",
    headers:{
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    body:JSON.stringify(id)
})