import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import { SetSessionStorage } from './ReactComponents/SessionStorage';
import './CSS/styles.css';

// Port 3002: 
// VSCode: Open folder: C:\A\R\React\DBProject1Server3002
// VSCode: Terminal: node DBProject1Server3002

export default function SignIn() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    const handleSignIn=()=>{
        console.log("handleSignIn")
        console.log('email: ' + email)
        console.log('password: ' + password)

        Axios.post('http://localhost:3002/signIn', { email: email, password: password }
        ).then((data)=>{
            console.log(data)
            if (data.data==='Sign in successful') {

                console.log('email: ' + email)

                Axios.post('http://localhost:3002/getUserByEmail', { email: email}
                ).then((data)=>{
                    console.log('Current User: ' + data.data[0].FNAME)
                    SetSessionStorage('CurrentUser', data.data[0].FNAME)
                    navigate("/TomEnglishAI/Home");
                }).catch((err)=>{
                    console.log(err)
                  })  
                
            }
            else {
                alert('Sign in failed')
            }
        })
    }

    return (
        <div className='homeBlock'>
            <h1>Sign In</h1>
            <div>
                <label>Email</label>
                <br/>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <label>Password</label>
                <br/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <button onClick={()=>{handleSignIn()}}>LOGIN</button>
            <br/>
            <Link to="/SignUp">Don't have an account?</Link>
        </div>
    )
}
