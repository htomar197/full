import React, { useContext, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/firebase.js"
import "./signup.css"


const Sign_in = () => {
    const navigate=useNavigate()
    const [msg,setmsg]=useState()
    const [value, setvalue] = useState({
        
        email: "",
        password: ""
        
    });
    const [errorMsg,seterrorMsg]=useState("")

   const handlesubmission=(e)=>{
    
    e.preventDefault()
    if(!value.email || !value.password)
    {
        seterrorMsg("***please all fields")
        
        return;
    }
    seterrorMsg("")
    
    signInWithEmailAndPassword(auth,value.email,value.password).then((result)=>{
        console.log(result)
        setmsg("User is found")
    }).catch((error)=>{
        setmsg("User not found")
        console.log(error)
    })
    
     
   }
    



return (
    <section>
        <div className="sign_container">
            <div className="sign_header">
                <img src="./images/blacklogoamazon.png" alt="signupimg" />
            </div>
            <div className="sign_form">
                <form >
                    <h1>Sign-In</h1>

                      <h4 style={{color:"blue"}}>{msg}</h4>
                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                            onChange={(event)=>setvalue((prev)=>({...prev,email:event.target.value}))}
                            id="email" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                            onChange={(event)=>setvalue((prev)=>({...prev,password:event.target.value}))}
                            id="password" placeholder="At least 6 characters" />
                    </div>
                    <button  className="signin_btn" onClick={handlesubmission}>Continue</button>
                    <b className='errorMsg'>{errorMsg}</b>
                </form>
              
            </div>
            <div className="create_accountinfo">
                <p>New to Amazon?</p>
                <button>  <NavLink to="/register">Create your Amazon Account</NavLink></button>
            </div>
        </div>

    </section>
)
}

export default Sign_in
 
