import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link className='navLink' to='/' >Todo</Link></li>
                {/* <li><Link className='navLink' to='/addtodo' >Create Todo</Link></li> */}
                <li><Link className='navLink' to='/signin'>Signin</Link></li>
                <li><Link className='navLink'to='/signup'>Signup</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;