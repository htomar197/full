
import React, { useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';
import "./signup.css";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../firebase/firebase.js"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const navigate=useNavigate()
    

    const [value, setvalue] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "", 
        cpassword: ""
    });
    const [errorMsg,seterrorMsg]=useState("")

   const handlesubmission=(e)=>{
    
    e.preventDefault()
    if(!value.fname || !value.email ||!value.mobile || !value.password || !value.cpassword)
    {
        seterrorMsg("***please all fields")
        
        return;
    }
    seterrorMsg("")
    
    createUserWithEmailAndPassword(auth,value.email,value.password,value.fname,value.cpassword).then((result)=>{
        const user= result.user
        updateProfile(user,{
            displayName:value.fname
        })
        console.log(user)
        navigate("/login")
    }).catch((error)=>{
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
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                onChange={(event)=>setvalue((prev)=>({...prev,fname:event.target.value}))}
                               
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                onChange={(event)=>setvalue((prev)=>({...prev,email:event.target.value}))}
                                
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                onChange={(event)=>setvalue((prev)=>({...prev,mobile:event.target.value}))}
                                
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={(event)=>setvalue((prev)=>({...prev,password:event.target.value}))}
                                
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword"
                                onChange={(event)=>setvalue((prev)=>({...prev,cpassword:event.target.value}))}
                                
                                id="passwordg" />
                        </div>
                        
                        <button  className="signin_btn" onClick={handlesubmission} >Continue</button>

                        <b className='errorMsg'>{errorMsg}</b>

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
    )
}

export default Signup;


