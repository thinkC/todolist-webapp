import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TodoList from './components/todo/TodoList';
import Navbar from './components/navbar/Navbar';
import AddTodoList from './components/todo/AddTodoList';

const App = () => {
  return ( 
    <>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
    {/* <Route path='/addtodo' component={AddTodoList}/> */}
    <Route path='/' component={TodoList}/>
    
    </Switch>

    </BrowserRouter>
    </>
   );
}
 
export default App;