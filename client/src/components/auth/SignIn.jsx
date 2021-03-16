import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({userData, setUserData}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const history = useHistory();

const handleLogin = async (e)=>{
e.preventDefault();
try{
    const loginUser = {email, password};
    const loginResponse = await axios.post("http://localhost:4000/api/signin", loginUser);
    
    // setUserData({
    // token: loginResponse.data.token,
    // user: loginResponse.data.user
    // });

        console.log(userData)
    history.push("/todos");
}catch(error){
    console.log(error.message)
}

}
    
    return ( 
        <>
        <div className='container'>
            <h2>signin</h2>
            <form onSubmit={handleLogin}>
            <div className='form-group'>
            <label className="label" for="email">Email address</label>
            <input type="email"
            className="form-control" 
            id="email" 
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <label className="label" for="email">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}
            />
            
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
            <p>not registered ? <Link to='signup'>signup</Link></p>
            </form>
        </div>
        </>
     );
}
 
export default Login;