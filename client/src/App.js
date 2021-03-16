import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TodoList from './components/todo/TodoList';
import Navbar from './components/navbar/Navbar';
import AddTodoList from './components/todo/AddTodoList';
import axios from 'axios';



const App = () => {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
   let token = '';
    const tokenResponse = await axios.post('http://localhost:4000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
    if (tokenResponse.data) {
    const userRes = await axios.get("http://localhost:4000/users/", {
    headers: { "x-auth-token": token },
    });
    setUserData({
    token,
    user: userRes.data,
    });
    console.log(userRes)
    console.log(userData)
    }
    }
    checkLoggedIn();
    }, []);

  return ( 
    <>
    <BrowserRouter>
    <Navbar userData={userData} setUserData={setUserData} />
    <Switch>
    <Route exact path='/signin' component={SignIn}/>
    {/* <Route path='/signup' component={SignUp}/> */}
    <Route exact path='/signup'>
      <SignUp userData={userData} setUserData={setUserData} />
    </Route>
    {/* <Route path='/addtodo' component={AddTodoList}/> */}
    {/* <Route exact path='/' component={SignIn}/> */}
    <Route exact path='/signin'>
      <SignIn userData={userData} setUserData={setUserData} />
    </Route>
    <Route exact path='/todos' component={TodoList}/>
    <Route exact path='/' component={SignIn}/>
    
    </Switch>

    </BrowserRouter>
    </>
   );
}
 
export default App;