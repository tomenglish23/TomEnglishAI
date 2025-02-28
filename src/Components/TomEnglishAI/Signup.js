import '../CSS/styles.css';
import {React,useState} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default function SignUp() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fName, setFName] = useState()
    const [lName, setLName] = useState()

    const handleSubmit=()=>{
        Axios.post('http://localhost:3002/signUp', 
            { email: email, password: password, fName: fName, lName: lName}
        ).then((data)=>{
            console.log(data)
        })
    }

    return (
        <div className='homeBlock'>
            <h1>Sign Up</h1>
            <div>
                <label>First Name</label>
                <br/>
                <input type="text" onChange={(e)=>{setFName(e.target.value)}} />
            </div>
            <div>
                <label>Last Name</label>
                <br/>
                <input type="text" onChange={(e)=>{setLName(e.target.value)}} />
            </div>
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
             <button onClick={()=>{handleSubmit()}}>SUBMIT</button>
            <br/>
            <Link to="/">Already have an account?</Link>
        </div>
    )
}