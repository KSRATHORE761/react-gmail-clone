import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice';

function Login() {
  const dispatch = useDispatch();
  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then(({user})=>{
      dispatch(
        login({
          displayName : user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        })
      );
    })
    .catch((error) => alert(error.mmessage))
  }
  return (
    <div className='login'>
    <div className='login__container'>
      <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png?20221017173631'
      alt="">
      </img>
      <br></br>
      <Button onClick={signIn} 
      variant='contained'
      color='primary'>Login</Button>
    </div>
      
    </div>
  )
}

export default Login
