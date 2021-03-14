import React from 'react';

const SignUp = () => {
    return ( 
        <>
        <div className='container'>
            <h2>signup</h2>
            <form>
            <div className='form-group'>
            <label className="label" for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name"></input>
            </div>

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
 
export default SignUp;