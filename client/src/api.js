
export const getTodos = ()=> fetch(process.env.REACT_APP_baseAPIURL+'/api/todos')
.then(res => res.json());

export const createTodos = (todo) => fetch(process.env.REACT_APP_baseAPIURL+'/api/todos/',{
    method: "POST",
    headers:{
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    body:JSON.stringify(todo)
})

export const deleteTodo = (id) => fetch('http://localhost:4000/api/todos/'+ id)
.then((res)=>{
    console.log(res)
    console.log('user successfully deleted')
}).catch((error)=>{
    console.log(error.message)
})