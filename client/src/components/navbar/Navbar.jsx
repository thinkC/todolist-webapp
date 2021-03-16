import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({userData, setUserData}) => {
    // const [userData, setUserData] = useState({
    //     token: undefined,
    //     user: undefined
    //   })
    //tokenIsValid

    // useEffect(()=>{

    // })

      console.log(userData)
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