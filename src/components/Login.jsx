import { Container } from '@mui/system';
import React from 'react';
const Login=()=>{
    return(
        <>
       <container className="forms">
       <form action="" className='Form'>
            <h1 className='heading'>Login Here</h1>
            <div className='one'>
                <label  className='ones'>Email or Username</label>
                <input type="text" name="Username" id="Username"/>
            </div>
            <div  className='two'>
                <label>Password</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div  className='three'>
                <label>Incorrect username or password Try again</label>
                <input type="submit" name="button" id="button"/>
            </div>
        </form>
       </container>
        </>
    )
}
export default Login;