import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = ({userData, setUserData}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const history = useHistory();

    // const [userData, setUserData] = useState({
    //     token: undefined,
    //     user: undefined
    // })

    // useEffect(() => {
    //    const checkedLoggedIn = async ()=>{
    //        let token = '';

    //        const tokenResponse =  fetch('http://localhost:4000/users/tokenIsValid',{
    //            method: 'POST',
    //            headers:{
    //                "x-auth-token": token
    //            }
               
    //        })
    //        if(tokenResponse.data){
    //         const userRes = await  fetch('http://localhost:4000/users/', {
    //             headers
    //         })
    //     }
    //    }
    // })

    // useEffect(() => {
    //     const checkLoggedIn = async () => {
    //    let token = '';
    //     const tokenResponse = await axios.post('http://localhost:4000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
    //     if (tokenResponse.data) {
    //     const userRes = await axios.get("http://localhost:4000/users/", {
    //     headers: { "x-auth-token": token },
    //     });
    //     setUserData({
    //     token,
    //     user: userRes.data,
    //     });
    //     }
    //     }
    //     checkLoggedIn();
    //     }, []);




const handleSignup =  async (e)=>{
    e.preventDefault();
    // fetch('http://localhost:4000/api/signup',{
    //     method: "POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //     },
    //     body: JSON.stringify({
    //         name,
    //         password,
    //         email
    //     })

    // })


try{
    const newUser = {email, password, name};
    await axios.post("http://localhost:4000/api/signup", newUser);

    const loginResponse = await axios.post("http://localhost:4000/api/signin", {
email, password
});
setUserData({
    token: loginResponse.data.token,
    user: loginResponse.data.user
    });
    history.push("/todos");
}catch(error){
    // error.response.data.message;
    console.log(error.response.data.message)
}


}

    return ( 
        <>
        <div className='container'>
            <h2>signup</h2>
            <form onSubmit={handleSignup}>
            <div className='form-group'>
            <label className="label" for="name">Name</label>
            <input type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
        
         />
            </div>
            <div className='form-group'>
            <label className="label" for="email">Email address</label>
            <input type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e)=> setEmail(e.target.value)}
             />
            </div>
            <div className='form-group'>
            <label className="label" for="email">Password</label>
            <input type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}
            />
            
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
        </>
     );
}
 
export default SignUp;