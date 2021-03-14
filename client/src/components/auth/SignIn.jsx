import React from 'react';

const Login = () => {
    return ( 
        <>
        <div className='container'>
            <h2>signin</h2>
            <form>
            <div className='form-group'>
            <label className="label" for="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
            </div>
            <div className='form-group'>
            <label className="label" for="email">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password"></input>
            
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
     );
}
 
export default Login;